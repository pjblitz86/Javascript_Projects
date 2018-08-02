// setup node
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('JS_Exercises\n');
});

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
// 1. using split-reverse-join string methods - probably most practical  
  // return str
  //   .split('')
  //   .reverse()
  //   .join('');

// 2. old school for loop DESC - cool but bigger chance for err
  // let revString = '';
  // for(let i = str.length -1; i>=0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;

// 3. old school for loop ASC
  // let revString = '';
  // for(let i = 0; i<=str.length -1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;

// 4. ES6 'for of' loop - shows you know more
  // let revString = '';
  // for(let char of str) {
  //   revString = char + revString;
  // }
  // return revString;

// 5. for each with arrow functions - more impressive
  // let revString = '';
  // str.split('').forEach(char => revString = char + revString);
  // return revString;

// 6. use reduce with ES6 - most impressive method
  // return str.split('')
  // .reduce((revString, char) => char + revString);
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// need to reverse a str, compare and return true or false
// function isPalindrome(str) {
//   const revString = str.split('').reverse().join('');
//   return revString === str;
// }

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString()
    .split('').reverse().join('');
  return parseInt(revString) * Math.sign(int);
}

// Call Functions
const output = reverseInt(-12345);
console.log(output);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});