// es6 stuff but under the hood same thing with prototypes
// just dont have to write prototype stuff

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Magazine subclass

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// Instantiate Magazine
const mag1 = new Magazine("Mag1", "John D", "2015", "april");
console.log(mag1);
console.log(mag1.getSummary());
