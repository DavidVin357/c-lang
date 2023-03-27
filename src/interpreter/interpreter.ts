import * as cTree from '../cTree'
import { Value } from '../types'
import {
  evaluateAssignmentExpression,
  evaluateBinaryExpression,
} from '../utils/operators'

export type Evaluator<T extends cTree.Node> = (node: T) => Value

const STACK: [any?] = []

let stackPointer = 0

const ENVIRONMENT: { [identifier: string]: number } = {}

const evaluators: { [nodeType: string]: Evaluator<cTree.Node> } = {
  Literal: function (node: cTree.Literal) {
    return node.value
  },
  BinaryExpression: function (node: cTree.BinaryExpression) {
    const left = actualValue(node.left)
    const right = actualValue(node.right)
    return evaluateBinaryExpression(node.operator, left, right)
  },

  AssignmentExpression: function (node: cTree.AssignmentExpression) {
    const stackIndex = ENVIRONMENT[node.name]
    const currentValue = STACK[stackIndex]?.value
    STACK[stackIndex].value = evaluateAssignmentExpression(
      node.operator,
      currentValue,
      actualValue(node.value)
    )
  },

  VariableDeclaration: function (node: cTree.VariableDeclaration) {
    const specifiers = node.typeSequence.value

    const variable = {
      typeQualifiers: specifiers
        .filter((s: cTree.Type) => s.type === 'typeQualifier')
        .map((s: cTree.Type) => s.value),

      typeSpecifiers: specifiers
        .filter((s: cTree.Type) => s.type === 'typeSpecifier')
        .map((s: cTree.Type) => s.value),

      value: actualValue(node.value),
    }

    STACK.push(variable)
    ENVIRONMENT[node.identifier.name] = stackPointer
    stackPointer += 1
  },
  ExpressionStatement: function (node: cTree.ExpressionStatement) {
    return evaluate(node.expression)
  },

  ConditionalStatement: function (node: cTree.ConditionalStatement) {
    console.log("EVALUATING CONDITIONAL")
    const condition = evaluate(node.condition)
    console.log("EVALUATED CONDITION")
    console.log(condition)
    if (condition) {
      console.log("EVALUATING TRUEBODY")
      console.log(node.truebody.type)
      return evaluate(node.truebody)
    }
    else {
      console.log("CHECKING ELSE VALUE")
      if (node.falsebody != null) {
        console.log("EVALUATING FALSE BODY")
        console.log(node.falsebody.type)
        return evaluate(node.falsebody)
      }
    }
  },

  Identifier: function (node: cTree.Identifier) {
    const location = ENVIRONMENT[node.name]
    if (location < STACK.length) {
      return STACK[location].value
    }
  },
  SequenceStatement: function (node: cTree.SequenceStatement) {
    console.log("EVALUATING SEQUENCE OF STATEMENTS")
    let res
    for (const instr of node.statements) {
      console.log(instr.type)
      res = evaluate(instr)
    }
    return res
  },
  CompoundStatement: function (node: cTree.CompoundStatement) {
    console.log("EVALUATING COMPOUND STATEMENT")
    let res
    for (const instr of node.statements.statements) {
      console.log(instr.type)
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
