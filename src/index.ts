import { runInterpreter } from './runner/runner'

export function run(code: string) {
  return runInterpreter(code)
}
export default run

const code = ` 
int main() {
    int n = 5;
    for (int i = 0; i < 10; ++i;) {
      if ( i==4 ) {
        return i;
      }
    }
}

`

console.log(run(code))
