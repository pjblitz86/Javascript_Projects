console.log('Testing');
var greeting = 'Hello';
console.log(greeting);
console.log({ a: 1, b: 2 });

console.table({ a: 1, b: 2 });
console.clear();

console.time('Hello');
// how long smth in code runs
console.timeEnd('Hello');

// var, let, const

var name = 'John Doe';
console.log(name);
name = 'Steve Smith'; // reassign
console.log(name);

var uninitialized;
uninitialized = 'Hello'; //now initialized

var firstName = 'Camel Case'; // use this
var first_name = 'Snake case';
var FirstName = 'Pascal Case'; // for OOP - constr,class

// const cannot reassign and must be initialized

const person = {
  name: 'John',
  age: 30
};

person.name = 'Sara'; // mutate we can change properties, but we cannot reassign the object person
console.log(person);

const numbers = [1, 2, 3];
numbers.push(6);
console.log(numbers);

// data types
const surname = 'Doe';
console.log(typeof surname);

const age = 31;
console.log(typeof age);

const hasKids = false;
console.log(typeof hasKids);

let test; // undefined

// Symbol ES6
const sym = Symbol();
console.log(typeof sym);

// REFERENCE TYPES
const hobbies = ['movies', 'music', 'chess']; // array
console.log(typeof hobbies);

const address = {
  city: 'Kaunas',
  state: 'Lithuania'
};
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);
