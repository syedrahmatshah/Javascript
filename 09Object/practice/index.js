/** @format */

// Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
const object1 = {
  firstName: "ali",
  lastName: "khan",
  rollNo: 23,
};
// console.log(object1);
delete object1.rollNo;
// console.log(object1);

// Write a JavaScript program to list the properties of a JavaScript object.
const object2 = {
  firstName: "ali",
  lastName: "khan",
  rollNo: 23,
};
// console.log(Object.keys(object2));

// Write a JavaScript program to get the length of a JavaScript object.
const object3 = {
  firstName: "ali",
  lastName: "khan",
  rollNo: 23,
};
// console.log(Object.keys(object3).length);

// Write a JavaScript program to get the volume of a
// cylindrical with four decimal places using object classes.

class cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
    return volume.toFixed(4);
  }
}
const myCylinder = new cylinder(3, 5);
const volume = myCylinder.getVolume();
console.log(volume);

const calculateCylinder = (radius, height) => {
  const Volume = Math.PI * Math.pow(radius, 2) * height;
  return Volume.toFixed(4);
};
const Volume = calculateCylinder(3, 5);
console.log(Volume);
