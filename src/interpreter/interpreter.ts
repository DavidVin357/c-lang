import * as cTree from '../cTree'
import { getRandom } from '../helpers/getRandom'
import { LabeledStatement } from '../cTree'
import {
  evaluateAssignmentExpression,
  evaluateBinaryExpression,
  evaluatePostfixExpression,
  evaluatePrefixExpression,
} from '../utils/operators'

import { table } from 'table'
import {
  getTypeSize,
  dispatchWarning,
  dispathchTable,
  getLiteralSize,
} from './helpers'

// Code segment (stores function instructions)
const CODE: { [identifier: string]: cTree.FunctionStorage } = {}

// Environment segment
const ENVIRONMENT: {
  [identifier: string]: {
    address: number
    typeSpecifier: string
    typeQualifiers: string[]
    size?: number
  }
}[] = [{}]

const extendEnvironment = (
  name: string,
  address: number,
  typeSpecifier: string,
  typeQualifiers: string[],
  size?: number
) => {
  const lastIndex = ENVIRONMENT.length - 1
  ENVIRONMENT[lastIndex][name] = {
    address,
    typeSpecifier,
    typeQualifiers,
    ...(size && { size }),
  }
}

const getEnvironmentValue = (name: string) => {
  for (let i = ENVIRONMENT.length - 1; i >= 0; i--) {
    const currentFrame = ENVIRONMENT[i]
    if (currentFrame[name]) return currentFrame[name]
  }
  return {
    address: getRandomStackAddress(),
    typeSpecifier: 'int',
    typeQualifiers: null,
    size: 4,
  }
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
  if (type.includes('[]')) {
    let size = 0
    let index = freeIndex
    const valueType = type.replace('[]', '')

    value.forEach((v: any) => {
      size += memoryAllocateBasic(v.value, valueType, index)
      index += getTypeSize(valueType)
    })

    return size
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
      MEMORY.setBigInt64(freeIndex, BigInt(value))
      return 8

    case 'unsigned long':
      MEMORY.setBigUint64(freeIndex, BigInt(value))
      return 8

    // Floating Point types
    case 'float':
    case 'double':
      MEMORY.setFloat64(freeIndex, value)
      return 8

    default:
      throw Error('not a primitive type (allocation)')
  }
}

