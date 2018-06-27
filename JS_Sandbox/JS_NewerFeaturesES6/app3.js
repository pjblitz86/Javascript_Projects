// Symbols

const sym1 = Symbol(); // no constructor
const sym2 = Symbol('sym2');

// console.log(typeof sym2);
console.log(Symbol('123') === Symbol('123'));

// Unique object keys - main use for symbols
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in
for(let i in myObj) {
  console.log(`${i}: ${myObj[i]}`); // will not loop through symbols
}

// symbols are ignored by json.stringify()

console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));