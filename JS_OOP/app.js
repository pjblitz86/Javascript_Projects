// simple object

// const brad = {
//   name: 'Brad',
//   age: 30
// }

// console.log(brad.age);

// constructor function

function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){ // method
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  } 
  console.log(this); // local scope
}

console.log(this); // global scope - gives window object
// instantiate
const brad = new Person('Brad', '9-10-1981');
const john = new Person('John');
console.log(brad.calculateAge());