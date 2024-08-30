/** @format */

// In JavaScript, a promise is a good way to handle asynchronous operations.
// It is used to find out if the asynchronous operation is successfully completed or not.

// Create a promise
// const promise = new promise(function (resolve, reject) {
//   // console.log();
// });

// let suppose the below program is asynchronous so it can be handle by using promise

// const count = true;
// const promiseCount = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve("Ther is a count");
//   } else {
//     reject(`Their is no count`);
//   }
// });
// console.log(promiseCount);

// The catch() method is used with the callback when the promise is rejected or if an error occurs.
// const currentPromise = new Promise(function (resolve, reject) {
//   reject("Promise rejected");
// });
// currentPromise
//   .then(function successValue1(result) {
//     console.log(result);
//   })
//   .catch(function errorValue(result) {
//     console.log(result);
//   });

// javascript finally() method
let currenValue = new Promise(function (resolve, reject) {
  resolve("Promise reslved");
});

currenValue.finally(function greet() {
  console.log("This code is excuted");
});
