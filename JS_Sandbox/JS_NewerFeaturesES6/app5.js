// Maps ES6 key-value oairs - can use any time as a key or value

const map1 = new Map();

// Set keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values
console.log(map1.size);

// iterating maps

// loop usign for...of to get keys and values

for(let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

// iterate keys only
for(let key of map1.keys()) {
  console.log(key);
}

// convert to arrays

const keyValArr = Array.from(map1);
console.log(keyValArr);