// Template literals ES6 compatible in modern browsers

const name = 'John';
const age = 30;
const job = 'Web developer';
const city = 'Kaunas';
let html;

function hello() {
  return "Hello";
}

// without template strings ES5 way
html = '<ul><li>Name:' + name + '</li><li>Age: ' + age + '</li></ul>';

// with template strings
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${job}</li>
    <li>Job: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age > 31 ? "Over 30" : "Under 30"}</li>
  </ul>
`;

document.body.innerHTML = html;