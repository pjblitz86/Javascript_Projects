// NUMBERS

// all numbers in JS are floats, there's no such type as integer, 4 would be 4.0 under the hood in JS

// more in articles about CS float imprecision theory
// tricky interview question
console.log(0.2 + 0.1); // not 0.3, cause internally with bits imprecision appears

// max and min number
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
// same as
console.log(Math.pow(2, 53) - 1);

console.log((4).toString(2)); // convert to binary
console.log((1 / 5).toString(2)); // represented in binary

// toFixed() method - great way to fix this issue

// BigInt <number>n if you need bigger number than safe_int

console.log(Number.POSITIVE_INFINITY);
console.log(Number.isNaN(4)); // very useful in algos

// Math object
// Generate random number

function randomIntBetween(min, max) {
  // return Math.random() * (max - min) + min; // min/max are not included
  return Math.floor(Math.random() * (max - min + 1) + min); // min/max are included
}

console.log(randomIntBetween(10, 20));

// STRINGS - look for MDN :)

// tagged templates - useful when you want to construct some dynamic output based on a string input

function productDescription(strings, productName, productPrice) {
  console.log(strings); // string array without dinamic parts
  console.log(productName);
  console.log(productPrice);
  return "This is a product";
}

const prodName = "Javascript Course";
const prodPrice = 4.44;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`; // wtf syntax? - tagged template

console.log(productOutput);

// REGEX intro - Regular expressions

const userInputEmail = "test@test.com";
// construct a pattern that verifies if input is email

const regex = /^\S+@\S+\.\S+$/;
console.log(regex.test(userInputEmail));
