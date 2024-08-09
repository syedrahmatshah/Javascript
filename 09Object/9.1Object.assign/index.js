/** @format */

// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
// Objects are assigned and copied by reference. It will return the target object.
// Object.assign() is useful for merging objects
// 1 Object.assign()
const target = { a: 1, b: 3, c: 5 };
const source = { a: 4, b: 1, c: 6 };

const result = Object.assign(target, source);
console.log(result);
