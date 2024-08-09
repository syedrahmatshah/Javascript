/** @format */

// Javascript number
// The JavaScript number object enables you to represent a numeric value. It may be integer or floating-point.
// Convert string to number
// let str = "23";
// console.log(Number(str));

// Javascript number method number()

// 1 isFinite()
// The JavaScript number isFinite() method determines whether the given value is a finite number.
// It returns true if the value is a finite number, otherwise it returns false.
//1.1 let x = 0;
// let y = 1;
// let z = -1;
// console.log(Number.isFinite(x));
// console.log(Number.isFinite(y));
// console.log(Number.isFinite(z));

// 1.2  we will use isFinite() method with negative numbers.
// function check(x, y) {
//   return x / y;
// }
// console.log(Number.isFinite(check(0, 10)));
// console.log(Number.isFinite(check(10, 0)));

// 1.3;
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(-Infinity));
// console.log(Number.isFinite(NaN));

// 2 isInteger()
//The JavaScript number isInteger() method determines whether the given value is an integer.
// It returns true if the value is an integer, otherwise it returns false.

// 2.1;
// let x = 0;
// let y = 1;
// let z = -1;
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(y));
// console.log(Number.isInteger(z));

// 2.2;
// console.log(Number.isInteger(2.5));
// console.log(Number.isInteger(-2.5));
// console.log(Number.isInteger("2.5"));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(-Infinity));
// console.log(Number.isInteger(NaN));

// 3 parseFloat()
// The JavaScript number parseFloat() method parses a string argument and converts it into a floating point number.
// It returns NaN, if the first character of given value cannot be converted to a number.

// 3.1;
// let a = "50";
// let b = "50.25";
// let c = "String";
// let d = "50String";
// let e = "50.25String";
// console.log(Number.parseFloat(a));
// console.log(Number.parseFloat(b));
// console.log(Number.parseFloat(c));
// console.log(Number.parseFloat(d));
// console.log(Number.parseFloat(e));

// 4 parseInt()
// The JavaScript number parseInt() method parses a string argument and converts it into an integer value.
// With string argument, we can also provide radix argument to specify the type of numeral system to be used.

// 4.1;
// let a = "50";
// let b = "50.25";
// let c = "String";
// let d = "50String";
// let e = "50.25String";
// console.log(Number.parseInt(a));
// console.log(Number.parseInt(b));
// console.log(Number.parseInt(c));
// console.log(Number.parseInt(d));
// console.log(Number.parseInt(e));

// 5 toExponential()
// let a = 989721;
// console.log(a.toExponential());

// 5.2;
// let a = 989721;
// console.log(a.toExponential(2));
// console.log(a.toExponential(4));
// console.log(a.toExponential(6));

// 6 tofixed()
// The JavaScript number toFixed() method returns the string representing a number
// that has exact digits after the decimal point instead of exponential notation.

// 6.1;
// let a = 98.9721;
// console.log(a.toFixed());

// // 6.2 Let's see an example to fix a number up to given decimal point
// let a = 98.9721;
// console.log(a.toFixed(2));

// 7 toString()
// The JavaScript number toString() method converts the given number into the string and returns it.
// let a = 50;
// let b = -50;
// let c = 50.25;
// console.log(a.toString());
// console.log(b.toString());
// console.log(c.toString());

// 7.2;
// let a = 12;
// console.log(a.toString(2));
// console.log(a.toString(8));
// console.log(a.toString(16));
