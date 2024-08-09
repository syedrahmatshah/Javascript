/** @format */

// 9.4  Object.defineProperty()
// The method defines a new property directly on an object and returns the object. To change the flags, we can use Object.defineProperty.
// We cannot change it back, because define property doesn?t work on non-configurable properties.

const object1 = {};
Object.defineProperty(object1, "property1", {
  value: 22,
});

// throws an error in strict mode
object1.property1 = 20;
console.log(object1.property1);

// We can maintain the id as permanent without to change the value of id
// let person = {
//   name: "ali",
// };

// Object.defineProperty(person, "id", {
//   value: 1,
// });

// console.log(person.id);
// person.id = 23;
// console.log(person.id);

//Now if We want  to change the value of id the we can use writable to true
// let person = {
//   name: "ali",
// };

// Object.defineProperty(person, "id", {
//   value: 1,
//   writable: true,
// });

// console.log(person.id);
// person.id = 23;
// console.log(person.id);
