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
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

// for this scenario factory function is helpful, cause 1 param changes always
const calculateVATAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// Closures
