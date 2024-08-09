/** @format */

// 10.17 Math.tan()
// The Math.tan() static method returns the tangent of a number in radians.

let a = Math.tan(-Infinity); // NaN
console.log(a);

let b = Math.tan(-0); // -0
console.log(b);

let c = Math.tan(0); // 0
console.log(c);

let d = Math.tan(1); // 1.5574077246549023
console.log(d);

let e = Math.tan(Math.PI / 4); // 0.9999999999999999 (Floating point error)
console.log(e);

let f = Math.tan(Infinity); // NaN
console.log(f);
