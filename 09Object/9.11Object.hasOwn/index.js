/** @format */

// 9.11 Object.hasOwn()
/*The Object.hasOwn() static method returns true if the specified object has the indicated 
property as its own property. If the property is inherited, or does not exist, the method returns false.*/

const object1 = {
  Prop: "exist",
};

console.log(Object.hasOwn(object1, "Prop"));

console.log(Object.hasOwn(object1, "toString"));
