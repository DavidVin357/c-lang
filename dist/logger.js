"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearOuput = exports.getOutput = exports.logPrintf = void 0;
let output = '';
const logPrintf = (str) => {
    output = output.concat(str);
};
exports.logPrintf = logPrintf;
const getOutput = () => {
    return output;
};
exports.getOutput = getOutput;
const clearOuput = () => {
    output = '';
};
exports.clearOuput = clearOuput;
//# sourceMappingURL=logger.js.map