// FOR EACH

const prices = [1, 2.99, 4, 10];
const tax = 0.21;

const taxAdjustedPrices = [];

prices.forEach((price, idx, prices) => {
  // up to 3 params, usually just 1 - the element we're for eaching
  const priceObj = { index: idx, taxAdjustedPrices: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);

// MAP - returns new transformed array, original arr stays untouched
const prices2 = [1, 2.99, 4, 10, 20];
const taxAdjustedPrices2 = [];

prices2.map(price => {
  taxAdjustedPrices2.push(price * (1 + tax));
});

console.log(taxAdjustedPrices2);

// SORT AND REVERSE

prices2.sort((a, b) => {
  return a - b;
});

prices2.reverse(); // or you could do it in sort return b-a
console.log(prices2);
