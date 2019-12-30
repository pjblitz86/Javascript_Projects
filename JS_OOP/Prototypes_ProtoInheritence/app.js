// classes - recent feature in JS (ES6)

// class Person {
//   name = "Paul";

//   constructor() {
//     this.age = 33;
//   }

//   greet() {
//     console.log(`Hi I'm ${this.name}, my age is ${this.age}`);
//   }
// }

// but behind the scenes JS classes are converted...

// constructor function

function Person() {
  this.age = 33;
  this.name = "Paul";
  this.greet = function() {
    console.log(`Hi I'm ${this.name}, my age is ${this.age}`);
  };
}

const person1 = new Person(); // behind the scenes new object in constructor function is created, properties added and object returned
person1.greet();
