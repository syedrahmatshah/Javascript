/** @format */

// 11.12 splice()
/*
1. The JavaScript array splice() method is used to add/remove the elements to/from the existing array.
2. It returns the removed elements from an array. The splice() method also modifies the original array.
*/

// we can add an element to the existing array without removing other elements.

let arr = ["Monday", "Tuesday", "Thursday", "Friday"];
let result = arr.splice(2, 0, "Wednesday");
console.log(arr);

// we cancelAnimationFrame add an element to the existing array while removing other elements.

let arr1 = ["Monday", "Tuesday", "Saturday", "Sunday", "Thursday", "Friday"];
let result1 = arr.splice(2, 2, "Wednesday");
console.log("Updated array: " + arr1);
console.log("Removed element: " + result1);
