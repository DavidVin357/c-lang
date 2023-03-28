import { runInterpreter } from './runner/runner'

export function run(code: string) {
  return runInterpreter(code)
}
// export default run

// const code = 'int a = 5;'
const code = 'const int a = 4 + 12; int b = a + 11 * 3; &b; &a;'
console.log(run(code))
