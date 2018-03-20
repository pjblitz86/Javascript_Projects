// const sayHello = function() {
//   console.log('Hello');
// }

// arrow function
// const sayHello = () => {
//   console.log('Hello');
// }

// // one line function doesnt need braces
// const sayHello = () => console.log('Hello');

// // one line returns
// const sayHello = () => 'Hello';

// // return object
// const sayHello = () => ({msg: 'Hello'});

// // parameters - single does not need patenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// // multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

const users = ['Nathan', 'John', 'William']

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// shorter
const nameLengths = users.map((name) => {
  return name.length;
});

// shortest
const nameLengths = users.map(name => name.length);


console.log(nameLengths);

// console.log(sayHello());