"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateBinaryExpression = void 0;
function evaluateBinaryExpression(operator, left, right) {
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
        case '==':
            return left === right ? 1 : 0;
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
//# sourceMappingURL=operators.js.map