const memoryRetrieveBasic = (index: number, type: string): any => {
  if (type.includes('*') || type.includes('[]')) {
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
      return Number(MEMORY.getBigInt64(index))

    case 'unsigned long':
      return Number(MEMORY.getBigUint64(index))

    // Floating Point types
    case 'float':
    case 'double':
      return MEMORY.getFloat64(index)

    default:
      throw Error('not a primitive type (retrieve)')
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

const isInStack = (address: number) => {
  return STACK_BOTTOM <= address && address < STACK_TOP
}

// HEAP Operations
class HeapMemoryNode {
  constructor(start: number, end: number, next: any) {
    this.start = start
    this.end = end
    this.next = next
  }
  start: number = HEAP_BOTTOM
  end: number = HEAP_TOP
  next = null
}

const HEAP_TOP = buffer.byteLength / 2
const HEAP_BOTTOM = 0
let heapFreeNode = new HeapMemoryNode(HEAP_BOTTOM, HEAP_TOP, null)

const isInHeap = (address: number) => {
  return HEAP_BOTTOM <= address && address < HEAP_TOP
}

const allocateHeapMemory = (size: number, node: any): number => {
  if (node == null) {
    throw Error('No heap memory available')
  }
  if (node.end - node.start < size) {
    return allocateHeapMemory(size, node.next)
  } else if (node.end - node.start === size) {
    heapFreeNode = node.next

    return node.start
  } else {
    const address = node.start
    node.start += size

    return address
  }
}

const freeMemory = (address: number, size: number) => {
  if (!isInHeap(address)) {
    throw Error('provided pointer is not in the heap!')
  }
  // let size = getTypeSize(type)
  let memoryNode
  if (heapFreeNode.start === address + size) {
    memoryNode = new HeapMemoryNode(
      address,
      heapFreeNode.end,
      heapFreeNode.next
    )
  } else if (heapFreeNode.end === address) {
    memoryNode = new HeapMemoryNode(
      heapFreeNode.start,
      address + size,
      heapFreeNode.next
    )
  } else {
    memoryNode = new HeapMemoryNode(address, address + size, heapFreeNode)
  }
  heapFreeNode = memoryNode
}

// Interpreter helpers

// EVALUATOR

type EvaluationResult = {
  value: any
  typeSpecifier: string | null
  address?: number
  size?: number
}
type Evaluator<T extends cTree.Node> = (node: T) => any

const evaluators: { [nodeType: string]: Evaluator<cTree.Node> } = {
  Literal: function (node: cTree.Literal): EvaluationResult {
    return { value: node.value, typeSpecifier: null }
  },
  BinaryExpression: function (node: cTree.BinaryExpression): EvaluationResult {
    const left = actualValue(node.left)
    const right = actualValue(node.right)
    return {
      value: evaluateBinaryExpression(left, right, node.operator || ''),
      typeSpecifier: null,
    }
  },

  PrefixExpression: function (node: cTree.PrefixExpression): EvaluationResult {
    const right = actualValue(node.right)
    console.log('right', right)
    return {
      value: evaluatePrefixExpression(right, node.operator || ''),
      typeSpecifier: null,
    }
  },

  PostfixExpression: function (
    node: cTree.PostfixExpression
  ): EvaluationResult {
    const left = actualValue(node.left)
    return {
      value: evaluatePostfixExpression(left, node.operator || ''),
      typeSpecifier: null,
    }
  },

  Array: function (node: cTree.cArray) {
    const value = node.value.map((e) => evaluate(e))
    return {
      typeSpecifier: 'Array',
      value,
      length: node.value.length,
    }
  },

  ParenthesesExpression: function (
    node: cTree.ParenthesesExpression
  ): EvaluationResult {
    return {
      value: actualValue(node.value),
      typeSpecifier: null,
    }
  },

  Identifier: function (node: cTree.Identifier): EvaluationResult {
    const name = node.name
    const address = getEnvironmentValue(name).address

    const typeSpecifier = getEnvironmentValue(name).typeSpecifier
    const size = getEnvironmentValue(name).size
    return {
      value: memoryRetrieveBasic(address, typeSpecifier),
      typeSpecifier,
      size,
    }
  },

  // int v = 12;
  VariableInitialization: function (node: cTree.VariableInitialization) {
    const name = node.identifier
    const leftType = node.typeSpecifier.value

    let {
      typeSpecifier: rightType,
      value,
      size,
      length: arrLength,
    } = evaluate(node.value)

    if (arrLength) {
      size = arrLength * getTypeSize(leftType.replace('[]', ''))
    }

    // Casting of types
    if (node.castingType) {
      rightType = node.castingType.value
    }

    if (
      (rightType?.includes('*') || leftType.includes('*')) &&
      !rightType?.includes('void') &&
      rightType !== leftType
    ) {
      dispatchWarning(
        `initialization of ${leftType} from incompatible pointer type ${rightType}`
      )
    }

    const typeQualifiers = node.typeQualifiers.value.map(
      (t: cTree.TypeQualifier) => t.value
    )
    const address = pushOnStack(value, leftType)

    extendEnvironment(name, address, leftType, typeQualifiers, size)
  },

  // v = 45;
  Assignment: function (node: cTree.Assignment) {
    const name: string = node.identifier
    const { address: leftAddress, typeSpecifier: leftType } =
      getEnvironmentValue(name)
    let {
      typeSpecifier: rightType,
      value: rightValue,
      size,
    } = evaluate(node.value)

    // Casting of types
    if (node.castingType) {
      rightType = node.castingType.value
    }

    const leftValue = memoryRetrieveBasic(leftAddress, leftType)

    if (
      (rightType?.includes('*') || leftType.includes('*')) &&
      !rightType?.includes('void') &&
      rightType !== leftType
    ) {
      dispatchWarning(
        `assignment to ${leftType} from incompatible pointer type ${rightType}`
      )
    }

    const value = evaluateAssignmentExpression(
      node.operator || '',
      leftValue,
      rightValue
    )

    const lastIndex = ENVIRONMENT.length - 1

    if (size) {
      ENVIRONMENT[lastIndex][name].size = size
    }

    memoryAllocateBasic(value, leftType, leftAddress)
  },

  // *p = 34;
  PointerValueAssignment: function (node: cTree.PointerValueAssignment) {
    const {
      value: leftValue,
      address: leftAddress,
      typeSpecifier: leftType,
    } = evaluate(node.pointer)

    const { value: rightValue, typeSpecifier: rightType } = evaluate(node.value)

    if (
      (leftType?.includes('*') || rightType?.includes('*')) &&
      !rightType?.includes('void') &&
      leftType !== rightType
    ) {
      dispatchWarning(
        `assignment to ${leftType} from incompatible pointer type ${rightType}`
      )
    }

    const value = evaluateAssignmentExpression(
      node.operator || '',
      leftValue,
      rightValue
    )

    memoryAllocateBasic(value, leftType, leftAddress)
  },

  // arr[i] = x
  ArrayValueAssignment: function (node: cTree.ArrayValueAssignment) {
    const name = node.identifier
    const { address, typeSpecifier } = getEnvironmentValue(name)
    const arrStart = typeSpecifier.includes('*')
      ? memoryRetrieveBasic(address, typeSpecifier)
      : address

    const { typeSpecifier: leftType, value: leftValue } = evaluate(node.left)
    const accessIndex = evaluate(node.index)
    const addr = arrStart + accessIndex * getTypeSize(leftType)
    let { typeSpecifier: rightType, value: rightValue } = evaluate(node.value)

    // Casting of types
    if (node.castingType) {
      rightType = node.castingType.value
    }

    if (
      (rightType?.includes('*') || leftType.includes('*')) &&
      rightType !== leftType
    ) {
      dispatchWarning(
        `assignment to ${leftType} from incompatible pointer type ${rightType}`
      )
    }

    const value = evaluateAssignmentExpression(
      node.operator || '',
      leftValue,
      rightValue
    )

    memoryAllocateBasic(value, leftType, addr)
  },

  FunctionApplication(node: cTree.FunctionApplication): EvaluationResult {
    const frameStart = stackFree

    const name = node.name
    const functionType = CODE[name].typeSpecifier
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
        if (result.typeSpecifier?.includes('*') && isInStack(result.value)) {
          dispatchWarning(`function returns address of local variable `)
        }
        // Remove stack frame
        stackFree = frameStart
        // Remove environment frame
        ENVIRONMENT.pop()
        if (result?.typeSpecifier && result.typeSpecifier !== functionType) {
          dispatchWarning(
            `returning ${result.typeSpecifier} from a function with return type ${functionType}`
          )
        }
        return result
      }
      result = evaluate(s)
    }

    // Warning : returning different type
    if (result?.typeSpecifier && result.typeSpecifier !== functionType) {
      dispatchWarning(
        `returning ${result.typeSpecifier} from a function with return type ${functionType}`
      )
    }

    return { value: result?.value, typeSpecifier: functionType }
  },

  // *ptr, **ptr, ***ptr ...
  PointerExpression: function (
    node: cTree.PointerExpression
  ): EvaluationResult {
    const name = node.name
    let address = getEnvironmentValue(name).address // address of pointer
    let type = getEnvironmentValue(name).typeSpecifier // type of pointer

    if (!type.includes('*')) {
      throw new Error(`${name} of type ${type} is not a pointer`)
    }

    // Check if [**..]var corresponds to its [**..] type
    if (type.split('*').length - 1 < node.multiplicity) {
      throw new Error(
        `${name} of type ${type} is not compatible with ${'*'.repeat(
          node.multiplicity
        )}${name}`
      )
    }

    let pointersNumber = node.multiplicity
    do {
      address = memoryRetrieveBasic(address, type)
      type = type.slice(0, -1) // remove last '*'
      pointersNumber -= 1
    } while (pointersNumber > 0)

    return {
      value: memoryRetrieveBasic(address, type),
      typeSpecifier: type,
      address,
    }
  },

  ArrayAccess: function (node: cTree.arrayAccess) {
    const name = node.name

    const { address, typeSpecifier } = getEnvironmentValue(name)

    const arrStart = typeSpecifier.includes('*')
      ? memoryRetrieveBasic(address, typeSpecifier)
      : address

    const type = typeSpecifier.includes('*')
      ? typeSpecifier.slice(0, -1)
      : typeSpecifier.replace('[]', '')

    const typeSize = getTypeSize(type)

    const accessIndex = actualValue(node.index)

    const idx = arrStart + accessIndex * typeSize

    // retrieve memory using the memoryRetrieveBasic
    const value = memoryRetrieveBasic(idx, type)
    return {
      value,
      typeSpecifier: type,
    }
  },

  // &v
  VariableAddress: function (node: cTree.VariableAddress): EvaluationResult {
    const name = node.name
    const address = getEnvironmentValue(name).address
    const typeSpecifier = getEnvironmentValue(name).typeSpecifier
    return { value: address, typeSpecifier: typeSpecifier + '*' }
  },

  // malloc(num)
  Malloc: function (node: cTree.Malloc): EvaluationResult {
    const size = evaluate(node.size).value
    if (!(typeof size === 'number')) throw new Error('invalid size argument')

    return {
      value: allocateHeapMemory(size, heapFreeNode),
      typeSpecifier: 'void*',
      size,
    }
  },

  // free(num)
  Free: function (node: cTree.Free): void {
    const envValue = getEnvironmentValue(node.name)
    const typeSpecifier = envValue.typeSpecifier
    const pointerAddress = envValue.address
    const size = envValue.size || getTypeSize(typeSpecifier.slice(0, -1))

    const address = memoryRetrieveBasic(pointerAddress, typeSpecifier)
    freeMemory(address, size)

    const lastIndex = ENVIRONMENT.length - 1

    delete ENVIRONMENT[lastIndex][node.name]

    for (let key in ENVIRONMENT[lastIndex]) {
      if (ENVIRONMENT[lastIndex][key].address === address) {
        delete ENVIRONMENT[lastIndex][key]
      }
    }
  },

  // sizeof(type|expr)
  SizeOf: function (node: cTree.SizeOf) {
    // argument is type
    if (node.arg.type === 'typeSpecifier') {
      return {
        value: getTypeSize(node.arg.value),
        typeSpecifier: 'unsigned long',
      }
    }

    const { value, typeSpecifier, size } = actualValue(node.arg)

    if (size) {
      return {
        value: size,
        typeSpecifier: 'unsigned long',
      }
    } else if (typeSpecifier) {
      return {
        value: getTypeSize(typeSpecifier),
        typeSpecifier: 'unsigned long',
      }
    } else {
      return {
        value: getLiteralSize(value),
        typeSpecifier: 'unsigned long',
      }
    }
  },

  PrintHeap: function (node: cTree.PrintHeap) {
    printHeap()
  },

  Print: function (node: cTree.Print) {
    console.log(actualValue(node.value))
  },

  // STATEMENTS
  ExpressionStatement: function (
    node: cTree.ExpressionStatement
  ): EvaluationResult {
    return evaluate(node.expression)
  },

  ConditionalStatement: function (node: cTree.ConditionalStatement) {
    const condition = evaluate(node.condition)
    if (condition) {
      return evaluate(node.truebody)
    } else {
      if (node.falsebody != null) {
        return evaluate(node.falsebody)
      }
    }
  },

  SwitchStatement: function (node: cTree.SwitchStatement) {
    const condition = evaluate(node.condition)
    if (!Number.isInteger(condition.value)) {
      throw new Error('error: switch condition is not an integer')
    }
    return evaluateSwitchBody(node.body.statements, condition.value)
  },

  ForLoop: function (node: cTree.ForLoop) {
    evaluate(node.initial)
    let condition = evaluate(node.condition)
    while (condition.value) {
      evaluate(node.body)
      evaluate(node.action)
      condition = evaluate(node.condition)
    }
  },

  WhileLoop: function (node: cTree.WhileLoop) {
    let condition = evaluate(node.condition)
    while (condition.value) {
      evaluate(node.body)
      condition = evaluate(node.condition)
    }
  },

  DoWhileLoop: function (node: cTree.DoWhileLoop) {
    let condition = evaluate(node.condition)
    evaluate(node.body)
    while (condition.value) {
      evaluate(node.body)
      condition = evaluate(node.condition)
    }
  },

  SequenceStatement: function (node: cTree.SequenceStatement) {
    let res
    const free = stackFree
    ENVIRONMENT.push({})
    for (const instr of node.statements) {
      res = evaluate(instr)
    }
    ENVIRONMENT.pop()
    return res
  },

  // Declarations

  // int v;
  VariableDeclaration: function (node: cTree.VariableDeclaration) {
    const name = node.identifier
    const typeSpecifier = node.typeSpecifier.value
    const typeQualifiers = node.typeQualifiers.value.map(
      (t: cTree.TypeQualifier) => t.value
    )

    const address = pushOnStack(null, typeSpecifier)
    extendEnvironment(name, address, typeSpecifier, typeQualifiers)
  },

  // char [] arr;
  ArrayDeclaration: function (node: cTree.ArrayDeclaration) {
    const name = node.identifier
    const type = node.typeSpecifier.value
    let value = []
    const size = node.size
    for (let i = 0; i < size; i++) {
      value.push(0)
    }
    const typeQualifiers = node.typeQualifiers.value.map(
      (t: cTree.TypeQualifier) => t.value
    )
    const address = pushOnStack(value, type)
    extendEnvironment(name, address, type, typeQualifiers)
  },

  // int func() {...};
  FunctionDeclaration(node: cTree.FunctionDeclaration) {
    const name = node.name
    const typeSpecifier = node.typeSpecifier
    CODE[name] = {
      typeSpecifier,
      body: node.body,
      formals: node.formals.map((formal) => ({
        name: formal.identifier,
        typeSpecifier: formal.typeSpecifier.value,
      })),
    }
  },

  Program: function (node: cTree.Program) {
    node.functionDeclarations.forEach((f) => evaluate(f))

    const program: cTree.FunctionApplication = {
      type: 'FunctionApplication',
      name: 'main',
      args: [],
    }
    const res = evaluate(program)
    return res.value
  },
}

