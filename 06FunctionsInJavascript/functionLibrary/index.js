/** @format */

// JavaScript Library Functions
// JavaScript provides some built-in functions that can be directly used in our program.
// We don't need to create these functions; we just need to call them.

// JavaScript Math.sqrt()
// The sqrt() method computes the square root of a specified number and returns it.
// square root of 4
// let number = Math.sqrt(81);
// console.log(number);

// what happen to javascript math.sqrt when we use negative number as an aargument
// sqrt() with negative number
// let number = Math.sqrt(-324); //Mathematically, the square root of any negative number is an imaginary number
// console.log(number);

// what happen to javascript math.sqrt when we use infinity as an aargument
// sqrt() with positive infinity
// let number1 = Math.sqrt(Infinity);//it gives infinty
// console.log(number1);

// what happen to javascript math.sqrt when we use negative infinity as an aargument
// sqrt() with negative infinity
// let number2 = Math.sqrt(-Infinity); //it return nan
// console.log(number2);

// what happen to javascript math.sqrt when we use numeric value as string as an aargument
// cbrt() with a decimal number
// let number1 = Math.sqrt("81"); //the Math.sqrt() method converts the numeric string "81" into a number and then computes its square root.
// console.log(number1);

// what happen to javascript math.sqrt when we use non numeric value  as an aargument
// let string = "ali";
// let number = Math.sqrt(string);// it return not a number
// console.log(number);

// Square Root of Different Data Types
// const number1 = 2.25;
// const number2 = -4;
// const number3 = `hello`;

// let result1 = Math.sqrt(number1);
// let result2 = Math.sqrt(number2);
// let result3 = Math.sqrt(number3);

// console.log(`The square root of ${number1} is ${result1}`);
// console.log(`The square root of ${number2} is ${result2}`);
// console.log(`The square root of ${number3} is ${result3}`);

// JavaScript Math cbrt()
// The cbrt() method computes the cube root of a specified number and returns it.
// cube root of 8
// let cubeRoot = Math.cbrt(8);
// console.log(cubeRoot);

// cbrt() with an integer number
// let number1 = Math.cbrt(27);
// console.log(number1);

// // cbrt() with a decimal number
// let number2 = Math.cbrt(64);
// console.log(number2);

// cbrt() with a numeric string
// let number2 = Math.cbrt("125");
// console.log(number2);

// Cube Root of String Argument
// let string = "Harry";

// // cbrt() with string as argument
// let number = Math.cbrt(string);
// console.log(number);
