// PROTOTYPES - each object has prototype
//Object.prototype
// Person.prototype, prototype

// person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){ // method
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // } 
}

// Calculate age - move into prototype
Person.prototype.calculateAge = function(){ // method
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// Gets married
Person.prototype.getsMarried = function(newlastName) {
  this.lastName = newlastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);
console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName()); // not stored in object but in prototype

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName')); // false because in prototype