"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const runner_1 = require("./runner/runner");
function run(code) {
    return (0, runner_1.runInterpreter)(code);
}
exports.run = run;
exports.default = run;
console.log(run(`

int main()
{
    printf("dg\nf");
    return 5;
}`));
//# sourceMappingURL=index.js.map