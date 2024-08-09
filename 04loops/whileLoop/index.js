/** @format */

// while loop in javascript
// let count = 0;
// while (count <= 50) {
//   console.log(count);
//   count++;
// }

// write a program to print integers of to 10 and their squares
// let num = 10;
// let i = 0;
// while (i <= num) {
//   console.log(i ** 2);
//   i++;
// }

// write a program to print the following series 10,20,30,...,300.
// let num = 30;
// let i = 1;
// let s = 0;
// while (i <= num) {
//   s = i * 10;
//   console.log(s);
//   i++;
// }

// write a program to print the following series 105,98,91,..,7.
// let num = 112;
// let i = 7;
// while (num > i) {
//   num -= 7;
//   console.log(num);
// }

// write a program to print the naturall number in reverse order from 10
// let num = 11;
// let i = 1;
// while (num > i) {
//   console.log(num);
//   num--;
// }

// write a program to find sum of the first 10 natural numbers
// let num = 10;
// let i = 1;
// let sum = 0;
// while (i <= 10) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// write a program to find the prime number between 1 and 50
// let num = 50;
// let i = 2;
// while (i <= num) {
//   let isPrime = true;
//   let j = 2;
//   while (j < i) {
//     if (i % j == 0) {
//       isPrime = false;
//     }
//     j++;
//   }
//   if (isPrime) {
//     console.log(i);
//   }
//   i++;
// }

// write a program to find the factorial of a number
// let num = 4;
// let fac = 1;
// while (num >= 1) {
//   fac = fac * num;
//   num--;
// }
// console.log(fac);

// write a program to print whether the number is amstrong or not
// let sum = 0;
// let number = 153;

// let temp = number;

// while (temp > 0) {
//   let remainder = temp % 10;
//   // 2**
//   sum += remainder ** 3 + remainder ** 3 + remainder ** 3;

//   temp = (temp - remainder) / 10;
// }
// if (sum == number) {
//   console.log(`${number} is an Armstrong number`);
// } else {
//   console.log(`${number} is not an Armstrong number.`);
// }

// write a program to print the febunacci sereies
// let a = 0;
// let b = 1;
// let i = 0;
// while (i <= 10) {
//   let temp = a + b;
//   console.log(temp);
//   i++;
//   a = b;
//   b = temp;
// }

// write a program to add first n term of the following series1/1!+1/2!+1/3!+..+1/n.
// let num = 6;
// let i = 1;
// let j = 1;
// let sum = 0;
// let fac = 1;
// while (i <= num) {
//   while (j <= i) {
//     fac = fac * j;
//     j++;
//   }
//   sum = sum + i / fac;
//   i++;
// }
// console.log(sum);
