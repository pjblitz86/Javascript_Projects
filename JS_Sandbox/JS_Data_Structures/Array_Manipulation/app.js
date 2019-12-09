const numbers = [1, 2, 3]; // most common way to create an array
console.log(numbers);

const moreNumbers = new Array("Hi", "Welcome"); // []
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

const listItems = document.querySelectorAll("li");
const evenMoreNumbers = Array.from("hi"); // from array like object/string/iterable
console.log(evenMoreNumbers);
const arrayListItems = Array.from(listItems);
console.log(listItems);
console.log(arrayListItems);

// Array types can be mixed in JS
const hobbies = ["Cooking", "Sports"];
const personalData = [30, "Max", { moreDetail: [] }];
const analyticsData = [
  [1, 1.6],
  ["hi", 4]
];

// easy way to loop through 2D arrays
for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}
