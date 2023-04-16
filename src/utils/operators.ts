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
    case '==': {
      const leftValue = typeof left === 'object' ? JSON.stringify(left) : left
      const rightValue =
        typeof left === 'object' ? JSON.stringify(right) : right
      return leftValue === rightValue ? 1 : 0
    }
    case '!=': {
      const leftValue = typeof left === 'object' ? JSON.stringify(left) : left
      const rightValue =
        typeof left === 'object' ? JSON.stringify(right) : right
      return leftValue !== rightValue ? 1 : 0
    }
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

export function evaluateUnaryExpression(
  right: any,
  operator: string,
  isPointer?: boolean,
  size?: number
) {
  const increment = isPointer && size ? size : 1
  switch (operator) {
    case '++':
      right += increment
      return right
    case '--':
      right -= increment
      return right
    case '!':
      return !right ? 1 : 0
    case '-':
      return -right
    default:
      return undefined
  }
}
