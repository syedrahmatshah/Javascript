/** @format */

// 11.15 lastIndexOf()
/*
1. The JavaScript array lastIndexOf() method is used to search the position of a particular element
in a given array. It behaves similar to indexOf() method with a difference 
that it start searching an element from the last position of an array.
2. The lastIndexOf() method is case-sensitive. The index position of first character in a string is always start with zero.
3. If an element is not present in a string, it returns -1.*/

let arr = ["C", "C++", "Python", "C++", "Java"];
let result = arr.lastIndexOf("C++");
console.log(result);

// In this example, we will provide the index value from where the search starts.
let arr1 = ["C", "C++", "Python", "C++", "Java"];
let result1 = arr1.lastIndexOf("C++", 2);
console.log(result1);

// Here, we will search an element which is not present in an array.
let arr2 = ["C", "C++", "Python", "C++", "Java"];
let result2 = arr2.lastIndexOf("JavaScript");
console.log(result2);
