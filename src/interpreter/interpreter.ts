import {} from 'typescript'
import * as cTree from '../cTree'
import { getRandom } from '../helpers/getRandom'
import {LabeledStatement} from '../cTree'
import {Value} from '../types'
import {evaluateAssignmentExpression, evaluateBinaryExpression,} from '../utils/operators'

export type Evaluator<T extends cTree.Node> = (node: T) => Value

// Code segment (stores function instructions)
const CODE: { [identifier: string]: cTree.FunctionStorage } = {}

// Environment segment
const ENVIRONMENT: {
  [identifier: string]: {
    address: number
    type: string
    typeQualifiers: string[]
  }
}[] = [{}]
const extendEnvironment = (
    name: string,
    address: number,
    type: string,
    typeQualifiers: string[]
) => {
  const lastIndex = ENVIRONMENT.length - 1
  ENVIRONMENT[lastIndex][name] = { address, type, typeQualifiers }
}
const setEnvironmentValue = (name: string, address: number) => {
  const lastIndex = ENVIRONMENT.length - 1
  ENVIRONMENT[lastIndex][name].address = address
}

const getEnvironmentValue = (name: string) => {
  for (let i = ENVIRONMENT.length - 1; i >= 0; i--) {
    const currentFrame = ENVIRONMENT[i]
    if (currentFrame[name]) return currentFrame[name]
  }
  return { address: getRandomStackAddress(), type: 'int', typeQualifiers: null }
}
// C program memory
const megabyte = 2 ** 20
const buffer = new ArrayBuffer(20 * megabyte)

const MEMORY = new DataView(buffer)
const memoryAllocateBasic = (
    value: any,
    type: string,
    freeIndex: number
): number => {
  if (type.includes('*')) {
    MEMORY.setFloat64(freeIndex, value)
    return 8
  }

  switch (type) {
    case 'char' || 'signed char':
      MEMORY.setInt8(freeIndex, value)
      return 1

    case 'unsigned char':
      MEMORY.setUint8(freeIndex, value)
      return 1

    case 'int':
      MEMORY.setInt32(freeIndex, value)
      return 4

    case 'unsigned int':
      MEMORY.setUint32(freeIndex, value)
      return 4

    case 'short':
      MEMORY.setInt16(freeIndex, value)
      return 2

    case 'unsigned short':
      MEMORY.setUint16(freeIndex, value)
      return 2

    case 'long':
      MEMORY.setBigInt64(freeIndex, value)
      return 8

    case 'unsigned long':
      MEMORY.setBigUint64(freeIndex, value)
      return 8

      // Floating Point types

    case 'float' || 'double':
      MEMORY.setFloat64(freeIndex, value)
      return 8

    default:
      throw Error('not a primitive type')
  }
}

const memoryRetrieveBasic = (index: number, type: string): any => {
  if (type.includes('*')) {
    return MEMORY.getFloat64(index)
  }
  switch (type) {
    case 'char' || 'signed char':
      return String.fromCharCode(MEMORY.getInt8(index))

    case 'unsigned char':
      return MEMORY.getInt8(index)

    case 'int':
      return MEMORY.getInt32(index)

    case 'unsigned int':
      return MEMORY.getUint32(index)

    case 'short':
      return MEMORY.getInt16(index)

    case 'unsigned short':
      return MEMORY.getUint16(index)

    case 'long':
      return MEMORY.getBigInt64(index)

    case 'unsigned long':
      return MEMORY.getBigUint64(index)

      // Floating Point types

    case 'float' || 'double':
      return MEMORY.getFloat64(index)

    default:
      throw Error('not a primitive type')
  }
}

// STACK Operations
const STACK_TOP = buffer.byteLength
const STACK_BOTTOM = buffer.byteLength / 2
let stackFree = STACK_BOTTOM
const pushOnStack = (value: any, type: string) => {
  const address = stackFree
  const size = memoryAllocateBasic(value, type, stackFree)

  stackFree += size

  return address
}
const getRandomStackAddress = () => getRandom(STACK_BOTTOM, STACK_TOP)

// HEAP Operations
const HEAP_TOP = buffer.byteLength / 2
const HEAP_BOTTOM = 0
let heapFree = HEAP_BOTTOM

