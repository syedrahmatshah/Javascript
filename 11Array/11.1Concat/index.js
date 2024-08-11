/** @format */

// 11.1 concat()
/*The JavaScript array concat() method combines two or more arrays and returns 
a new string. This method doesn't make any change in the original array.*/

let arr1 = ["C", "C++", "Python"];
let arr2 = ["Java", "JavaScript", "Android"];
let result = arr1.concat(arr2);
console.log(result);

let arr3 = ["C", "C++", "Python"];
let arr4 = ["Java", "JavaScript", "Android"];
let arr5 = ["Ruby", "Kotlin"];
let storing = arr3.concat(arr4, arr5);
console.log(storing);

// we can concat the elements directly.
let arr = ["C", "C++", "Python"];
let add = arr.concat("Java", "JavaScript", "Android");
console.log(add);
