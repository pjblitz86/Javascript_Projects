class Course {
  set price(value) {
    if (value > 0) {
      this._price = value;
    } else {
      throw "Price can not be 0 or negative";
    }
  }

  get price() {
    return `\$${this._price}`;
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  lengthPriceValue() {
    return this.length / this._price;
  }

  courseSummary() {
    return `title: ${this.title}, length: ${this.length}, price: ${this.price}`;
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
    this.publish();
  }

  publish() {
    console.log("This is a theoretical course");
  }
}

const course1 = new Course("JS", 4, 4);
console.log(course1);
console.log(course1.lengthPriceValue());
console.log(course1.courseSummary());

const course2 = new Course("TS", 12, 6);
console.log(course2);
console.log(course2.lengthPriceValue());
console.log(course2.courseSummary());

const course3 = new PracticalCourse("Practical JS", 16, 8, 40);
console.log(course3);

const course4 = new TheoreticalCourse("Theoretical TS", 20, 5);
console.log(course4);
