/** @format */

// 11.17 find()
/*The JavaScript array find() method returns the first element of the given array 
that satisfies the provided function condition.*/

let arr = [5, 22, 19, 25, 34];
let result = arr.find(x);
console.log(result);

let ages = [1, 2, 18, 24, 25];
const checkAge = (age) => {
  return age > 18;
};
console.log(ages.find(checkAge));
