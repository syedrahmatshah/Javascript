/** @format */

// 11.23 map()
// The JavaScript array map() method calls the specified function for every array element and returns the new array.
// This method doesn't change the original array.

let arr = [20, 30, 35];
let result = arr.map((x) => {
  return x * 10;
});
console.log(result);

let arr1 = [2.1, 3.5, 4.7];
let result1 = arr.map(Math.round);
console.log(result1);
