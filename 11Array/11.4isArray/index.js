/** @format */

// 11.4 isArray()
/*The isArray() method is used to test whether the value passed is an array. 
If it finds the passed value is an array, it returns True. Otherwise, it returns False.*/

let a = Array.isArray();
console.log(a);

let b = Array.isArray({});
console.log(b);

let c = Array.isArray(null);
console.log(c);

let d = Array.isArray(undefined);
console.log(d);

let e = Array.isArray(17);
console.log(e);

let f = Array.isArray("Array");
console.log(f);

let g = Array.isArray(true);
console.log(g);

let h = Array.isArray(false);
console.log(h);

let i = [1, 2, 3, 4];
console.log(Array.isArray(i));
