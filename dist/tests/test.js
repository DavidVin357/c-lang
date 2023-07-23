"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("../index");
const logger_1 = require("../logger");
// Merge two arrays
const test1 = `
int main()
{
    int i, j;
    int a[5] = { 1, 2, 3, 4, 5 };
    int b[5] = { 6, 7, 8, 9, 10, 11, 12 };
    int arr1size = sizeof(a) / sizeof(int); 
    int arr2size = sizeof(b) / sizeof(int);
    int arr_resultsize;
    arr_resultsize = arr1size + arr2size;
    int c[arr_resultsize];
    for (i = 0; i < arr1size; i++) {
        c[i] = a[i];
    }
    for (i = 0, j = arr1size;
        j < arr_resultsize && i < arr2size; i++, j++) {
       c[j] = b[i];
   }

   for (i = 0; i < arr_resultsize; i++) {
    printf("%d ", c[i]);
    }    
}
`;
// Find average among numbers in the array
const test2 = `
float main() {
    float numbers[100] = {1, 5, 10, 8, 5};
    float sum = 0.0;
    float avg;
    int arrSize = sizeof(numbers) / sizeof(float);

    for (int i = 0; i < arrSize; ++i) {
        sum += numbers[i];
    }

    avg = sum / arrSize;
    printf("Average = %.2f", avg);
    return avg;
}
`;
// Find factorial of a number
const test3 = `
int main() {
    int n = 6;
    int factorial = multiplyNumbers(n);
    printf("Factorial of %d is %d", n, factorial);
    return factorial;
}

int multiplyNumbers(int n) {
    if (n>=1) {
        return n*multiplyNumbers(n-1);
    }
    return 1;
}
`;
// Print message from provided char* pointer
const test4 = `
void print_message(char* message) {
    printf("Message is: %s", message);
}

int main() {
    char* message = malloc(6 * sizeof(char));
    message[0] = 'H';
    message[1] = 'E';
    message[2] = 'L';
    message[3] = 'L';
    message[4] = 'O';

    print_message(message);
    return 0;
}
`;
// Pointer arithmetic and value manipulations
const test5 = `
    int main() {
    int a = 15;
    int m = 19;
    int *b =  &a; 

    *(++b) = 1723; 

    return m;   
    }
`;
// printing character pyramid: initializations, assignments, for loops, printf
const test6 = `
int main()
{
    int i, j;
    int rows = 5;
 
    char character = 'A';
 
    for (i = 0; i < rows; i++) {
 
        for (j = 0; j <= i; j++) {
            printf("%c ", character);
        }
        printf("\n");
 
        character++;
    }
    return 0;
}
`;
// Swapping integer variables: function declaration & application, pointer operations
const test7 = `
void swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}
  
int main()
{
    int x = -8, y = 112;
    swap(&x, &y);
    printf("After Swapping: x = %d, y = %d", x, y);
    return 0;
}
`;
// printing first letter of each word in the string
const test8 = `
int main()
{
    char str[] = "C, Java, Python, CLang, Idris, OCaml, TypeScript";
    int i, j = 0;
    // Traversing the Character array
    for (i = 0; i < sizeof(str) - 1; i++) {
        // To store first character of
        // String if it is not a
        // whitespace.
        if (i == 0 && str[i] != ' ') {
            printf("%c ", str[i]);
        }
        // To check whether Character
        // is first character of
        // word and if yes store it.
        else {
          if (i > 0 && str[i - 1] == ' ') {
            printf("%c ", str[i]);
          }
        }
    }
    return 0;
}
`;
// Array sorting: function application, loops, arrays, pointer arithmetic, printf
const test9 = `
void sort(int n, int* ptr) 
{ 
    int i, j, t; 


    for (i = 0; i < n; i++) { 
  
        for (j = i + 1; j < n; j++) { 
            int* ptr2 = ptr + i; 
            if (*(ptr + j) < *(ptr + i)) { 
                t = *(ptr + i); 
                *(ptr + i) = *(ptr + j); 
                *(ptr + j) = t; 
            } 
        } 
    } 
  
    for (i = 0; i < n; i++) {
        int* resPtr = ptr + i;
        printf("%d ", *resPtr); 
    }
} 
  
int main() 
{ 
    int n = 6; 
    int arr[] = { -5, 116, 23, 14, 12, 9 }; 
  
    sort(n, arr); 
  
    return 0; 
} 
`;
// Calculator: switch-case, printf
const test10 = `
double main() {
    char operation = '/';
    double n1 = 5.2, n2 = 4.7;
    switch(operation)
    {
        case '+':
            printf("%.1lf + %.1lf = %.1lf",n1, n2, result);
            break;

        case '-':
            printf("%.1lf - %.1lf = %.1lf",n1, n2, n1-n2);
            break;

        case '*':
            printf("%.1lf * %.1lf = %.1lf",n1, n2, n1*n2);
            break;

        case '/':
            printf("%.1lf / %.1lf = %.1lf",n1, n2, n1/n2);
            break;

        default:
            printf("Error! operator is not correct");
    }

}

`;
// Check for palindrome word: function application, pointer arithmetic, conditionals, strings
const test11 = `
int isPalindrome(char string[])
{
    char* ptr;
    char* rev;

    ptr = string;
    while (*ptr != '0') {
        ++ptr;
    }
    --ptr;

    rev = string;
    while (ptr >= rev) {
        if (*ptr == *rev) {
            --ptr;
            rev++;
        }
        else {
            break;
        }
    }

    if (rev > ptr){
         printf("String '%s' is Palindrome \n", string);
         return 1;
        }
    else {
        printf("String '%s' is not a Palindrome \n", string);
        return 0;
    }
}

int main()
{
    char str1[1000] = "madam";
    char str2[1000] = "madan";
    isPalindrome(str1);
    isPalindrome(str2);
    return 0;
}
`;
// String comparison: function application, conditionals, pointers, printf
const test12 = `
// Function that compares the two string
void compareStrings(char* x, char* y)
{
    int flag = 0;
 
    // Iterate a loop till the end
    // of both the strings
    while (*x != '\0' || *y != '\0') {
        if (*x == *y) {
            x++;
            y++;
        }
 
        // If two characters are not same
        // print the difference and exit
        else {
          if ((*x == '\0' && *y != '\0')
                 || (*x != '\0' && *y == '\0')
                 || *x != *y) {
            flag = 1;
            printf("Unequal Strings\n");
            break;
        }
      }
    }
 
    // If two strings are exactly same
    if (flag == 0) {
        return 1;
    } 
    return 0;
}
 
// Driver Code
int main()
{
    char s1[7] = "python";
    char s2[7] = "python";
 
    // Function Call
    if(compareStrings(s1, s2)) {
        printf("strings '%s' and '%s' are equal", s1, s2);
    } else {
        printf("strings '%s' and '%s' are not equal", s1, s2);
    }
    return 0;
}`;
// Find largest element in the array: function application, arrays, for loops, pointer arithmetic
const test13 = `
#include <stdio.h>
#include <stdlib.h>
  
// Function to find the largest element
// using dynamic memory allocation
int findLargest(int* arr, int N)
{
    int i;
  
    // Traverse the array arr[]
    for (i = 1; i < N; i++) {
  
        // Update the largest element
        if (*arr < *(arr + i)) {
            *arr = *(arr + i);
        }
    }
  
    // Print the largest number
    printf("Largest number is %d ", *arr);
    return *arr;
}
  
int main()
{
    int i, N = 4;
  
    int* arr;
  
    // Memory allocation to arr
    arr = (int*)malloc(sizeof(int));
  
  
    // Store the elements
    *(arr + 0) = -14;
    *(arr + 1) = 12;
    *(arr + 2) = 139;
    *(arr + 3) = 20;
  
    // Function Call
    return findLargest(arr, N);
}
`;
(0, globals_1.test)('Test 1: merge two arrays ({ 1, 2, 3, 4, 5 } and { 6, 7, 8, 9, 10, 11, 12 })', () => {
    (0, logger_1.clearOuput)();
    const expected = '1 2 3 4 5 6 7 8 9 10 11 12 ';
    (0, index_1.run)(test1);
    const output = (0, logger_1.getOutput)();
    (0, globals_1.expect)(output).toBe(expected);
});
(0, globals_1.test)('Test 2: find average of array', () => {
    (0, logger_1.clearOuput)();
    (0, globals_1.expect)((0, index_1.run)(test2)).toBe(5.8);
});
(0, globals_1.test)('Test 3: find factorial of a number', () => {
    (0, logger_1.clearOuput)();
    (0, globals_1.expect)((0, index_1.run)(test3)).toBe(720);
});
(0, globals_1.test)('Test 4: char* message printing', () => {
    (0, logger_1.clearOuput)();
    const expected = 'Message is: HELLO';
    (0, index_1.run)(test4);
    const output = (0, logger_1.getOutput)();
    (0, globals_1.expect)(output).toBe(expected);
    (0, logger_1.clearOuput)();
});
(0, globals_1.test)('Test 5: fun with pointers', () => {
    (0, logger_1.clearOuput)();
    const expected = 1723;
    (0, globals_1.expect)((0, index_1.run)(test5)).toBe(expected);
});
(0, globals_1.test)('Test 6: character pyramid', () => {
    (0, logger_1.clearOuput)();
    const expected = `A 
B B 
C C C 
D D D D 
E E E E E 
`;
    (0, index_1.run)(test6);
    const output = (0, logger_1.getOutput)();
    (0, globals_1.expect)(output).toBe(expected);
});
(0, globals_1.test)('Test 7: swap variables', () => {
    (0, logger_1.clearOuput)();
    const expected = 'After Swapping: x = 112, y = -8';
    (0, index_1.run)(test7);
    const output = (0, logger_1.getOutput)();
    (0, globals_1.expect)(output).toBe(expected);
});
(0, globals_1.test)('Test 8 : Printing first letter of each word', () => {
    (0, logger_1.clearOuput)();
    const expected = 'C J P C I O T ';
    (0, index_1.run)(test8);
    const output = (0, logger_1.getOutput)();
    (0, globals_1.expect)(output).toBe(expected);
});
(0, globals_1.test)('Test 9: array sorting', () => {
    (0, logger_1.clearOuput)();
    const expected = '-5 9 12 14 23 116 ';
    (0, index_1.run)(test9);
    const output = (0, logger_1.getOutput)();
    (0, globals_1.expect)(output).toBe(expected);
});
(0, globals_1.test)('Test 10: calculator', () => {
    (0, logger_1.clearOuput)();
    const expected = '5.2 / 4.7 = 1.1';
    (0, index_1.run)(test10);
    (0, globals_1.expect)((0, logger_1.getOutput)()).toBe(expected);
});
(0, globals_1.test)('Test 11: check palindromes', () => {
    (0, logger_1.clearOuput)();
    const expected = "String 'madam' is Palindrome \n" + "String 'madan' is not a Palindrome \n";
    (0, index_1.run)(test11);
    (0, globals_1.expect)((0, logger_1.getOutput)()).toBe(expected);
});
(0, globals_1.test)('Test 12: compare strings', () => {
    (0, logger_1.clearOuput)();
    const expected = "strings 'python' and 'python' are equal";
    (0, index_1.run)(test12);
    (0, globals_1.expect)((0, logger_1.getOutput)()).toBe(expected);
});
(0, globals_1.test)('Test 13: find largest element in the array', () => {
    (0, logger_1.clearOuput)();
    const expected = 139;
    (0, globals_1.expect)((0, index_1.run)(test13)).toBe(expected);
});
//# sourceMappingURL=test.js.map