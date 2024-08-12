/** @format */

// 11.20 every()
/*The JavaScript array every() method checks whether all the given elements in an array are satisfying the provided condition. 
It returns true when each given array element satisfying the condition otherwise false.*/

let marks = [50, 40, 45, 37, 20];
const check = (value) => value >= 30;
// console.log(marks.every(check));

let marks2 = [50, 40, 60, 74, 85];
const checkMarks = (values) => values >= 30;
// console.log(marks2.every(checkMarks));

// we will test whether the number of elements present in an array are satisfying the specified value.
const test = (element, index, arrray) => element > 40;
console.log([(21, 33, 43, 46)].every(test));
//   In the above line we say that in the element we have given is consist element greater than 40 so it become true

console.log([29, 12, 35, 28].every(test));
//   In the above line we say that in the element we have given does'nt consist element greater than 40 so it become false
