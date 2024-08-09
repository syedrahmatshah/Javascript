/** @format */

// 9.9 Object.isFrozen()
/*The Object.isFrozen method in JavaScript is used to determine whether an 
object is frozen. An object is considered frozen if it is not possible
to add new properties to it, remove existing properties, 
or modify the values or descriptors of existing properties. This method returns a boolean*/

const object1 = {
  property1: 42,
};

console.log(Object.isFrozen(object1));

Object.freeze(object1);
console.log(Object.isFrozen(object1));
