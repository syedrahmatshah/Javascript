/** @format */

// A function is a block of code that performs a certain task when called.
// const greet = (name) => {
//   console.log(`Hi ${name}`);
// };
// greet("peter");

// // Program with setTimeout()
// const greet = () => {
//   console.log(`hello world`);
// };
// const sayName = (name) => {
//   console.log(`hi ${name}`);
// };
// setTimeout(greet, 3000);
// sayName("peter");

const greet = (name, myFunction) => {
  console.log(`Hello World`);
  myFunction(name);
};
const sayName = (name) => {
  console.log(`hello ${name}`);
};
setTimeout(greet, 3000, "John", sayName);
