import { BinaryOperator, AssignmentOperator } from '../cTree'

export function evaluateBinaryExpression(
  left: any,
  right: any,
  operator: string
) {
  switch (operator) {
    case '+':
      return left + right
    case '-':
      return left - right
    case '*':
      return left * right
    case '/':
      return left / right
    case '%':
      return left % right
    case '==':
      return left === right ? 1 : 0
    case '<=':
      return left <= right ? 1 : 0
    case '<':
      return left < right ? 1 : 0
    case '>':
      return left > right ? 1 : 0
    case '>=':
      return left >= right ? 1 : 0
    case '&&':
      return left & right ? 1 : 0
    case '||':
      return left | right ? 1 : 0
    default:
      return undefined
  }
}

export function evaluateAssignmentExpression(
  operator: string,
  left: any,
  right: any
) {
  switch (operator) {
    case '=':
      return right
    case '+=':
      return left + right
    case '-=':
      return left - right
    case '*=':
      return left * right
    case '/=':
      return left / right
    case '%=':
      return left % right
    default:
      return undefined
  }
}

export function evaluateUnaryExpression(right: any, operator: string) {
  switch (operator) {
    case '++':
      return ++right
    case '--':
      return --right
    default:
      return undefined
  }
}
