/** @format */

// 10.15 Math.sin()
// The JavaScript math sin() method returns the sine of the given number.
// The value returned by sin() method ranges between -1 to 1, which represents the sine of the angle.

let a = Math.sin(-Infinity); // NaN
console.log(a);

let b = Math.sin(-1);
let calculateDegree = Math.sin(1) * (180 / Math.PI);
console.log(b);
console.log(Math.trunc(calculateDegree));

let c = Math.sin(0); // 0
console.log(c);

let d = Math.sin(1); // 0.8414709848078965
console.log(d);

let e = Math.sin(Math.PI / 2); // 1
console.log(e);

let f = Math.sin(Infinity); // NaN
console.log(f);
