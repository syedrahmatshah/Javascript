/** @format */

// Function in javascript
// Javascript function are used to perform operation.We can call function many time to reuse the code
// classical function in javascript
// function getInfo() {
//   return "hellow how are you?";
// }
// console.log(getInfo());

// arrow function in javscript
// const hello = (name) => {
//   console.log("how are you " + name);
// };
// hello("zakir");

// arrow function in javascript
// const hello = (name, grettings) => console.log(`how are you ${name}`); //without braces it throughs an error that grettings is not defined so we have to define gretting
// console.log(`${grettings}`);
// hello("zakir", "Good Afternoon");

// arrow function in javscript
// const hello = (name, grettings) => {
//   console.log(`how are you ${name}`);
//   console.log(`${grettings}`);
// };
// hello("zakir", "Good Afternoon");

// Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.
// function vowels(string) {
//   return;
// }

// // JavaScript Function to Add Two Numbers
// function addNumbers(num1, num2) {
//   let sum = num1 + num2;
//   console.log(`Sum ${sum}`);
// }
// addNumbers(5, 4);

// // // JavaScript arrow or anonymos Function to Add Two Numbers
// const addNumbers = (num1, num2) => {
//   let sum = num1 + num2;
//   console.log(`Sum ${sum}`);
// };
// addNumbers(5, 4);

//javascript function to find square of a number
// function findSquare(num) {
//   // return square
//   return num * num;
// }
// // call the function and store the result
// let square = findSquare(3);
// console.log(`Square ${square}`);

//javascript arrow function to find square of a number
// const findSquare = (num) => {
//   let square = num * num;
//   return square;
// };

// // call the function and store the result
// let square = findSquare(3);
// console.log(`Square ${square}`);

// Any code written in the function after the return statement is not executed. For example,
// function display() {
//   console.log(`This code wil be excuted`);
//   return `Returning from the function`;
//   console.log(`This code will not be excuted`);
// }
// let message = display();
// console.log(message);

// write a program to find gpa of subjects
// let englishMarks = 75;
// let mathMarks = 90;
// let urduMarks = 65;
// let computerScienceMarks = 89;
// let PhysicsMarks = 78;
// let chemistryMarks = 80;
// let bioMarks = 78;

// const percentage = (subjects) => {
//   return (subjects / 100) * 100;
// };

// const checkGpa = (percentage) => {
//   if (percentage >= 85) {
//     console.log(`Your GPA is : 4.0`);
//   } else if (percentage >= 84) {
//     console.log(`Your GPA is : 3.9`);
//   } else if (percentage >= 83) {
//     console.log(`Your GPA is : 3.8`);
//   } else if (percentage >= 82) {
//     console.log(`Your GPA is : 3.7`);
//   } else if (percentage >= 81) {
//     console.log(`Your GPA is : 3.6`);
//   } else if (percentage >= 80) {
//     console.log(`Your GPA is : 3.5`);
//   } else if (percentage >= 79) {
//     console.log(`Your GPA is : 3.4`);
//   } else if (percentage >= 78) {
//     console.log(`Your GPA is : 3.4`);
//   } else if (percentage >= 77) {
//     console.log(`Your GPA is : 3.3`);
//   } else if (percentage >= 76) {
//     console.log(`Your GPA is : 3.3`);
//   } else if (percentage >= 75) {
//     console.log(`Your GPA is : 3.2`);
//   } else if (percentage >= 74) {
//     console.log(`Your GPA is : 3.2`);
//   } else if (percentage >= 73) {
//     console.log(`Your GPA is : 3.1`);
//   } else if (percentage >= 72) {
//     console.log(`Your GPA is : 3.0`);
//   } else if (percentage >= 71) {
//     console.log(`Your GPA is : 2.9`);
//   } else if (percentage >= 70) {
//     console.log(`Your GPA is : 2.8`);
//   } else if (percentage >= 69) {
//     console.log(`Your GPA is : 2.7`);
//   } else if (percentage >= 68) {
//     console.log(`Your GPA is : 2.6`);
//   } else if (percentage >= 67) {
//     console.log(`Your GPA is : 2.5`);
//   } else if (percentage >= 66) {
//     console.log(`Your GPA is : 2.5`);
//   } else if (percentage >= 65) {
//     console.log(`Your GPA is : 2.4`);
//   } else if (percentage >= 64) {
//     console.log(`Your GPA is : 2.4`);
//   } else if (percentage >= 63) {
//     console.log(`Your GPA is : 2.3`);
//   } else if (percentage >= 62) {
//     console.log(`Your GPA is : 2.2`);
//   } else if (percentage >= 61) {
//     console.log(`Your GPA is : 2.1`);
//   } else if (percentage >= 60) {
//     console.log(`Your GPA is : 2.0`);
//   } else if (percentage >= 59) {
//     console.log(`Your GPA is : 1.9`);
//   } else if (percentage >= 58) {
//     console.log(`Your GPA is : 1.8`);
//   } else if (percentage >= 57) {
//     console.log(`Your GPA is : 1.7`);
//   } else if (percentage >= 56) {
//     console.log(`Your GPA is : 1.6`);
//   } else if (percentage >= 55) {
//     console.log(`Your GPA is : 1.5`);
//   } else if (percentage >= 54) {
//     console.log(`Your GPA is : 1.4`);
//   } else if (percentage >= 53) {
//     console.log(`Your GPA is : 1.3`);
//   } else if (percentage >= 52) {
//     console.log(`Your GPA is : 1.2`);
//   } else if (percentage >= 51) {
//     console.log(`Your GPA is : 1.1`);
//   } else if (percentage >= 50) {
//     console.log(`Your GPA is : 1.0`);
//   } else {
//     console.log(`Your GPA is out of range`);
//   }
// };
// let EnglishPercentage = percentage(englishMarks);
// console.log(checkGpa(EnglishPercentage));

