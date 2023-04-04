import {} from 'typescript'
import * as cTree from '../cTree'
import { getRandom } from '../helpers/getRandom'
import { LabeledStatement } from '../cTree'
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
  return STACK_BOTTOM < address && address < STACK_TOP
}
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

  VariableDeclaration: function (node: cTree.VariableDeclaration) {
    const name = node.identifier
    const typeSpecifier = node.typeSpecifier.value
    const typeQualifiers = node.typeQualifiers.value.map(
      (t: cTree.TypeQualifier) => t.value
    )

    const address = pushOnStack(null, typeSpecifier)
    extendEnvironment(name, address, typeSpecifier, typeQualifiers)
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

    return { value: allocateHeapMemory(size), typeSpecifier: 'void*' }
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
    if (!Number.isInteger(condition)) {
      throw new Error('error: switch quantity not an integer')
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

export function evaluateSwitchBody(
  statements: Array<LabeledStatement>,
  switchCon: number
) {
  let defaultCount = 0
  let defaultBody

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

export function evaluate(node: cTree.Node) {
  const result = evaluators[node.type](node)
  return result
}

export function actualValue(exp: cTree.Node) {
  const evalResult = evaluate(exp)
  return evalResult
}
