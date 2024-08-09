/**
//  *  This allows developers to dynamically change the content, structure, and style of a web page in response to user actions.
 * What are variables?
 * Varibale is container for storing data ===>
 
 * How to define a variable?
 * For defining a variable we use three key words like var,const,and let ===>

 * What's the difference between let, const and var?

 * Scope of a variable.
 *Var is fuction-scoped ====>
 * Let is blocked-scoped ===>
 * Const also be declared as blocked-scoped and cannot be reassigned ===>
 * @format
 */

// a = 5;
// b = 4;
// console.log(a + b);
// x = x + 5;
// console.log(x);

// let x = "5";
// let x = "5" + +5;
// console.log(x);
// var x = 5 + 2 + 3;
// console.log(x);

// let x = "John" + " " + "Doe";
// let x = "5" + 2 + 3;
// let x = 5 + 2 + "3";
// console.log(x);

// We can use dollar sign as a variable in javascript
// let $ = "hello World";
// let $$$ = 2;
// let $myMoney = 5;
// console.log($, $$$, $myMoney);

// let _lastName = "jhonson";
// let _x = 2;
// let _100 = 5;
// console.log(_lastName, _x, _100);

// var x = "john Doe";
// var x = 0;
// var x = 3;
// console.log(x);

// Redeclargin a varibale with let in same block is not allowed
// let x = "john Doe";
// let x = 0;
// console.log(x);

// Redeclargin a varibale with let in another block is  allowed
// let x = 2;
// console.log(x);
// {
//   let x = 4;
//   console.log(x);
// }
// {
//   let x = 5;
//   console.log(x);
// }

// Redeclaring a varibale with const in same block is also not allowed
// const x = "john Doe";
// const x = 0;
// console.log(x);

// Redeclaring a varibale with const in another block is  allowed
// const x = "john Doe";
// {
//   const x = 0;
//   console.log(x);
// }
// console.log(x);\

// We can use the var variable before it is declared
/* carName = "volvo";
var carName;
console.log(carName);*/

//  We cannot use the let variable before it is declared
// carName = "volvo";
// let carName = "saab";
// console.log(carName);

// Varibale with const cannot be reassigned
// const PI = 3.1415;
// PI = 3.14;
// console.log(PI);

// let x = 5 +"5";
// console.log(x);
// const PI = 3.14;
// PI = 3.1;
// console.log(PI);

// Variables declared with let inside a { } block cannot be accessed from outside the block:
// {
//   let x = 3;
// }
// console.log(x);

// Variables declared with varinside a { } block can be accessed from outside the block:
// {
//   var x = 4;
// }
// console.log(x);

// // let can be reassigned
// // Declare a variable with let
// let greeting = "Hello, world!";

// // Output the initial value
// console.log(greeting); // Output: Hello, world!

// // Reassign the variable
// greeting = "Hi there!";

// Output the new value
// console.log(greeting); // Output: Hi there!

// A varibale wihtout giving a value is consider as undefined
// var carName;
// console.log(carName);
