import { runInterpreter } from './runner/runner'

export function run(code: string) {
  return runInterpreter(code)
}
export default run

const code = ` 
int main() {
    int n = 5;
    return multiplyNumbers(n);
}

int multiplyNumbers(int n) {
    if (n>=1) {
      return n*multiplyNumbers(n-1);
    }
    else {
      return 1;
    }
}

`

console.log(run(code))
