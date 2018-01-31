// CONDITIONALS AND OPERATORS

// if(something) {
//   do something
// } else {
//   do smth else
// }

const id = 100;

// // EQUAL TO
// if(id == 100) { // comparing value but not type
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// // NOT EQUAL TO

// if(id !== 101) { // comparing 
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// // EQUAL TO VALUE AND TYPE used most of the time

// if(id === 100) { // comparing value and type ===
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// // NOT EQUAL TO VALUE AND TYPE used most of the time

// if(id !== 100) { // comparing value and type ===
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }


// Test if undefined
// if(typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No ID');
// }

// GREATER OR LESS THAN
// if(id <= 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// IF ELSE

const color = 'red';

if(color === 'red') {
  console.log('Color is red');
} else if(color === 'blue') {
  console.log('Color is blue');
} else { // default like in case
  console.log('Color is not red and not blue');
}


// LOGICAL OPERATORS

const name = 'Steve';
const age = 25;


// AND &&
if(age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if(age >= 13 && age <=19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65) {
  console.log(`{name} cannot run in race`);
} else {
  console.log(`${name} is registered for the race`)
}

// TERNARY OPERATOR very useful shorthand conditional initiation of variable

console.log(id === 100 ? 'correct' : 'incorrect');

// without braces possible but not recommended cause prone to errors and code goes only to next line

if(id === 100)
  console.log('correct');
else
  console.log('incorrect');