const allocateHeapMemory = (size: number) => {
  const address = heapFree
  heapFree += size
  return address
}
const getRandomHeapAddress = () => getRandom(HEAP_BOTTOM, HEAP_TOP)

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
    const name: string = node.name
    const { address, type } = getEnvironmentValue(name)

    const currentValue = memoryRetrieveBasic(address, type)
    const newValue = actualValue(node.value)

    const value = evaluateAssignmentExpression(
        node.operator || '',
        currentValue,
        newValue
    )
    const newAddress = pushOnStack(value, type)

    setEnvironmentValue(name, newAddress)
  },

  VariableDeclaration: function (node: cTree.VariableDeclaration) {
    const name = node.declarator.name
    const typeSpecifier = node.typeSpecifier.value
    const typeQualifiers = node.typeQualifiers.value.map(
        (t: cTree.TypeQualifier) => t.value
    )

    const address = pushOnStack(null, typeSpecifier)
    extendEnvironment(name, address, typeSpecifier, typeQualifiers)
  },

  VariableInitialization: function (node: cTree.VariableInitialization) {
    const name = node.declarator.name

    const value = evaluate(node.value)

    const isPointer = node.declarator.type === 'Pointer'

    const typeSpecifier = isPointer
        ? node.typeSpecifier.value + '*'
        : node.typeSpecifier.value

    const typeQualifiers = node.typeQualifiers.value.map(
        (t: cTree.TypeQualifier) => t.value
    )

    const address = pushOnStack(value, typeSpecifier)
    extendEnvironment(name, address, typeSpecifier, typeQualifiers)
  },

  FunctionDeclaration(node: cTree.FunctionDeclaration) {
    const name = node.name
    CODE[name] = {
      body: node.body,
      formals: node.formals.map((f) => ({
        name: f.declarator.name,
        typeSpecifier: f.typeSpecifier.value,
      })),
    }
  },

  FunctionApplication(node: cTree.FunctionApplication) {
    const frameStart = stackFree

    const name = node.name
    const formals = CODE[name].formals
    const args = node.args

    // Set new environment frame
    ENVIRONMENT.push({})

    // Allocate arguments on the stack
    formals.forEach((formal, index) => {
      const name = formal.name
      const typeSpecifier = formal.typeSpecifier
      const value = evaluate(args[index])

      const address = pushOnStack(value, typeSpecifier)
      extendEnvironment(name, address, typeSpecifier, [])
    })

    // Execute body
    const statements = CODE[name].body.statements
    let result = undefined

    for (const s of statements) {
      if (s.type === 'ReturnStatement') {
        result = evaluate(s.value)

        // Remove stack frame
        stackFree = frameStart
        // Remove environment frame
        ENVIRONMENT.pop()
        return result
      }
      result = evaluate(s)
    }
    return result
  },

  Block(node: cTree.Block) {
    // enter scope
    const frameStart = stackFree
    evaluate(node.body)
    // exit scope
    stackFree = frameStart
  },

  ExpressionStatement: function (node: cTree.ExpressionStatement) {
    return evaluate(node.expression)
  },

  Identifier: function (node: cTree.Identifier) {
    const name = node.name
    const address = getEnvironmentValue(name).address
    const type = getEnvironmentValue(name).type
    return memoryRetrieveBasic(address, type)
  },

  Pointer: function (node: cTree.Pointer) {
    const name = node.name.replace('*', '')
    const address = getEnvironmentValue(name).address
    const type = getEnvironmentValue(name).type
    const pointer = memoryRetrieveBasic(address, type)

    return memoryRetrieveBasic(pointer, type)
  },

  VariableAddress: function (node: cTree.VariableAddress) {
    const name = node.name
    const address = getEnvironmentValue(name).address

    return address
  },

  ConditionalStatement: function (node: cTree.ConditionalStatement) {
    const condition = evaluate(node.condition)
    if (condition) {
      return evaluate(node.truebody)
    }
    else {
      if (node.falsebody != null) {
        return evaluate(node.falsebody)
      }
    }
  },
  SwitchStatement: function (node:cTree.SwitchStatement) {
    const condition = evaluate(node.condition)
    if (!Number.isInteger(condition)) {
      console.error("error: switch quantity not an integer")
    }
    return evaluateSwitchBody(node.body.statements, condition)
  },

  SequenceStatement: function (node: cTree.SequenceStatement) {
    let res
    for (const instr of node.statements) {
      res = evaluate(instr)
    }
    return res
  },

  Malloc: function (node: cTree.Malloc) {
    const size = evaluate(node.size)
    if (!(typeof size === 'number')) throw new Error('invalid size argument')

    return allocateHeapMemory(size)
  },

  SizeOf: function (node: cTree.SizeOf) {},

  Program: function (node: cTree.Program) {
    node.functionDeclarations.forEach((f) => evaluate(f))

    const program: cTree.FunctionApplication = {
      type: 'FunctionApplication',
      name: 'main',
      args: [],
    }

    const res = evaluate(program)
    return res
  },
}

export function evaluateSwitchBody(statements: Array<LabeledStatement>, switchCon: number) {
  let defaultCount = 0
  let defaultBody;

  // for (const statement of statements) {
  //   // handle cases
  //   if (statement.condition != null) {
  //     const condition = evaluate(statement.condition)
  //     // check matching case
  //     if (condition === switchCon) {
  //       const res = evaluate(statement.body)
  //       // if the statement has a break, return the result
  //       if (statement.hasBreak) {
  //         return res
  //       }
  //       // otherwise, execute until statement with break
  //
  //     }
  //   }
  for (let i = 0; i < statements.length; i++) {
    // handle cases
    const statement = statements[i]
    if (statement.condition != null) {
      const condition = evaluate(statement.condition)
      // check matching case
      if (condition === switchCon) {
        const res = evaluate(statement.body)
        // if the statement has a break, return the result
        if (statement.hasBreak) {
          return res
        }
        // otherwise, execute until statement with break
        for (let j = i + 1; j < statements.length; j++) {
          const statement = statements[j]
          const res = evaluate(statement.body)
          if (statement.hasBreak) break
        }
        return
      }
    }
    else {
      // default case
      defaultCount += 1
      if (defaultCount > 1) {
        console.error("error: multiple default labels in one switch")
      }
      defaultBody = statement.body
    }
  }
  // no matching case found, execute default body
  if (defaultBody) {
    console.log("evaluating default case...")
    return evaluate(defaultBody)
  }
}

export function evaluate(node: cTree.Node) {
  const result = evaluators[node.type](node)
  return result
}

export function actualValue(exp: cTree.Node) {
  const evalResult = evaluate(exp)
  return evalResult
}