function evaluateSwitchBody(
  statements: Array<LabeledStatement>,
  switchCon: number
) {
  let defaultCount = 0
  let defaultBody

  for (let i = 0; i < statements.length; i++) {
    // handle cases
    const statement = statements[i]
    if (statement.condition != null) {
      const condition = evaluate(statement.condition)
      // check matching case
      if (condition.value === switchCon) {
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
    } else {
      // default case
      defaultCount += 1
      if (defaultCount > 1) {
        throw new Error('error: multiple default labels in one switch')
      }
      defaultBody = statement.body
    }
  }
  // no matching case found, execute default body
  if (defaultBody) {
    console.log('evaluating default case...')
    return evaluate(defaultBody)
  }
}

const printHeap = () => {
  const columnNames = [['ADDRESS', 'TYPE', 'VALUE']]
  const nodes = []
  for (let frame of ENVIRONMENT) {
    const pointers = Object.values(frame).filter((v) =>
      v.typeSpecifier.includes('*')
    )

    for (const p of pointers) {
      const address = memoryRetrieveBasic(p.address, p.typeSpecifier)
      if (isInHeap(address)) {
        let type = p.typeSpecifier.slice(0, -1)
        const typeSize = getTypeSize(type)
        let value

        if (p.size && p.size > typeSize) {
          value = []
          for (let i = 0; i < p.size; i += typeSize) {
            value.push(memoryRetrieveBasic(address + i, type))
          }
          type += '[]'
          value = '[' + value.toString() + ']'
        } else {
          value = memoryRetrieveBasic(address, type)
        }

        const heapNode = [address, type, value]
        nodes.push(heapNode)
      }
    }
  }
  const config = {
    columnDefault: {
      width: 10,
    },
  }
  dispathchTable(
    table(columnNames.concat(nodes.sort((a, b) => a[0] - b[0])), config)
  )
}

export function evaluate(node: cTree.Node) {
  const result = evaluators[node.type](node)
  return result
}

export function actualValue(exp: cTree.Node) {
  const evalResult = evaluate(exp)
  return evalResult.value
}
