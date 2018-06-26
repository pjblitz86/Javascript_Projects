let re;
// literal characters
re = /hello/;
re = /hello/i;

// meta character symbols
re = /^h/i;  // must start with
re = /World$/i;  // ends with
re = /^hello$/i; // must begin and end with
re = /h.llo/i; // matches any one character . is a one symbol wildcard
re = /h*llo/i; // matches any one character zero or more times COMPLETE WILDCARD
re = /gre?a?y/i; // optional char
re = /gre?a?y\?/i; // escape char

// Brackets [] - character sets
re = /gr[ae]y/i; // has to be one of the characters
re = /[GF]ray/; // has to be one of the characters
re = /[^GF]ray/; // match anything except these chars
re = /[A-Z]ray/; // match the range from-to
re = /[A-Za-z]ray/; // match the letter range from-to in any case
re = /[0-9]ray/; // match the number range

// Braces {} - Quantifiers
re = /Hel{2,4}o/i; // must occur exactly {m} amount of times
re = /Hel{2,}o/i; // must occur atleast {m} amount of times

// Parenthesis () - for grouping
re = /([0-9]x){3}/

// Shorthand character classes
re = /\w/; // word character one - alphanumeric or _
re = /\w+/; // + = word character one or more - alphanumeric or _
re = /\W/; // + = NON word characters
re = /\d/; // match any one digit
re = /\d+/; // match any one digit or more times
re = /\D/; // match any NON digit
re = /\s/; // match whitespace char
re = /\S/; // match NON whitespace char
re = /Hell/i; // Word boundary
re = /Hell\b/i; // Word boundary exactly

// Assertions - conditionals
re = /x(?=y)/; // match x only if its followed by y
re = /x(?!y)/; // match x only if NOT followed by y

// String to match
const str = 'xkfjgkjfgkfxy';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);