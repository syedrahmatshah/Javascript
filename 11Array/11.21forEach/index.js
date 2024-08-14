/** @format */

// 11.21 forEach()
// The JavaScript array forEach() method is used to invoke the specified function once for each array element.

let arr = ["C", "C++", "Python"];

// const fetch = (value) => {
//   console.log(value);
// };
arr.forEach((fetch, i) => console.log(i + ":" + fetch));

let sum = 0;
let arr1 = [10, 18, 12, 20];

const myFunction = (element) => {
  sum = sum + element;
  console.log(sum);
};
arr1.forEach(myFunction);
