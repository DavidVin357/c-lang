import { runInterpreter } from './runner/runner'

export function run(code: string) {
  return runInterpreter(code)
}
export default run

const code = ` 
int main() {
  int a[] = {1, 2, 3, 4, 523, 7, 145};
  a[2] = 14;
  return a[2];
  return sizeof(a);
}`

console.log(run(code))
