import * as cTree from '../cTree'
import { getRandonm } from '../helpers/getRandom'
import { Value } from '../types'
import {
  evaluateAssignmentExpression,
  evaluateBinaryExpression,
} from '../utils/operators'

export type Evaluator<T extends cTree.Node> = (node: T) => Value

const STACK: [any?] = []

let stackPointer = 0

const ENVIRONMENT: { [identifier: string]: number } = {}

const word_size = 8
const megabyte = 2 ** 20
const buffer = new ArrayBuffer(20 * megabyte)

const MEMORY = new DataView(buffer)

const STACK_TOP = buffer.byteLength
const STACK_BOTTOM = buffer.byteLength / 2
let stackFree = STACK_BOTTOM
const stackAllocateFrame = (index: number) => {}

const HEAP_TOP = buffer.byteLength / 2
const HEAP_BOTTOM = 0
let heapFree = HEAP_BOTTOM

const memoryAllocateBasic = (value: any, type: string, freeIndex: number) => {
  switch (type) {
    case 'char' || 'signed char':
      MEMORY.setInt8(freeIndex, value)

    case 'unsigned char':
      MEMORY.setInt8(freeIndex, value)

    case 'int':
      MEMORY.setInt32(freeIndex, value)

    case 'unsigned int':
      MEMORY.setUint32(freeIndex, value)

    case 'short':
      MEMORY.setInt16(freeIndex, value)

    case 'unsinged short':
      MEMORY.setUint16(freeIndex, value)

    case 'long':
      MEMORY.setBigInt64(freeIndex, value)

    case 'unsinged long':
      MEMORY.setBigUint64(freeIndex, value)

    // Floating Point types

    case 'float':
      MEMORY.setFloat32(freeIndex, value)

    case 'double':
      MEMORY.setFloat64(freeIndex, value)
  }
}

const getRandomHeapAddress = () => getRandonm(HEAP_BOTTOM, HEAP_TOP)

const evaluators: { [nodeType: string]: Evaluator<cTree.Node> } = {
  Literal: function (node: cTree.Literal) {
    return node.value
  },
  BinaryExpression: function (node: cTree.BinaryExpression) {
    const left = actualValue(node.left)
    const right = actualValue(node.right)
    return evaluateBinaryExpression(left, right, node.operator)
  },

  AssignmentExpression: function (node: cTree.AssignmentExpression) {
    const stackIndex = ENVIRONMENT[node.name]
    const currentValue = STACK[stackIndex]?.value
    STACK[stackIndex].value = evaluateAssignmentExpression(
      currentValue,
      actualValue(node.value),
      node.operator
    )
  },

  VariableDeclaration: function (node: cTree.VariableDeclaration) {
    const specifiers = node.typeSequence.value
    const type = node.declarator.type
    const name = node.declarator.name

    const variable = {
      typeQualifiers: specifiers
        .filter((s: cTree.Type) => s.type === 'typeQualifier')
        .map((s: cTree.Type) => s.value),

      typeSpecifiers: specifiers
        .filter((s: cTree.Type) => s.type === 'typeSpecifier')
        .map((s: cTree.Type) => s.value),

      value: null,
    }
    if (type == 'Identifier') {
      STACK.push(variable)
      ENVIRONMENT[name] = stackPointer
      stackPointer += 1
    }
    if (type == 'Pointer') {
      ENVIRONMENT[name] = getRandomHeapAddress()
    }
  },

  VariableInitialization: function (node: cTree.VariableInitialization) {
    const specifiers = node.typeSequence.value

    const name = node.declarator.name
    const isPointer = node.declarator.type === 'Pointer'

    if (isPointer) {
      ENVIRONMENT[name] = node.value
    }
  },
  ExpressionStatement: function (node: cTree.ExpressionStatement) {
    return evaluate(node.expression)
  },
  Pointer: function (node: cTree.Declarator) {
    const name = node.name
  },
  // Identifier: function (node: cTree.Identifier) {
  //   const location = ENVIRONMENT[node.name]
  //   if (location < STACK.length) {
  //     return STACK[location].value
  //   }
  // },
  SequenceStatement: function (node: cTree.SequenceStatement) {
    let res
    for (const instr of node.statements) {
      res = evaluate(instr)
    }
    return res
  },

  Program: function (node: cTree.Program) {
    let res
    for (const instr of node.body) {
      res = evaluate(instr)
    }
    return res
  },
}

export function evaluate(node: cTree.Node) {
  const result = evaluators[node.type](node)
  return result
}

export function actualValue(exp: cTree.Node) {
  const evalResult = evaluate(exp)
  return evalResult
}
