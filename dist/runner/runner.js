"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runInterpreter = void 0;
const interpreter_1 = require("../interpreter/interpreter");
const parser_1 = require("../parser/parser");
function runInterpreter(code) {
    const program = (0, parser_1.parse)(code);
    const res = (0, interpreter_1.evaluate)(program);
    return res;
}
exports.runInterpreter = runInterpreter;
//# sourceMappingURL=runner.js.map