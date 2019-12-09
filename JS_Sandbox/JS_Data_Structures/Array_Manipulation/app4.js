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
  return a - b; // works for numbers but not strings
});

prices2.reverse(); // or you could do it in sort return b-a
console.log(prices2);

// FILTER - will return new array and not touch old, up to 3 arguments
const newPirces2 = prices2.filter(price => price >= 4); // arrow functions shine, this is short
console.log(newPirces2);

// REDUCE - tricky but very useful - reduce array to a simpler value in this case sum of prices
const sum = prices2.reduce(
  (accumulator, currentValue, currentIndex, prices2) =>
    accumulator + currentValue,
  0 // 0 is the starting value
);

console.log(sum);

// SPLIT AND JOIN - for strings
const cities = "york,kaunas,vilnius";
const citiesArr = cities.split(","); // seperator by which you split

console.log(citiesArr);

const nameFragments = ["Paul", "Jukman"];
const fullNameArr = nameFragments.join(" ");
console.log(fullNameArr);
