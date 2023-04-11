import {} from 'typescript'
import * as cTree from '../cTree'
import { getRandom } from '../helpers/getRandom'
import {Expression, LabeledStatement} from '../cTree'
import {
  evaluateAssignmentExpression,
  evaluateBinaryExpression,
} from '../utils/operators'

export type Evaluator<T extends cTree.Node> = (node: T) => any

// Code segment (stores function instructions)
const CODE: { [identifier: string]: cTree.FunctionStorage } = {}

// Environment segment
const ENVIRONMENT: {
  [identifier: string]: {
    address: number
    typeSpecifier: string
    typeQualifiers: string[]
  }
}[] = [{}]
const extendEnvironment = (
  name: string,
  address: number,
  typeSpecifier: string,
  typeQualifiers: string[]
) => {
  const lastIndex = ENVIRONMENT.length - 1
  ENVIRONMENT[lastIndex][name] = { address, typeSpecifier, typeQualifiers }
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
    value.forEach((v: any) => {
      const valueType = type.replace('[]', '')
      size += memoryAllocateBasic(
        v.value,
        valueType,
        (freeIndex += getTypeSize(valueType))
      )
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

    case 'float' || 'double':
      MEMORY.setFloat64(freeIndex, value)
      return 8

    default:
      throw Error('not a primitive type (allocate)')
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
      return Number(MEMORY.getBigInt64(index))

    case 'unsigned long':
      return Number(MEMORY.getBigUint64(index))

    // Floating Point types

    case 'float' || 'double':
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

const freeMemory = (address: number, type: string) => {
  if (!isInHeap(address)) {
    throw Error('provided pointer is not in the heap!')
  }
  let size = getTypeSize(type)
  let memoryNode
  if (heapFreeNode.start === address + size) {
    memoryNode = new HeapMemoryNode(
      address,
      heapFreeNode.end,
      heapFreeNode.next
    )
  } else {
    memoryNode = new HeapMemoryNode(address, address + size, heapFreeNode)
  }
  heapFreeNode = memoryNode
}

const getRandomHeapAddress = () => getRandom(HEAP_BOTTOM, HEAP_TOP)

const populateDynamicArray = "penis";

// Interpreter helpers
const getTypeSize = (type: string): number => {
  if (type.includes('*')) {
    return 8
  }

  switch (type) {
    case 'char' || 'signed char':
      return 1

    case 'unsigned char':
      return 1

    case 'int':
      return 4

    case 'unsigned int':
      return 4

    case 'short':
      return 2

    case 'unsigned short':
      return 2

    case 'long':
      return 8

    case 'unsigned long':
      return 8

    // Floating Point types

    case 'float' || 'double':
      return 8

    default:
      return 0
  }
}
type EvaluationResult = {
  value: any
  typeSpecifier: string | null
  address?: number
}
const dispatchWarning = (message: string) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('warning', {
        detail: {
          message,
        },
      })
    )
  } else {
    console.log('Warning:')
    console.warn(message)
  }
}

