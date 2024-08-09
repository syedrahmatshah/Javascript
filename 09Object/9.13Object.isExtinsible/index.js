/** @format */

// 9.13 Object.isExtensible()
/*The Object.isExtensible() static method determines if an object is 
extensible (whether it can have new properties added to it).*/

const object = {
  name: "syed rahamt shah",
};
console.log(Object.isExtensible(object));

Object.preventExtensions(object);
/*Object.preventExtensions() makes an object non-extensible, which means that no new properties can be added to the object.
However, existing properties can still be modified or deleted.*/
console.log(Object.isExtensible(object));
