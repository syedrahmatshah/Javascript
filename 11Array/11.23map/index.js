/** @format */

// 11.23 map()
// The JavaScript array map() method calls the specified function for every array element and returns the new array.
// This method doesn't change the original array.

let arr = [20, 30, 35];
let result = arr.map((x) => {
  return x * 10;
});
console.log(result);
