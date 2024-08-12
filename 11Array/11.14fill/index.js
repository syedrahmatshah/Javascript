/** @format */

// 11.14 fill()
// The JavaScript array fill() method fills the elements of the given array with the specified static values.
// This method modifies the original array. It returns undefined, if no element satisfies the condition.

let arr = ["AngularJS", "Node.js", "JQuery"];
let result = arr.fill("Bootstrap");
console.log(arr);

let arr1 = ["AngularJS", "Node.js", "JQuery"];
let result1 = arr1.fill("Bootstrap", 1);
console.log(arr1);

// In this example, we will also provide start and end index.
let arr2 = ["AngularJS", "Node.js", "JQuery"];
let result2 = arr2.fill("Bootstrap", 0, 2);
console.log(arr2);
