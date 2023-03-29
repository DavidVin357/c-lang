import { evaluate } from '../interpreter/interpreter'
import { parse } from '../parser/parser'
import * as cTree from '../cTree'
import {runInterpreter} from "./runner";

const code = `
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
`

//int num = 11;
// switch (num) {
//     case 9:
//         num += 9;
//         break;
//     case 11:
//         num += 11;
//     default:
//         num -= 11;
//         break;
// }
// num;
// // result = 11

//int i = 10;
//    int j = 20;
//
//    switch(i) {
//       case 10:
//          i -= 10
//       case 20:
//          switch(j) {
//             case 20:
//                j -= 20
//          }
//    }
//    j;


//if (3 + 2 == 5) int x = 5; x;
//if (3 + 2 == 5) {int x = 5;} x;
//const unsigned int x = 5; if (x == 5) { x = x + 5;} else {x = x - 5;} x;
//const unsigned int x = 6; if (x == 5) { x = x + 5;} else {x = x - 5;} x;
const res = runInterpreter(code)
console.log(res)