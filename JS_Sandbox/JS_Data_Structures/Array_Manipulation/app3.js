// RETRIEVING INDEXES
const testArr = [1, 5.3, -4, -4, 10];

console.log(testArr.indexOf(0)); // returns the first found value index, if not found -1
console.log(testArr.lastIndexOf(-4)); // returns last found value index

const personData = [{ name: "Paul" }, { name: "John" }];
console.log(personData.indexOf({ name: "Paul" })); // doesnt work on objects, cause of ref types

// FIND & FINDINDEX in obj array
const paul = personData.find((person, idx, persons) => {
  return person.name === "Paul";
});

const john = personData.findIndex((person, idx, persons) => {
  return person.name === "John";
});

console.log(paul);
console.log(john);

// INCLUDES METHOD - if you just need to check, but dont need index
console.log(testArr.includes(-4)); // returns true or false
