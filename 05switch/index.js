/** @format */

// Switch in javascript
// The switch statement is used to perform different actions based on different conditions.

// write a program to find the grade,percentage of the student having seven books
let math = 90;
let english = 85;
let urdu = 95;
let pakStudy = 75;
let chemistry = 86;
let biology = 80;
let islamiat = 79;
let totalMarks = 700;
let obtainedMarks;
let percentage;

obtainedMarks =
  math + english + urdu + pakStudy + chemistry + biology + islamiat;

percentage = (obtainedMarks / totalMarks) * 100;

switch (true) {
  case percentage >= 90:
    console.log("Grade A");
    break;

  case percentage >= 80:
    console.log("Grade B");
    break;
  case percentage >= 70:
    console.log("Grade C");
    break;
  case percentage >= 60:
    console.log("Grade ");
    break;
  default:
    console.log("Fair");
}
