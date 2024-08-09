/** @format */

// 10.13 Math.acos()
// The Math.acos() function in JavaScript returns the arccosine (inverse cosine) of a number.
// The arccosine is the angle whose cosine is the specified number. The result is an angle expressed in radians.

// It take values from 1 to -1 otherwise it will return NAN
// It will give reslut in the radian

let a = Math.acos(-2); // NaN
console.log(a);

let b = Math.acos(-1); // 3.141592653589793 (π)
console.log(b);

let c = Math.acos(0); // 1.5707963267948966 (π/2)
console.log(c);

let d = Math.acos(0.5); // 1.0471975511965979 (π/3)
console.log(d);

let e = Math.acos(1); // 0
console.log(e);

let f = Math.acos(2); // NaN
console.log(f);

// Now if we want to change the radian into degree we can do
let calculateDegree = Math.acos(0.5) * (180 / Math.PI);
console.log(Math.floor(calculateDegree));
