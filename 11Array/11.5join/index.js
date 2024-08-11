/** @format */

// 11.5 join()
/*The JavaScript array join() method combines all the elements of an array into a string and return 
a new string. We can use any type of separators to separate given array elements.*/

const elements = ["Fire", "Air", "Water"];
console.log(elements.join("-"));

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join());
console.log(matrix.join(";"));

const a = ["Wind", "Water", "Fire"];
console.log(a.join());
console.log(a.join(", "));
console.log(a.join(" + "));
console.log(a.join(""));
