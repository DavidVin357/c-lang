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
