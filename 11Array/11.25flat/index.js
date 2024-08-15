/** @format */

// 11.25 flat()
// The flat() method is an inbuilt array method that flattens a given array into a newly created one-dimensional array.
// It concatenates all the elements of the given multidimensional array, and flats upto the specified depth.
// We can specify the depth limit to where we need to flatten the array. By default, the depth limit is 1.

const arr = ["a", "b", ["c", "d"]]; //given 2D array
const newArr = arr.flat(); //using flat() method
console.log(newArr);

// Testing a multidimensional array with flat() method.
const arr1 = [90, 18, [89, 56], [13, 20, [67, 17]]]; //given multidimensional array
const newArr1 = arr1.flat(3); //using flat() method
console.log(newArr1);

// Let's flatten an array with holes in between.
const arr2 = ["John", "Peter", , "Tomy", ["Eni", , "Kerry"]]; //given 2D array with holes in between.
const newArr2 = arr2.flat(); //using flat() method.
console.log(newArr2);

//  Using flat() method with depth value as infinity.
const arr3 = [
  "Orange",
  "Pineapple",
  "Grapes",
  ["Potato", "Tomato", "Carrot", ["Guava", "Litchi"]],
]; //given a multidimensional array.
const newAr3 = arr3.flat(Infinity); //setting depth value as infinity.
console.log(newAr3);
