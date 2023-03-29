import * as cTree from '../cTree'
import {LabeledStatement} from '../cTree'
import {Value} from '../types'
import {evaluateAssignmentExpression, evaluateBinaryExpression,} from '../utils/operators'

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

  Identifier: function (node: cTree.Identifier) {
    const location = ENVIRONMENT[node.name]
    if (location < STACK.length) {
      return STACK[location].value
    }
  },
  SequenceStatement: function (node: cTree.SequenceStatement) {
    let res
    for (const instr of node.statements) {
      res = evaluate(instr)
    }
    return res
  },
  CompoundStatement: function (node: cTree.CompoundStatement) {
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
