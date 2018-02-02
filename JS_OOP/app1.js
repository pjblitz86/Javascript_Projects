// Built in constructors

// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'bar';

// console.log(name1);
// console.log(name2);

console.log(typeof name1);
console.log(typeof name2);

if(name2 === 'Jeff') { // string type is not equal to object
  console.log('YES');
} else {
  console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num2);

// Function
const getSum1 = function(x, y) {
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1'); // weird

console.log(getSum1(1,1));
console.log(getSum2(1,1));

// Objects
const john01 = {name: 'John'};
const john02 = new Object({name: "John"});

console.log(john01);

// Regular expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+'); // need 'escaping'

console.log(re1);
console.log(re2);

// generally stay away from 2nd way with new