// EVALUATOR
const evaluators: { [nodeType: string]: Evaluator<cTree.Node> } = {
  Literal: function (node: cTree.Literal): EvaluationResult {
    return { value: node.value, typeSpecifier: null }
  },
  BinaryExpression: function (node: cTree.BinaryExpression): EvaluationResult {
    const left = actualValue(node.left).value
    const right = actualValue(node.right).value
    return {
      value: evaluateBinaryExpression(left, right, node.operator || ''),
      typeSpecifier: null,
    }
  },

  Array: function (node: cTree.cArray) {
    const value = node.value.map((e) => actualValue(e))

    return {
      typeSpecifier: 'Array',
      value,
    }
  },

  ParenthesesExpression: function (
    node: cTree.ParenthesesExpression
  ): EvaluationResult {
    return {
      value: actualValue(node.value).value,
      typeSpecifier: null,
    }
  },

  VariableDeclaration: function (node: cTree.VariableDeclaration) {
    const name = node.identifier
    const typeSpecifier = node.typeSpecifier.value
    const typeQualifiers = node.typeQualifiers.value.map(
      (t: cTree.TypeQualifier) => t.value
    )

    const address = pushOnStack(null, typeSpecifier)
    extendEnvironment(name, address, typeSpecifier, typeQualifiers)
  },

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

  VariableInitialization: function (node: cTree.VariableInitialization) {
    const name = node.identifier
    const leftType = node.typeSpecifier.value
    let { typeSpecifier: rightType, value } = actualValue(node.value)
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
    extendEnvironment(name, address, leftType, typeQualifiers)
  },

  Assignment: function (node: cTree.Assignment) {
    const name: string = node.identifier
    const { address: leftAddress, typeSpecifier: leftType } =
      getEnvironmentValue(name)
    let { typeSpecifier: rightType, value: rightValue } = actualValue(
      node.value
    )

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

    memoryAllocateBasic(value, leftType, leftAddress)
  },

  ArrayAssignment: function (node: cTree.ArrayAssignment) {
    const name = node.identifier
    const { address: arrStart, typeSpecifier: arrType } =
      getEnvironmentValue(name)
    const { typeSpecifier: leftType, value: leftValue } = actualValue(node.left)
    const index = node.index
    const addr = arrStart + (node.index + 1) * getTypeSize(leftType)
    let { typeSpecifier: rightType, value: rightValue } = actualValue(
      node.value
    )

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

  // E.g.: *a = 34;
  PointerValueAssignment: function (node: cTree.PointerValueAssignment) {
    const name = node.pointer.name

    const {
      value: leftValue,
      address: leftAddress,
      typeSpecifier: leftType,
    } = actualValue(node.pointer)

    const { value: rightValue, typeSpecifier: rightType } = actualValue(
      node.value
    )

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
        result = actualValue(s.value)
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
    if (result?.typeSpecifier && result.typeSpecifier !== functionType) {
      dispatchWarning(
        `returning ${result.typeSpecifier} from a function with return type ${functionType}`
      )
    }
    return { value: result.value, typeSpecifier: functionType }
  },

  Identifier: function (node: cTree.Identifier): EvaluationResult {
    const name = node.name
    const address = getEnvironmentValue(name).address

    const typeSpecifier = getEnvironmentValue(name).typeSpecifier

    if (typeSpecifier.includes('[]'))
      return {
        value: address,
        typeSpecifier: typeSpecifier.replace('[]', '') + '*',
      }

    return { value: memoryRetrieveBasic(address, typeSpecifier), typeSpecifier }
  },

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

  VariableAddress: function (node: cTree.VariableAddress): EvaluationResult {
    const name = node.name
    const address = getEnvironmentValue(name).address
    const typeSpecifier = getEnvironmentValue(name).typeSpecifier
    return { value: address, typeSpecifier: typeSpecifier + '*' }
  },
  Malloc: function (node: cTree.Malloc): EvaluationResult {
    const size = evaluate(node.size).value
    if (!(typeof size === 'number')) throw new Error('invalid size argument')

    return {
      value: allocateHeapMemory(size, heapFreeNode),
      typeSpecifier: 'void*',
    }
  },

  Free: function (node: cTree.Free): void {
    const envValue = getEnvironmentValue(node.name)
    const typeSpecifier = envValue.typeSpecifier
    const pointerAddress = envValue.address

    const address = memoryRetrieveBasic(pointerAddress, typeSpecifier)
    freeMemory(address, typeSpecifier.slice(0, -1))

    const lastIndex = ENVIRONMENT.length - 1

    delete ENVIRONMENT[lastIndex][node.name]

    for (let key in ENVIRONMENT[lastIndex]) {
      if (ENVIRONMENT[lastIndex][key].address === address) {
        delete ENVIRONMENT[lastIndex][key]
      }
    }
    console.log('new env: ', ENVIRONMENT)
  },

  SizeOf: function (node: cTree.SizeOf) {
    if (node.arg.type === 'typeSpecifier') {
      return {
        value: getTypeSize(node.arg.value),
        typeSpecifier: 'unsigned long',
      }
    }
    const { value, typeSpecifier } = actualValue(node.arg)
    if (typeSpecifier) {
      return {
        value: getTypeSize(typeSpecifier),
        typeSpecifier: 'unsigned long',
      }
    }
    if (typeof value === 'number') {
      // is Float
      if (Number(value) === value && value % 1 !== 0)
        return { value: 8, typeSpecifier: 'unsigned long' }
      // is Integer
      if (Number.isInteger(value))
        return { value: 4, typeSpecifier: 'unsigned long' }
    }
    throw new Error('Invalid argument')
  },

  PrintHeap: function (node: cTree.PrintHeap) {
    printHeap()
  },

  ArrayAccess: function (node: cTree.arrayAccess) {
    const name = node.name
    const { address: arrStart, typeSpecifier: arrType } =
      getEnvironmentValue(name)
    const type = arrType.replace('[]', '')
    const typeSize = getTypeSize(type)
    const idx = arrStart + (node.index + 1) * typeSize
    // retrieve memory using the memoryRetrieveBasic
    const value = memoryRetrieveBasic(idx, type)
    return {
      value,
      typeSpecifier: type,
    }
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
      throw new Error("error: switch condition is not an integer")
    }
    return evaluateSwitchBody(node.body.statements, condition.value)
  },

  ForLoop: function (node: cTree.ForLoop) {
    // create a new frame
    const frameStart = stackFree
    ENVIRONMENT.push({})

    evaluate(node.initial)
    let condition = evaluate(node.condition)
    while (condition.value) {
      evaluate(node.body)
      evaluate(node.incr)
      condition = evaluate(node.condition)
    }

    ENVIRONMENT.pop()
    stackFree = frameStart
  },

  WhileLoop: function (node: cTree.WhileLoop) {
    // create a new frame
    const frameStart = stackFree
    ENVIRONMENT.push({})

    let condition = evaluate(node.condition)
    while (condition.value) {
      evaluate(node.body)
      condition = evaluate(node.condition)
    }

    ENVIRONMENT.pop()
    stackFree = frameStart
  },

  DoWhileLoop: function (node: cTree.DoWhileLoop) {
    // create a new frame
    const frameStart = stackFree
    ENVIRONMENT.push({})

    let condition = evaluate(node.condition)
    evaluate(node.body)
    while (condition.value) {
      evaluate(node.body)
      condition = evaluate(node.condition)
    }

    ENVIRONMENT.pop()
    stackFree = frameStart
  },

  SequenceStatement: function (node: cTree.SequenceStatement) {
    let res
    for (const instr of node.statements) {
      res = evaluate(instr)
    }
    return res
  },

  Block(node: cTree.Block) {
    // enter scope
    const frameStart = stackFree
    evaluate(node.body)
    // exit scope
    stackFree = frameStart
  },

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
  const nodes = []
  for (let frame of ENVIRONMENT) {
    console.log('frame', frame)
    const pointers = Object.values(frame).filter((v) =>
      v.typeSpecifier.includes('*')
    )

    for (const p of pointers) {
      const address = memoryRetrieveBasic(p.address, p.typeSpecifier)
      if (isInHeap(address)) {
        const type = p.typeSpecifier.slice(0, -1)
        const value = memoryRetrieveBasic(address, type)
        // const addressString = `address: ${node.address} |\n`
        // const typeString = `type: ${node.type} |\n`
        // const valueString = `value: ${node.address} |\n`
        const heapNode = {
          address,
          type,
          value,
        }
        nodes.push(heapNode)
      }
    }
  }
  console.table(nodes.sort((a, b) => a.address - b.address))
}

export function evaluate(node: cTree.Node) {
  const result = evaluators[node.type](node)
  return result
}

export function actualValue(exp: cTree.Node) {
  const evalResult = evaluate(exp)
  return evalResult
}
