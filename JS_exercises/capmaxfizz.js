// setup node server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('JS_Exercises\n');
});

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  // 1. old school with regular for loop and substring
  // const strArr = str.toLowerCase().split(' ');
  // for(var i=0; i< strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0,1).toUpperCase() + 
  //   strArr[i].substring(1);
  // }
  // return strArr.join(' ');

  // 2. use map - more impressive, cleaner way
  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substr(1))
  //   .join(' ');
  
  // 3. regex - advanced
  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  });
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  // 1. old school with additional var swap
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';
  str.split('').forEach(function(char) {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  for (let char in charMap) {
    // debugger;
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(let i=1; i<=100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    }
      else if(i % 3 === 0) {
      console.log('Fizz');
    } else if(i % 5 === 0) {
      console.log('Buzz');
    }
    else {
      console.log(i);
    }
  }
}

// Call Function
const output = fizzBuzz();
console.log(output);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});