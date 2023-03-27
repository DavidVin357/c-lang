import { runInterpreter } from './runner/runner'

export function run(code: string) {
  return runInterpreter(code)
}
// export default run

// const code = 'int a = 5;'
const code = 'int main (unsigned int mm) {}'
console.log(run(code))
