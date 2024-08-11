/** @format */

// 11.9 shift()
/*
1. The shift() method of Array instances removes the first element from an array and returns that removed element. 
2. This method changes the length of the array.
*/

const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
console.log(firstElement);

const myFish = ["angel", "clown", "mandarin", "surgeon"];
console.log("myFish before:", myFish);
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();
console.log("myFish after:", myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log("Removed this element:", shifted);
// Removed this element: angel
