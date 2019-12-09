// Array methods

const maHobbies = ["Cooking", "Sports"];

// Adding elements
maHobbies.push("Reading"); // at array's end
maHobbies.unshift("Coding"); // at the beginning

// Removing
maHobbies.pop(); // last element
maHobbies.shift(); // 1st element

// shift and unshift moves array elements to the left and right accordingly

// insert or remove array elements at certain index
maHobbies[1] = "Coding";
// maHobbies[4] = "Chess"; // works in JS

// SPLICE
maHobbies.splice(1, 0, "Chess");
maHobbies.splice(0, 1);
maHobbies.push("Cooking");
maHobbies.splice(-1, 1); // deletes from the last element going backward specific length
console.log(maHobbies);

// SLICE
const testResults = [1, 5.3, 1.5, 10.99, -4, 10];
// const storedResults = testResults.slice(0, 4); // copies and returns new sliced array

testResults.push(4);
console.log(testResults);

// CONCAT
const storedResults = testResults.concat([1, 2, 3]); // like push adds/combines elements at the end and returns this new array
console.log(storedResults);
