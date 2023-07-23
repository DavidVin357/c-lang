"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateUnaryExpression = exports.evaluateAssignmentExpression = exports.evaluateBinaryExpression = void 0;
function evaluateBinaryExpression(left, right, operator) {
    switch (operator) {
        case '+':
            return left + right;
        case '-':
            return left - right;
        case '*':
            return left * right;
        case '/':
            return left / right;
        case '%':
            return left % right;
        case '==': {
            const leftValue = typeof left === 'object' ? JSON.stringify(left) : left;
            const rightValue = typeof left === 'object' ? JSON.stringify(right) : right;
            return leftValue === rightValue ? 1 : 0;
        }
        case '!=': {
            const leftValue = typeof left === 'object' ? JSON.stringify(left) : left;
            const rightValue = typeof left === 'object' ? JSON.stringify(right) : right;
            return leftValue !== rightValue ? 1 : 0;
        }
        case '<=':
            return left <= right ? 1 : 0;
        case '<':
            return left < right ? 1 : 0;
        case '>':
            return left > right ? 1 : 0;
        case '>=':
            return left >= right ? 1 : 0;
        case '&&':
            return left & right ? 1 : 0;
        case '||':
            return left | right ? 1 : 0;
        default:
            return undefined;
    }
}
exports.evaluateBinaryExpression = evaluateBinaryExpression;
function evaluateAssignmentExpression(operator, left, right) {
    switch (operator) {
        case '=':
            return right;
        case '+=':
            return left + right;
        case '-=':
            return left - right;
        case '*=':
            return left * right;
        case '/=':
            return left / right;
        case '%=':
            return left % right;
        default:
            return undefined;
    }
}
exports.evaluateAssignmentExpression = evaluateAssignmentExpression;
function evaluateUnaryExpression(right, operator, isPointer, size) {
    const increment = isPointer && size ? size : 1;
    switch (operator) {
        case '++':
            right += increment;
            return right;
        case '--':
            right -= increment;
            return right;
        case '!':
            return !right ? 1 : 0;
        case '-':
            return -right;
        default:
            return undefined;
    }
}
exports.evaluateUnaryExpression = evaluateUnaryExpression;
//# sourceMappingURL=operators.js.map