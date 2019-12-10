// SPREAD OPERATOR - very useful with arrays
const namesArr = ["PJ", "AJ", "Eminem"];

const namesExpandedArr = ["SJ", "CJ", ...namesArr];
console.log(namesExpandedArr);

const numerosArr = [0, -4, 5, 10];
const minNumber = Math.min(...numerosArr); // copied arr is not affected
console.log(minNumber);

// DESTRUCTURING - on arrays and objects
const nameData = ["Paul", "John", "Peter", 1, 2, 3];
const [name1, name2, name3, ...otherInfo] = nameData; // will store each element in constant
console.log(name1, name2, name3, otherInfo);

// SETS - good for unique key scenarios, e.g. logged-in user ids

const ids = new Set([1, 2, 3, 4]); // no dubplicates
ids.add(2);
ids.delete(4);
console.log(ids); // cannot access through index
console.log(ids.has(1));

for (const entry of ids.entries()) {
  console.log(entry[0]);
}

// MAPS

const person1 = { name: "Paul" };
const person2 = { name: "John" };

const personsData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]); // object as key, array as value, this expands object with map but doesnt touch the object.

personsData.set(person2, [{ date: "2 weeks ago", price: 400 }]); // add to map key-value pair

console.log(personsData);
console.log(personsData.get(person1));

for (const [key, value] of personsData.entries()) {
  console.log(key, value); // destructuring
}

for (const key of personsData.keys()) {
  console.log(key); // just the keys
}

for (const value of personsData.values()) {
  console.log(value); // just the values
}
console.log(personsData.size);

// WEAKSET - can be used to release objects for garbage collection
let favPerson = { name: "Paul" };
const favPersons = new WeakSet(); // can store only objects
favPersons.add(favPerson);
console.log(favPersons);

// favPerson = null; // release the object, with normal Set it wont be garbage collected, but weakset wont hold onto that object

// WEAKMAP

let favPersonData = new WeakMap();
favPersonData.set(favPerson, "extra info");

console.log(favPersonData);
