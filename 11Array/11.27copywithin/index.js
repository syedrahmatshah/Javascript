/** @format */

// 11.27 copyWithin()
// The JavaScript array copyWithin() method copies the part of the given array with
// its own elements and returns the modified array. This method doesn't change the length of the modified array.

// This method is useful when you want to duplicate certain elements within an array.
const arr = ["AngularJS", "Node.js", "JQuery", "Bootstrap", "python", "c++"];
// place at 0th position, the element between 1st and 2nd position.
const result = arr.copyWithin(2, 3, 5);
console.log(result);

const arr2 = [2, 3, 4, 5, 6, 7, 8, 19, 9, 13, 21, 25];
const result2 = arr2.copyWithin(3, 5, 8);
console.log(result2);

const arr3 = [
  "saeed",
  "ali",
  " khan",
  "zakir",
  "faisal",
  "naveed",
  "aftab",
  " waqar",
];
const result3 = arr3.copyWithin(1, 4, 8);
console.log(result3);
