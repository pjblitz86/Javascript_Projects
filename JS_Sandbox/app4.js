// STRINGS AND CONCAT

const firstName = "Paulius";
const lastName = "Juknis";
const age = 31;
const str = 'Hello there my name is PJ';
const tags = 'form,type,enter, stuff';

let val;

val = firstName + lastName;

// concat
val = firstName + " " + lastName;

// append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping

val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// uppercase, lowercase

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf('a');
val = firstName.lastIndexOf('P');

// charAt() - opposite of indexOf
val = firstName.charAt('2');

// get last character
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0,4);

// slice

val = firstName.slice(0, 4); // used with arrays mostly

// split
val = str.split(' ');
val = tags.split(',');

// replace
val = str.replace('PJ', 'Paulius');

// includes
val = str.includes('Hello');

console.log(val);