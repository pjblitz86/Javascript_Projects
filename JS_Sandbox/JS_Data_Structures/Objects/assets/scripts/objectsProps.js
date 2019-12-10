const userChosenKey = "PJ";

const person = {
  "first name": "Paul", // this key works fine, rarely used
  age: "33",
  hobbies: ["Programming", "Chess"],
  // define property
  [userChosenKey]: "some value",
  greet: function() {
    alert("Hi there");
  }
};

// accessing properties
console.log(person.age); // standard access
console.log(person["first name"]); // access string keys
// const filter = document.getElementById("filter");
// filter.style["background-color"] = "blue"; // similar example

// dynamically access property
const keyName = "first name";
console.log(person[keyName]);

// adding/editing properties
person.age = "34";
person.isAdmin = true;

// removing property
delete person.hobbies; // good way
person.age = undefined; // not clean

console.log(person);
