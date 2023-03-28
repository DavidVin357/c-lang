import { runInterpreter } from './runner/runner'

export function run(code: string) {
  return runInterpreter(code)
}
// export default run

// const code = 'int a = 5;'
// const code = 'const int a = 4 + 12; int b = a + 11 * 3; &b; &a;'
// const code =
//   "char val = 'd'; int a (int b, float c) {b + 3; float m = 144.3; return m * c; return val; m * c;} a(4, 2.2);"
// const code = 'b(4, 2, 9-2 );'
const code = `
  int a(){
    return 16;
  } 
  int main(){
    int g = 1; 
    return 4 + g + a();
    a();
  }`
console.log(run(code))
