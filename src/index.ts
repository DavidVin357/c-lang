import { runInterpreter } from './runner/runner'

export function run(code: string) {
  return runInterpreter(code)
}
export default run

const code = ` 
int main() {
  int a[] = {2, 4, 6, 8, 10};
  a[0] = 69;
  return a[0];
}`
console.log(run(code))

// const code = `
// int* f(){
//   int *arr = malloc(8);
//   arr[0] = 5;
//   return arr;
// }

// int main(){
//   int* p = f();
// }`
// console.log(run(code))
