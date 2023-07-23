"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runner_1 = require("./runner");
const code = `
int main() {
    int num = 9;
switch (num) {
    case 7:
        num += 7;
    case 10:
        num += 10;
    default:
        num -= 10;
    case 9:
        num += 9;
}
num;
return num;
}
`;
const res = (0, runner_1.runInterpreter)(code);
console.log(res);
//# sourceMappingURL=run.js.map