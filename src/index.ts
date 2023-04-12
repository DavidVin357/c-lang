import { runInterpreter } from './runner/runner'

export function run(code: string) {
  return runInterpreter(code)
}
export default run

// const code = `
// int main() {
//   int a = 5;
//   int* p = &a;
//   int* ptr = malloc(4);
//   int *ptr2 = malloc(4);
//   char* ptr3 = malloc(5);
//   free(ptr2);
//   free(ptr3);
//   int *ptr4 = malloc(8);
//   *ptr4 = 168;
//   double* ptr5 = malloc(8);
//   *ptr5 = 11.356;
//   free(ptr4);
//   int *ptr6 = malloc(9);
//   int arr[4] = {1, 5, 2, 3};
//   *ptr6 = 1942;
//   print_heap();
//   return *ptr6;
// }`
const code = `
  int main() {
    int* arr = malloc(12);
    arr[0] = 5; 
    arr[1] = 6; 
    arr[2] = 7; 
    float *ptr = malloc(8);
    *ptr = 65.23;

    int *ptr2 = malloc(4);
    *ptr2 = 12;

    char* some_ptr = malloc(1); 
    *some_ptr = 'g';

    free(ptr);
    free(arr);
    
    double* double_ptr = malloc(16); 
    double_ptr[0] = 5.3;
    double_ptr[1] = 3.4;
    
    print_heap();
    return 3;
  }
`
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
