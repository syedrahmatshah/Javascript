/** @format */

// 9.8 Object.is()
// The Object.is() static method determines whether two values are the same value.
// IT WORK MORE PRECISELY THAN === AS WE SEE DIFFERENCE BETWEEN -0 AND 0

console.log(Object.is("1", 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj = {};
console.log(Object.is(obj, {}));
// Expected output: false

const object1 = {
  property1: 56,
};
console.log(Object.is(object1));

Object.seal(object1);
console.log(Object.isSealed(object1));
