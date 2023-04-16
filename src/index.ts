import { runInterpreter } from './runner/runner'

export function run(code: string) {
  return runInterpreter(code)
}
export default run

console.log(
  run(`

int main()
{
    printf("dg\nf");
    return 5;
}`)
)
