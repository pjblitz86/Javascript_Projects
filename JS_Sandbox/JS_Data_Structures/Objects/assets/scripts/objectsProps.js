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

// object spread operator
const person2 = { name: "Paul", hobbies: ["chess", "programming"] };

const person3 = person2;
person2.age = "33";
console.log(person3); // will have same props, cause it's referenced

// but with object spread operator it creates a copy not a reference
const anotherPerson = { ...person2 };
person2.city = "Kaunas";
console.log(anotherPerson); // wont add the property cause it was a copied object
person2.hobbies.push("Sports");
console.log(anotherPerson); // but array inside stayed referenced, cause it was not a deep nested object clone, just the top level.
