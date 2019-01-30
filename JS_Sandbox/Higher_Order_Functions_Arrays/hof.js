const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// standard for loop
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach
// companies.forEach(function(company) {
//   console.log(company.name);
// });

// FILTER

// old school with for
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// filter - es6 much nicer
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// filter retail companies - shorthand ES6
// const retailCompanies = companies.filter(
//   company => company.category === "Retail"
// );
// console.log(retailCompanies);

// MAP
// create array of only company names

// const companyNameArr = companies.map(company => company.name);
// console.log(companyNameArr);

// // get sq root

// const agesMap = ages.map(age => Math.sqrt(age).toFixed(2)).map(age => age * 2);
// console.log(agesMap);

// SORT

// sort companies by start year
// const sortedCompanies = companies.sort((c1, c2) =>
//   c1.start > c2.start ? 1 : -1
// );
// console.log(sortedCompanies);

// // sort ages asc
// const sortedAges = ages.sort((a, b) => a - b);
// console.log(sortedAges);

// REDUCE

// add all ages
// standard for loop
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

//with reduce
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// get total years for all companies
const totalYears = companies.reduce(
  (total, years) => total + (years.end - years.start),
  0
);
console.log(totalYears);

// COMBINE TOGETHER ES6 - awesome

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((total, age) => total + age, 0);

console.log(combined);
