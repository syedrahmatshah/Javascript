/** @format */

// 8.replcace()
// The JavaScript string replace() method is used to replace a part of a given string with a new substring.
// This method searches for specified regular expression in a given string and then replace it if the match occurs.
//8.1 let str = "Javatpoint";
// console.log(str.replace("tpoint", "Script"));

// 8.2 we will replace a regular expression using global search modifier.
// let str =
//   " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";
// console.log(str.replace(/Node.js/g, "AngularJS"));

// 8.3  we will replace a regular expression without using global search.
// let str =
//   " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";
// console.log(str.replace(/Node.js/, "AngularJS")); //It will replace only first match.

// 8.4 we will see that replace() method is case-sensitive.
// let str =
//   " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";
// console.log(str.replace(/Node.JS/g, "AngularJS"));

// 8.5 We can ignore case-sensitive behaviour of replace() method by using ignore flag modifier.
// var str =
//   " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";
// console.log(str.replace(/Node.JS/gi, "AngularJS"));
