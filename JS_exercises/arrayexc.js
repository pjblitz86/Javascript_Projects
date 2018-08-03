// setup node server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('JS_Exercises2\n');
});

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hello there, my name is Brad') === 'there,'

function longestWord(sen) {

  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  
  // sort by length
  const sorted = wordArr.sort((a,b) =>  b.length - a.length);

  // return sorted[0]; is ok but if multiple words are same length put that same length into array
  const longestWordArr = sorted.filter(word => word.length === sorted[0].length);
  // check if more than 1 arr val
  if(longestWordArr.length === 1) {
    // return word
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // 1. use while loop simple
  // const chunkedArr = [];
  // let i = 0;

  // while(i< arr.length) {
  //   // slice out from the index to the index + the chunk length
  //   // and push on to the chunked arr
  //   chunkedArr.push(arr.slice(i, i + len));
  //   // increment by chunk length
  //   i += len;
  // }
  // return chunkedArr;

  // 2. forEach

  const chunkedArr = [];
  // loop through arr
  arr.forEach(val => {
    // get last element
    const last = chunkedArr[chunkedArr.length - 1];
    // check if last and if last length is equal to the chunk length
    if(!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // 1.reduce
  // return arrays.reduce((a, b) => a.concat(b));
  
  // 2.concat.apply - short and sweet
  // return [].concat.apply([], arrays);

  // 3. spread operator ES6 - even shorter
  return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  // 1. play with char codes
  let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
    if(char === 'z' || char === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
  return newStr;
}

// Call Function
const output = letterChanges('hello there');

console.log(output);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});