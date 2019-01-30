// constructor es5
function Book(title, author, year) {
  // console.log("Book instantiated..");
  this.title = title;
  this.author = author;
  this.year = year;
}

// prototype instead of adding to constructor
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge proto
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// revise / change year - manipulate object data
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

// instantiate an Object
const book1 = new Book("Book1", "John Doe", "2013");
const book2 = new Book("Book2", "Jane Doe", "2016");

console.log(book1);
console.log(book1.getAge());
console.log(book2.getSummary());

console.log(book2);
book2.revise("2018");
console.log(book2);
