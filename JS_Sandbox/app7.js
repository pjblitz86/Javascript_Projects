// OBJECT LITERALS

var person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: { // imbedded object
    city: 'Kaunas',
    state: 'Lithuania'
  },
  getBirthYear: function() { // functions in object
    return 2017 - this.age;
  }
}

let val;

val = person;

// Get specific value
val = person.firstName; // recommended
val = person['lastName']; // other way
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city']; // other way
val = person.getBirthYear();

console.log(val);

// array of objects
const people = [
  {name: 'John', age: 30},
  {name: 'Paul', age: 31}
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}