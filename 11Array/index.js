/**
 * In JavaScript, an array is a special type of object used to store and manage a collection of values or elements.
 *  These values can be of any data type, including numbers,
 *  strings, objects, or even other arrays (making it a multi-dimensional array).
 *
 * @format
 */

// We can simply says array is the collection of items ==========>

//=======> We can create array in javascript by three methods ==========>

// 1. By Array literal =======>
let fruits = ["Apple", "Mango", "Orange"];
console.log(fruits);
console.log(typeof fruits);

// 2. By using new keyword =======>
let fruit = new Array("Apple", "Mango", "Orange");
console.log(fruit);

// 3. By using array constructor =======>
let vegetables = Array("carrot", "potato", "tomato");
console.log(vegetables);

// We can also create an empty array using constructor =======>
let emptyArray = Array();
console.log(emptyArray); //output []
