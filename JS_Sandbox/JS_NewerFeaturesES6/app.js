// Iterator example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ?
      {value: names[nextIndex++], done: false} :
      {done: true}
    }
  }
}

// create an array of names
const nameArr = ['Jack', 'Jill', 'John'];
// init iterator and pass names arr
const names = nameIterator(nameArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);