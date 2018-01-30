// ARRAYS AND THEIR METHODS

const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(2,55,36,45,25); // another way

const fruit = ['Apple', 'Banana', 'Orange'];

const mix = [true, 'hello', null, {a:1}, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get a single value

val = numbers[3]; // counted from 0 index
val = numbers[0];

// Insert into existing array index
numbers[2] = 100;
// find index of value - indexOf

val = numbers.indexOf(36);

// Mutating arrays with methods

// add on at the end
numbers.push(250);
// add on to front
numbers.unshift(120);

// take of from end
numbers.pop();
// take of from the front
numbers.shift();

// splice values
numbers.splice(1, 3);

// reverse
numbers.reverse();

// concat
val = numbers.concat(numbers2);

// sort
val = fruit.sort();
val = numbers2.sort();

val = numbers.sort(function(a,b) {
  return b - a;
});

// find

function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);