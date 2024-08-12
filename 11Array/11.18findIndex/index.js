/** @format */

// 11.18 findIndex()
// The JavaScript array findIndex() method returns the index of first element of the given array
// that satisfies the provided function condition. It returns -1, if no element satisfies the condition.

let arr = [5, 22, 19, 25, 34];
let result = arr.findIndex((x) => x > 20);
console.log(result);

let ages = [1, 2, 18, 24, 25];
const checkAge = (age) => {
  return age > 18;
};
console.log(ages.findIndex(checkAge));
