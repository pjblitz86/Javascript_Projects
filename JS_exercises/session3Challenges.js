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
// function addAll(...numbers) {
//   return numbers.reduce((acc, cur) => acc + cur); // accumulator with added current value in each iteration
// }

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

// function sumAllPrimes(num) {
//   let total = 0;
//   function checkForPrime(i) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 2; i <= num; i++) {
//     if (checkForPrime(i)) {
//       total += i;
//     }
//   }
//   return total;
// }

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// FUNCTION CALLS
// console.log(sumAllPrimes(10));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
