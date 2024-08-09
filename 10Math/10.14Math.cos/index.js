/** @format */

// 10.14 Math.cos()
// The JavaScript math cos() method returns the cosine of the given number.
// The value returned by cos() method ranges -1 to 1, which represents the cosine of the angle.

let a = Math.cos(-Infinity); // NaN
console.log(a);

let b = Math.cos(-0); // 1
console.log(b);

let c = Math.cos(0); // 1
console.log(c);

let d = Math.cos(1); // 0.5403023058681398
let calculateDegree = Math.cos(1) * (180 / Math.PI);
console.log(d);
console.log(Math.floor(calculateDegree));

let e = Math.cos(Math.PI); // -1
console.log(e);

let f = Math.cos(2 * Math.PI); // 1
console.log(f);
