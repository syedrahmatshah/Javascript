/** @format */

// 11.13 sort()
/*The JavaScript array sort() method is used to arrange the array ElementInternals
in some order. By default, sort() method follows the ascending order.*/

let arr = ["AngularJS", "Node.js", "JQuery", "Bootstrap"];
let result = arr.sort();
console.log(result);

let arr1 = [2, 4, 1, 8, 5];
let result1 = arr1.sort();
console.log(result1);

// Let's see an example to extract minimum value from an array.
let arr2 = [2, 6, 1, 8, 5];
let result2 = arr2.sort(); //1,2,4,5,8
console.log(arr2[0]);

// Let's see an example to extract minimum value from an array.
let arr3 = [2, 4, 1, 8, 5];
let result3 = arr3.sort().reverse(); // 8,5,4,2,1
console.log(arr3[0]);
