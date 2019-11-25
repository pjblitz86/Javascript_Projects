// global scope

// let and const are block scoped
let name = "Paul";

var name2 = "Paul";
var name2 = "Peter"; // possible!, diff from 'let'

// block scope - diff between var and let
if (name2 === "Peter") {
  var hobbies = ["Cooking", "Sports"]; // var here is created as a global
  console.log(hobbies);
}
console.log(hobbies); // works for var! but not 'let'

if (name === "Paul") {
  let hobbies2 = ["Cooking", "Sports"]; // let here is scoped to this block
  console.log(hobbies2);
}
// console.log(hobbies2); // wont work with 'let'

function greet() {
  // function scope
  let age = 30;
  let name = "John"; // shadowed variable - possible cause different scope
  console.log(name, age);
}

function greet2() {
  var age2 = 33;
  var name2 = "George";
}

// console.log(age); // will not work

greet();
greet2();

// HOISTING

("use strict");

console.log(userName); // can be accessed before it's declared

var userName = "Paul"; // this will work with 'var' as it is hoisted first by the JS engine and assigned 'undefined'; wont work with 'let'
