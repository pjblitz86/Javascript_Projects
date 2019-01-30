// constructor es5
function Book(title, author, year) {
  // console.log("Book instantiated..");
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// instantiate an Object
const book1 = new Book("Book1", "John Doe", "2013");
const book2 = new Book("Book2", "Jane Doe", "2016");

console.log(book1.getSummary());
console.log(book2.getSummary());

// CLEANER CODE compared to 1
