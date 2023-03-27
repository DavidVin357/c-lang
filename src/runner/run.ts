import { evaluate } from '../interpreter/interpreter'
import { parse } from '../parser/parser'
import * as cTree from '../cTree'
import {runInterpreter} from "./runner";

const code = 'const unsigned int x = 6; if (x == 5) { x = x + 5;} else {x = x - 5;} x;'
//if (3 + 2 == 5) int x = 5; x;
//if (3 + 2 == 5) {int x = 5;} x;
//const unsigned int x = 5; if (x == 5) { x = x + 5;} else {x = x - 5;} x;
const res = runInterpreter(code)
console.log(res)