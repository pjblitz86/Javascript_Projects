let re;
re = /hello/;
re = /hello/i; // i is a flag case insensitive
// re = /hello/g; // g - Global search

console.log(re);
console.log(re.source);

// exec() - return the result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - return result array or null
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// search() - returns the index of the first match if not found -1
// const str = "PJ Hello there";
// const result = str.search(re);
// console.log(result);

// replace() - return a new string with some or all matches
const str = "Hello thar";
const newStr = str.replace(re, 'Hi');
console.log(newStr);