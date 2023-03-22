"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = exports.runInContext = exports.interrupt = void 0;
const createContext_1 = require("./createContext");
exports.createContext = createContext_1.default;
const runner_1 = require("./runner/runner");
function interrupt(context) {
    const globalEnvironment = context.runtime.environments[context.runtime.environments.length - 1];
    context.runtime.environments = [globalEnvironment];
    context.runtime.isRunning = false;
    //   context.errors.push(new InterruptedError(context.runtime.nodes[0]))
}
exports.interrupt = interrupt;
function runInContext(code) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, runner_1.runInterpreter)(code);
    });
}
exports.runInContext = runInContext;
//# sourceMappingURL=index.js.map