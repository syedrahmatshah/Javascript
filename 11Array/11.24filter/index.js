/** @format */

// 11.24 filter()
/*The JavaScript array filter() method filter and extract the element 
of an array that satisfying the provided condition. It doesn't change the original array.
*/

let marks = [50, 40, 45, 37, 20];
let result = marks.filter((value) => {
  return value >= 30;
});
console.log(result);

const test = (element, index, array) => element >= 25;
console.log([21, 32, 21, 43].filter(test));
