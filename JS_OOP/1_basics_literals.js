// string is primitive but can be wrapped as object behind the scenes - autoboxing
const s1 = "Hello";
console.log(s1.toUpperCase());

const s2 = new String("Hello");
console.log(typeof s1);
console.log(typeof s2);

console.log(window); // absolute parent object with loads of methods
// use random method of window
console.log(navigator.appVersion);

// LITERALS

//object literal
const book1 = {
  title: "Book1",
  author: "John Doe",
  year: "2013",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

console.log(book1.getSummary());

const book2 = {
  title: "Book2",
  author: "Jane Doe",
  year: "2016",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

console.log(Object.keys(book2));
console.log(Object.values(book2));
console.log(book2.getSummary());

// but this defies DRY principle, that's where constructors come in
