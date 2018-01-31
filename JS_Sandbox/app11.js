// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') { // function scope
  // before ES6
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet('Steve')); // call to function

// FUNCTION EXPRESSIONS

const square = function(x = 3) { // annonymous function
  return x*x;
};

// console.log(square(8));

// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFEs useful for design patterns - esp modular

(function() {
  console.log('IIFE Ran...');
})();

(function(name) {
  console.log('Hello ' + name);
})('Brad');

// PROPERTY METHODS - FUNCTION INSIDE OBJECT

const todo = {
  add: function() {
    console.log('Add todo...');
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function() { // adding to object
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();
