import { runInterpreter } from './runner/runner'

export function run(code: string) {
  return runInterpreter(code)
}
// export default run

const code = `
  int* a(){
    int m = 14;
    return &m;
  }

  int f(){
    return 5;
  }
   
  int main(){
  int a = 18;
  int* b = a();
  return *b;
  }`
console.log(run(code))
