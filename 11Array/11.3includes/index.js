/** @format */

// 11.3 includes()
/*The JavaScript array includes() method checks whether the given array contains 
the specified element. It returns true if an array contains the element, otherwise false.*/

let arr = ["AngularJS", "Node.js", "JQuery"];
let result = arr.includes("AngularJS");
console.log(result);

// we will provide the index from where the search starts.
let arr1 = ["AngularJS", "Node.js", "JQuery"];
let result1 = arr.includes("AngularJS", 1); //returns false, as "AngularJS" is not present after index 1.
console.log(result1);

arr2 = ["AngularJS", "Node.js", "JQuery"];
let result2 = arr.includes("angularjs"); //Case Sensitive
console.log(result2);
