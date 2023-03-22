"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualValue = exports.evaluate = void 0;
const operators_1 = require("../utils/operators");
const evaluators = {
    Literal: function (node) {
        return node.value;
    },
    BinaryExpression: function (node) {
        const left = actualValue(node.left);
        const right = actualValue(node.right);
        return (0, operators_1.evaluateBinaryExpression)(node.operator, left, right);
    },
};
function evaluate(node) {
    const result = evaluators[node.type](node);
    return result;
}
exports.evaluate = evaluate;
function actualValue(exp) {
    const evalResult = evaluate(exp);
    return evalResult;
}
exports.actualValue = actualValue;
//# sourceMappingURL=interpreter.js.map