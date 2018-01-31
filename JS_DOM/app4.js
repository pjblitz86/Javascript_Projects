// TRAVERSING THE DOM

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;

// Get child nodes
val = list.childNodes; // nodelist
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// Get children element nodes
val = list.children; // html collection used more often
val = list.children[0];

list.children[1].textContent = 'Hello';

// Children of children
val = list.children[3].children[0];

val = list.firstChild;
val = list.firstElementChild; // actual element without text nodes

val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement; // parent of parent

// siblings

val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.previousSibling;
val = listItem.nextElementSibling.previousElementSibling;

console.log(val);