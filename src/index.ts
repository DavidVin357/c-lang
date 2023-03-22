import { runInterpreter } from './runner/runner'

export function run(code: string) {
  return runInterpreter(code)
}
// export default run

const code = '4+2-3+4;'
console.log(run(code))
