import { run } from '../src/index'

const test1 = `
int main()
{
    int arr1size = 5, arr2size = 5, arr_resultsize, i, j;
    int a[5] = { 154, 2, 3, 4, 5 };
    int b[5] = { 6, 7, 8, 9, 10 };
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
   print(c);
    
}
`

const test2 = `
int main() {
    float numbers[100] = {1, 5, 10, 8, 5};
    float sum = 0.0, avg;
    int arrSize = sizeof(numbers) / sizeof(float);

    for (int i = 0; i < arrSize; ++i) {
        sum += numbers[i];
    }

    avg = sum / arrSize;
    printf("Average = %.2f", avg);
    return 0;
}
`

const test3 = `
int main() {
    int n = 6;
    printf("Factorial of %d is %d", n, multiplyNumbers(n));
    return 0;
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

const test4 = `
void print_message(char* message) {
    printf("Message is: %s", message);
}

int main() {
    char* message = malloc(20 * sizeof(char));
    message[0] = 'H';
    message[1] = 'E';
    message[2] = 'L';
    message[3] = 'L';
    message[4] = 'O';

    print_message(message);
    return 0;
}
`
// console.log(run(test1))
// console.log(run(test2))

const test5 = `
void print_message(char* message) {
    printf("Message is: %s", message);
}

int main() {
    int a = 5;
    printf(a);
    return 0;
}

`

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
`
// Swapping variables with pointers
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
    printf("\nAfter Swapping: x = %d, y = %d", x, y);
    return 0;
}
`

// Array sorting: pointers, pointer arithmetic`

const test8 = `

void sort(int n, int* ptr) 
{ 
    int i, j, t; 


    for (i = 0; i < n; i++) { 
  
        for (j = i + 1; j < n; j++) { 
            int* ptr1 = ptr + j; 
            int* ptr2 = ptr + i; 
            if (*ptr1 < *ptr2) { 
                t = *ptr2; 
                *ptr2 = *ptr1; 
                *ptr1 = t; 
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
    int n = 5; 
    int arr[] = { 116, 23, 14, 12, 9 }; 
  
    sort(n, arr); 
  
    return 0; 
} 
`

// Calculator using switch and printf
const test9 = `
int main() {
    char operation = '/';
    double n1 = 5.2, n2 = 4.7;

    switch(operation)
    {
        case '+':
            printf("%.1lf + %.1lf = %.1lf",n1, n2, n1+n2);
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

    return 0;
}

`

const test10 = `
void isPalindrome(char string[])
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
         printf("String is Palindrome");
        }
    else {
        printf("String is not a Palindrome");
    }
}

int main()
{
    char str1[1000] = "madam";
    char str2[1000] = "madan";
    isPalindrome(str1);
    isPalindrome(str2);
    printf(str2);
    return 0;
}
`
const test11 = `
    int main() {
    int a = 15;
    int m = 19;
    int *b =  &a; 

    *(++b) = 1723; 

    return m;   
    }
`

const test12 = `
// C program for the above approach
#include <stdio.h>
#include <stdlib.h>
  
// Function to find the largest element
// using dynamic memory allocation
void findLargest(int* arr, int N)
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
    printf("%d ", *arr);
}
  
// Driver Code
int main()
{
    int i, N = 4;
  
    int* arr;
  
    // Memory allocation to arr
    arr = (int*)malloc(sizeof(int));
  
  
    // Store the elements
    *(arr + 0) = 14;
    *(arr + 1) = 12;
    *(arr + 2) = 139;
    *(arr + 3) = 20;
  
    // Function Call
    findLargest(arr, N);
    return 0;
}
`
console.log(run(test12))