// let mathsPercentage = percentage(mathMarks);
// console.log(checkGpa(mathsPercentage));

// let urduPercentage = percentage(urduMarks);
// console.log(checkGpa(urduPercentage));

// let computerSciencePercentage = percentage(computerScienceMarks);
// console.log(checkGpa(computerSciencePercentage));

// let physicsPercentage = percentage(PhysicsMarks);
// console.log(checkGpa(physicsPercentage));

// let chemistryPercentage = percentage(chemistryMarks);
// console.log(checkGpa(chemistryPercentage));

// let bioPercentage = percentage(bioMarks);
// console.log(checkGpa(bioPercentage));

// let englishMarks = 75;
// let mathMarks = 90;
// let urduMarks = 65;
// let computerScienceMarks = 89;
// let PhysicsMarks = 68;
// let chemistryMarks = 80;

// let obtainedMarks =
//   englishMarks +
//   mathMarks +
//   urduMarks +
//   computerScienceMarks +
//   PhysicsMarks +
//   chemistryMarks;

// let percentage = (obtainedMarks / 600) * 100;
// console.log(`obtainedMarks ${obtainedMarks} , percentage ${percentage}%`);

// if (percentage >= 85) {
//   console.log(`Your GPA is : 4.0`);
// } else if (percentage >= 84) {
//   console.log(`Your GPA is : 3.9`);
// } else if (percentage >= 83) {
//   console.log(`Your GPA is : 3.8`);
// } else if (percentage >= 82) {
//   console.log(`Your GPA is : 3.7`);
// } else if (percentage >= 81) {
//   console.log(`Your GPA is : 3.6`);
// } else if (percentage >= 80) {
//   console.log(`Your GPA is : 3.5`);
// } else if (percentage >= 79) {
//   console.log(`Your GPA is : 3.4`);
// } else if (percentage >= 78) {
//   console.log(`Your GPA is : 3.4`);
// } else if (percentage >= 77) {
//   console.log(`Your GPA is : 3.3`);
// } else if (percentage >= 76) {
//   console.log(`Your GPA is : 3.3`);
// } else if (percentage >= 75) {
//   console.log(`Your GPA is : 3.2`);
// } else if (percentage >= 74) {
//   console.log(`Your GPA is : 3.2`);
// } else if (percentage >= 73) {
//   console.log(`Your GPA is : 3.1`);
// } else if (percentage >= 72) {
//   console.log(`Your GPA is : 3.0`);
// } else if (percentage >= 71) {
//   console.log(`Your GPA is : 2.9`);
// } else if (percentage >= 70) {
//   console.log(`Your GPA is : 2.8`);
// } else if (percentage >= 69) {
//   console.log(`Your GPA is : 2.7`);
// } else if (percentage >= 68) {
//   console.log(`Your GPA is : 2.6`);
// } else if (percentage >= 67) {
//   console.log(`Your GPA is : 2.5`);
// } else if (percentage >= 66) {
//   console.log(`Your GPA is : 2.5`);
// } else if (percentage >= 65) {
//   console.log(`Your GPA is : 2.4`);
// } else if (percentage >= 64) {
//   console.log(`Your GPA is : 2.4`);
// } else if (percentage >= 63) {
//   console.log(`Your GPA is : 2.3`);
// } else if (percentage >= 62) {
//   console.log(`Your GPA is : 2.2`);
// } else if (percentage >= 61) {
//   console.log(`Your GPA is : 2.1`);
// } else if (percentage >= 60) {
//   console.log(`Your GPA is : 2.0`);
// } else if (percentage >= 59) {
//   console.log(`Your GPA is : 1.9`);
// } else if (percentage >= 58) {
//   console.log(`Your GPA is : 1.8`);
// } else if (percentage >= 57) {
//   console.log(`Your GPA is : 1.7`);
// } else if (percentage >= 56) {
//   console.log(`Your GPA is : 1.6`);
// } else if (percentage >= 55) {
//   console.log(`Your GPA is : 1.5`);
// } else if (percentage >= 54) {
//   console.log(`Your GPA is : 1.4`);
// } else if (percentage >= 53) {
//   console.log(`Your GPA is : 1.3`);
// } else if (percentage >= 52) {
//   console.log(`Your GPA is : 1.2`);
// } else if (percentage >= 51) {
//   console.log(`Your GPA is : 1.1`);
// } else if (percentage >= 50) {
//   console.log(`Your GPA is : 1.0`);
// } else {
//   console.log(`Your GPA is out of range`);
// }

// let englishGpa = checkGPA;
