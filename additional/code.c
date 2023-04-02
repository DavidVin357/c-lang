#include <stdio.h>
int* a(){
    int m = 14;
    return &m;
  }

  int f(){
    return 5;
  }
   
  int main(){
  // int a = 18;
  int* b = a();
  printf("%d", *b);
  return *b;
  
  }

// *c = 5 - assigns to variable under *c pointer
// c = 5 - assigns new address to pointer


  // int a = 5;
    // int b = 51;
    // int *b = *a;
    // int *d = &m; warning - float* to int*
    // float *d = &a; warning - int* to float*
    // *c = a; // ok
    // c = a; // ok with warning

    // a = *d; // ok
    // a = d; // ok with warning

    // float e = a; // ok
    // int f = m; // ok
    // char a1 = 'a';
    // unsigned char a2 = 'a';
    // short a3 = 'a';
    // unsigned short a4 = 'a';
    // long a5 = 5475437547457;
    // unsigned long a6 = 'a';

    // char a7 = a5;
    // printf("%d", a7);

    // long arr [3] = {1,2,3};

    // int k = arr;