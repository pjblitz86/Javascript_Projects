const num1 = 100;
const num2 = 50;
let val;

// simple math
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math object

val = Math.PI;
val = Math.E;

val = Math.round(2.8);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,44,55,64);
val = Math.max(2,33,44,55,64);

val = Math.random(); // from 0.00 to 1.00
val = Math.floor(Math.random() * 10); // if we want int random numbers

console.log(val);
