// setup node server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('JS_Exercises\n');
});

// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// older solution - ES5 arguments and for loop
// function addAll() {
//   var args = Array.prototype.slice.call(arguments);
//   var total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }

// SOLUTION 2 - ES6 ...REST OPERATOR & REDUCE

// function addAll(...numbers) {
//   let total = 0;
//   numbers.forEach(num => (total += num));
//   return total;
// }

// SOLUTION 3 - reduce ES6 vs ES5 at its best
function addAll(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur); // accumulator with added current value in each iteration
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;
  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// SOLUTION 1 - arguments, indexOf, filter
// function seekAndDestroy(arr) {
//   const args = Array.from(arguments);
//   function filterArr(arr) {
//     // return true if its NOT in array
//     return args.indexOf(arr) === -1;
//   }

//   return arr.filter(filterArr);
// }

// SOLUTION 2 - more modern ES6 with rest, filter & includes func
function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  const arr1 = []; // position where the -1 are
  const arr2 = []; // all the values except -1

  a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));
  const sortArr = arr2.sort((a, b) => a - b);
  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));
  return sortArr;
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

// solution use charCodeAt and map with split
function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split('').map((char, i) => {
    if (str.charCodeAt(i) === compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  return [evenSum, oddSum];
}

// FUNCTION CALLS
console.log(evenOddSums([50, 60, 60, 45, 71]));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
