/** @format */

// string in javascript
// string is a sequence of character in javascript
// We can create string in javascript by two method

// 1.By string literal
// let stringName = "string value";
// console.log(stringName);

// 2.By string object (using new keyword)
// let val = new String("ali");
// console.log(val);

// 10 The JavaScript string substring() method fetch the string on the basis of provided index and returns the new sub string. It works similar to the slice() method with a difference that it doesn't accepts negative indexes.
//  This method doesn't make any change in the original string.

// 14 The JavaScript string toUpperCase() method is used to convert the string into uppercase letter.
// This method doesn't make any change in the original string.
// let str = "javatpoint";
// console.log(str.toUpperCase());

// 15 toLocaleUpperCase()
// it also work as upperCase
// let str = "javatpoint";
// console.log(str.toLocaleUpperCase());

// 16 The JavaScript toString() method returns a string representing the calling object.
// In other words, this method provides a string representation of the object and treats same as the valueof() method.
// let str = "javatpoint";
// console.log(str.toString());

// 16.1;
// let str = new String("Javatpoint");
// console.log(str.toString());

// 16.2;
// let str = new String("Javatpoint");
// console.log(str.toString());

// 16.3 convert number to string
// let str = 29;
// console.log(str.toString());

// 17 valueOf()
// The JavaScript string valueOf() method is used to find out the primitive value of String objec

// 17.1 we will print the primitive value of string object.
// let str = "javatpoint";
// console.log(str.valueOf());

// 17.2
// let str = new String("javatpoint");
// console.log(str.valueOf());

// 18 split()
// var str = "This is JavaTpoint website";
// console.log(str.split(" ")); //splits the given string.

// 19 trim()
// The JavaScript String trim() method removes leading and trailing whitespaces from the string.
// let str = " javatpoint  ";
// console.log(str.trim());

// write a program to print reverse of a string using charAt()
// let str = "javatPoint";
// let strlen = str.length;
// let revStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   revStr += str.charAt(i);
// }
// console.log(revStr);

// write a program to print reverse of a string using index
// let str = "javatPoint";
// let strlen = str.length;
// let revStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   revStr += str[i];
// }
// console.log(revStr);

// using array method
// let str = "1234";
// console.log(str);

// let output = str.split("").reverse("").join("");
// console.log(output);

// write a program to find while this is a palandrome or not
// let str = "madam";
// let len = str.length;
// let msg = "it is a plandrome";
// for (let i = 0; i < len / 2; i++) {
//   if (str[i] != str[len - 1 - i]) {
//     // in this situation the value of str[i] is 0 which is not equal to as
//     msg = "it is not a palandrome"; // the value of str[len-1-i] is [5-1-0] and the answer is [4 which is also m] which is  equal to each other
//   }
// }
// console.log(msg);
