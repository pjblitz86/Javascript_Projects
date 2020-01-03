function add(num1, num2) {
  // pure function, no side effects, produces same result for same inputs always
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

let previousResult = 0;

// impure function
function addRandom(num1) {
  previousResult = 1; // side effect - changes smth outside the function
  return num1 + Math.random(); // random effect
}

console.log(addRandom(4));

// factory function - function which returns another function
// it's also a closure

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier); // takes the latest value 1.2
    return amount * tax * multiplier;
  }

  return calculateTax;
}

// for this scenario factory function is helpful, cause 1 param changes always
const calculateVATAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// Closures
// every function in JS is a closure, cause it's scoped and registers surrounding lexical scoped environment if it has used variables
// Closures are basically the walking dead. When a function returns, the idea is that all of the variables within that function should be non existent. Yet, closures still have access to any variables in their scope chains.

multiplier = 1.2;
console.log(calculateVATAmount(100));
console.log(calculateVATAmount(200));

let userName = "Max"; // closure locks this variable in its lexical scope

function greetUser() {
  let name = "John";
  console.log(`Hi, ${name} ${userName}`);
}

let name = "Peter";

userName = "Paul"; // closure uses the latest value in their lexical scope

greetUser();
