import { runInterpreter } from './runner/runner'

export function run(code: string) {
  return runInterpreter(code)
}
export default run

const code = ` 
int main() {
  int num = 0;
  int i = 0;
  do {
    num += 1;
  }
  while (i > 5)
  return num;
}`
console.log(run(code))


//   int *arr;
//   arr = malloc(4 * sizeof(int));
//   arr[0] = 1;
//   arr[1] = 2;
//   arr[2] = 3;
//   arr[3] = 4;
//   free(arr);
//   return arr[3];

//  int a = 5;
//   int* p = &a;
//   int* ptr = malloc(4);
//   int *ptr2 = malloc(4);
//   free(ptr);
//   char* ptr3 = malloc(5);
//   int b = 12;
//   int c = 45;
//   ptr3[1] = 'n';
//   int *ptr4 = malloc(4);
//   *ptr4 = 168;
//   int *ptr5 = malloc(1);
//   print_heap();
//   return *ptr4;

// const code = `
// int* f(){
//   int *arr = malloc(8);
//   arr[0] = 5;
//   return arr;
// }

// int main(){
//   int* p = f();
// }`
// console.log(run(code))
