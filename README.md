# CLang

The CLang is an interpreter-based implementation of C written in TypeScript. 

It supports the following features of C:
- Primitives: (unsigned) `char`, `short`, `int`, `float`, `double`, `long`
- Derived types: strings and arrays (both statically/dynamically allocated)
- Function declaration/application, Variable declaration/initialization/assignment
- Operators: arithmetic (`<`. `<=`. `==`, `+`, `-`, etc.), logical (`&&`, `||`), variable address (`&`), assignment(`=`, `+=`, `/=`, etc.) `sizeof`, pointers
- Loops: `while`, `for`, `do while`
- Conditionals: `if else`, `switch case` statements
- Memory management: pointers, pointers-to-pointers, dynamic memory allocation with `malloc` 
- IO: `printf`, `print_stack`, `print_heap`

# Usage
To build:
```
git clone https://github.com/DavidVin357/c-lang.git
cd c-lang
npm i
npm run build
```

To use the interpreter with [CLang Frontend](https://github.com/DavidVin357/c-frontend), run `npm link`

Alternatively, you can also try out the CLang in its playground at https://DavidVin357.github.io/c-frontend
# Testing

Run `npm test` to see the execution of the jest tests on samples in `tests/test.ts`
