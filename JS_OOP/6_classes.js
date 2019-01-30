// es6 stuff but under the hood same thing with prototypes

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore() {
    return "Barnes & Noble";
  }
}

// instantiate object
const book1 = new Book("Book1", "John Doe", "2013");

console.log(book1);
book1.revise("2018");
console.log(book1);

console.log(Book.topBookStore());
