/** @format */

// loop in javascript
// In JavaScript, a loop is a programming construct that
// allows you to repeatedly execute a block of code as long as a specified condition is true.
//  foor loop in javascript]

// // table of 4 using for loop
// console.log("table of 4");
// for (i = 1; i <= 10; i++) {
//   //   console.log(i);
//   console.log(`4 x ${i}=${4 * i}`);
// }

// let n = [50, 30, 24];

// // Calculate the average
// let sum = n.reduce((acc, val) => acc + val, 0); // Sum up all elements
// let average = sum / n.length; // Divide by the number of elements
// console.log("Average:", average);

// // Increment each value in the array by 2
// n = n.map((val) => val + 2); // You can change 2 to any increment value you want
// console.log(n);

// console.log(n.length);

// making pyramid using javascript for loop

// for (let i = 0; i <= 4; i++) {
//   let row = "";
//   for (let j = 0; j <= 4 - i; j++) {
//     // console.log("*");
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= 5 - i; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "* ";
//   }
//   console.log(row);
// }
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "*";
//   }
//   for (let l = 1; l <= i; l++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "*";
//   }
//   for (let l = 1; l <= i; l++) {
//     row += "*";
//   }
//   console.log(row);
// }

// write a program to find the sum of the first 10 natural numbers
// let num = 10;
// sum = 0;
// for (let i = 1; i <= num; i++) {
//   sum += i;
// }
// console.log(sum);

// write a program to find the perfect numbers between 1 and 500
// let num = 500;
// for (let i = 1; i < num; i++) {
//   let sum = 0;
//   for (let j = 1; j < i; j++) {
//     if (i % j == 0) {
//       sum += j;
//     }
//   }
//   if (sum == i) {
//     console.log(i);
//   }
// }

// write a program to find the prime number between 1 and 50
// let num = 50;
// for (let i = 2; i <= num; i++) {
//   let isPrime = true;

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }

// write a program to print odd numbers between 1 and 50
// let num = 50;
// for (let i = 1; i < num; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// write  a program to print even numbers between 1 and 50
// let num = 50;
// for (let i = 1; i < num; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// write a program to find the factorial of a number
// let num = 4;
// let fac = 1;
// for (num; num >= 1; num--) {
//   fac = fac * num;
// }
// console.log(fac);

// write a program to find the sum of the series 1+1/2^2+1/3^3+..+1/n^n.
// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   s += 1 / i ** i;
// }
// console.log(sum);

// write a program to find the sum of the series (1*1)+(2*2)+(3*3)+(4*4)+(5*5)+..+(n*n).
// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i * i;
// }
// console.log(sum);

// to find perfect number or not
// num = 500;
// sum = 0;
// for (let i = 1; i <= num / 2; i++) {
//   if (num % i == 0) {
//     sum += i;
//   }
// }
// if (num == sum) {
//   console.log(`The number is perfect ${sum}`);
// } else {
//   console.log(`The number is not a perfect number`);
// }
