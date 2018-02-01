// Replace element

// create element
const newHeading = document.createElement('h2');

// add id
newHeading.id = 'task-title';
// new text node
newHeading.appendChild(document.createTextNode('Task List'));

// get old heading
const oldHeading = document.getElementById('task-title');

//parent
const cardAction = document.querySelector('.card-action');
// replace
cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove specific list item
lis[0].remove();

// remove child element
list.removeChild(lis[2]);


// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('title');
link.setAttribute('title', 'google');
val = link;

link.removeAttribute('title');

console.log(val);