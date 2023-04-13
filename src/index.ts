import { runInterpreter } from './runner/runner'

export function run(code: string) {
  return runInterpreter(code)
}
export default run

const code = ` 
int main() {
  int a[] = {1, 2, 3, 4, 5, 6};
  for (int i = 0; i < 5; i+=1) {
    print(a[i]);
  }

  return 4;
}
`

console.log(run(code))
