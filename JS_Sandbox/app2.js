// Type conversion

let val;

// Number to string

val = String(555);
val = String(4+4);
// Bool to string

val = String(true);
val = String(new Date());
val = String([1,2,3]);

// toString

val = (5).toString();

// Strings to Numbers
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = parseInt('100.30');
val = parseFloat('100.30');


// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2)); // to decimals


// Type Coersion

const val1 = '5';
const val2 = 6; // JS changes 6 to a string auto if this is the case
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);