import { runInterpreter } from './runner/runner'

export function run(code: string) {
  return runInterpreter(code)
}
export default run

const code = ` 
int main() {
  int a[] = {1, 2, 3, 4, 5, 6};
  int i = 0;
  int b = 4;
  int c = 11;
  int *ptr = &c;
  int *ptr2 = malloc(5);
  int *ptr3 = malloc(23);
  print_stack();

  return 114;
}
`

console.log(run(code))
