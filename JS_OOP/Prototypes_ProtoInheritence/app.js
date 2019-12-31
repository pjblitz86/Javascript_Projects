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

// Prototypes - like a base class from which everyone inherits implicitly
// add a method to prototype

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };

// better way
Person.prototype.printAge = function() {
  // method will be added to prototype
  console.log(this.age);
};

const person1 = new Person(); // behind the scenes new object in constructor function is created, properties added and object returned
person1.greet();

console.log(person1);
console.log(person1.toString()); // [object Object] works cause prototype has this method in prototype chain

person1.printAge(); // our added method, it's not found in person1 instance directly, but in prototype chain, so gets called.
console.log(person1.__proto__); // accessing proto - available on any JS object

// editing prototype

const course = {
  title: "JS",
  rating: 5
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  printRating: function() {
    console.log(`Course rating is ${this.rating}/5`);
  }
}); // override the proto

course.printRating();

const student = Object.create({
  // create object with prototype
  printProgress: function() {
    console.log(this.progress);
  }
});

student.name = "Paul";
Object.defineProperty(student, "progress", {
  // configure object property descriptors
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false
});

console.log(student);
