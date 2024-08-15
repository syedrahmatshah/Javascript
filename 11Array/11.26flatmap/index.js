/** @format */

// 11.26 flatMap()
// The flatMap() method is a combination of flat() and map() methods. This method initially
// maps each array element through a mapping function, then flatten up the array with depth value as 1.

const arr = [1, 2, 3, 4];
const flatMapped = arr.flatMap((x) => [x * 2]);
console.log(flatMapped); // Output: [1, 2, 2, 4, 3, 6, 4, 8]

const arr1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const result = arr1.flatMap((subArray) => subArray.map((x) => x * 2));
console.log(result); // Output: [2, 4, 6, 8, 10, 12]
