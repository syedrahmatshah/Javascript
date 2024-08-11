/** @format */

// 11.2 indexOf()
/*The JavaScript array indexOf() method is used to search the position of 
a particular element in a given array. This method is case-sensitive.*/

let arr = ["C", "C++", "Python", "C++", "Java"];
let result1 = arr.indexOf("C++");
console.log(result1);

// we will provide the index value from where the search starts.
let arr1 = ["C", "C++", "Python", "C++", "Java"];
let result2 = arr.indexOf("C++", 2);
console.log(result2);

// we will search an element which is not present in an array.
var arr2 = ["C", "C++", "Python", "C++", "Java"];
var result3 = arr.indexOf("JavaScript");
console.log(result3);
