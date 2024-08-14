/** @format */

// 11.22 reduce()
/*
1. The reduce() method reduces the given array into a single value by executing a reducer function.
2. The function of reduce is that to reduce many values into one value and give that value in the answer
*/

let arr = [2, 3, 1, 5];
let a = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(a);

let arr2 = [30, 15, 5];
let b = arr2.reduce((net, n) => {
  return net - n;
});
console.log(b);
