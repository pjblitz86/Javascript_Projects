function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

//magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// instantiate Magazine object
const mag1 = new Magazine("Mag1", "John Doe", "2018", "Jan");

// use magazine constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1);

console.log(mag1.getSummary());
