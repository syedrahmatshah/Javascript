/** @format */

// 11.7 push()
/*The push() method of Array instances adds the specified
elements to the end of an array and returns the new length of the array.*/

// Add elements to the end ========>
// Return the new length ========>
const animals = ["pigs", "goats", "sheep"];
const count = animals.push("cows");
console.log(animals);
console.log(count);

const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");
console.log(sports);
console.log(total);
