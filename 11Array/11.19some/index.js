/** @format */

// 11.19 some()
/* The some() methods perform testing and checks if atleast a single array element passes the test, implemented
 ByteLengthQueuingStrategy the provided function. If the test is passed, it returns true. Else, returns false.*/

let ages = [10, 13, 15, 18, 22];
const checkAge = (age) => age >= 18;
let result = ages.some(checkAge);
console.log(result);
