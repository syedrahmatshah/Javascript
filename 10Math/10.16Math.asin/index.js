/** @format */

// 10.16 Math.asin()
// The Math.asin() static method returns the inverse sine (in radians) of a number.

let a = Math.asin(-2); // NaN
console.log(a);

let b = Math.asin(-1); // -1.5707963267948966 (-π/2)
console.log(b);

let c = Math.asin(-0); // -0
console.log(c);

let d = Math.asin(0); // 0
console.log(d);

let e = Math.asin(0.5); // 0.5235987755982989 (π/6)
console.log(e);

let f = Math.asin(1); // 1.5707963267948966 (π/2)
console.log(f);

let g = Math.asin(2); // NaN
console.log(g);
