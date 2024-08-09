/** @format */

// do while loop in javascript
// let n = 0;
// do {
//   console.log(n);
//   n++;
// } while (n <= 10);

// write a program to print integers of to 10 and their squares
// let num = 10;
// let i = 0;
// do {
//   console.log(i ** 2);
//   i++;
// } while (i <= num);

// write a program to print the following series 10,20,30,...,300.
// let num = 30;
// let i = 1;
// let s = 0;
// do {
//   s = i * 10;
//   console.log(s);
//   i++;
// } while (i <= num);

// write a program to print the following series 105,98,91,..,7.
// let num = 112;
// let i = 7;
// do {
//   num -= 7;
//   console.log(num);
// } while (num > i);

// write a program to print the naturall number in reverse order from 10
// let num = 10;
// let i = 0;
// do {
//   console.log(num);
//   num--;
// } while (num > i);

// write a program to find sum of the first 10 natural numbers
// let num = 10;
// let i = 1;
// let sum = 0;
// do {
//   sum += i;
//   i++;
// } while (i <= 10);
// console.log(sum);

// write a program to find the prime number between 1 and 50
// let num = 50;
// let i = 2;
// do {
//   let isPrime = true;
//   if (isPrime) {
//     console.log(i);
//   }
//   i++;
// } while (i <= num);
// do {
//   let j = 2;
//   if (i % j == 0) {
//     isPrime = false;
//   }
//   j++;
// } while (j < i);

// write a program to find the factorial of a number
// let num = 4;
// let fac = 1;
// do {
//   fac = fac * num;
//   num--;
// } while (num >= 1);
// console.log(fac);

// write a program to print the febunacci sereies
// let a = 0;
// let b = 1;
// let i = 0;
// do {
//   let temp = a + b;
//   console.log(temp);
//   i++;
//   a = b;
//   b = temp;
// } while (i <= 10);

// write a program to add first n term of the following series1/1!+1/2!+1/3!+..+1/n.
// let num = 6;
// let i = 1;
// let j = 1;
// let sum = 0;
// let fac = 1;
// do {
//   sum = sum + i / fac;
//   i++;
// } while (i <= num);
// do {
//   fac = fac * j;
//   j++;
// } while (j <= i);
// console.log(sum);
