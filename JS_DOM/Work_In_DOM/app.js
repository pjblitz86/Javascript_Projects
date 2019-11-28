// PLAYING AROUND IN THE DOM

// querySelector is versatile, allows full css selection
const h1 = document.querySelector("h1"); // getElementById
const liAll = document.querySelectorAll("li");
console.log(h1.textContent);
console.log(h1.id);
console.log(liAll);

h1.textContent = "Hi";
h1.className = "title";

// changing styles - properties are in camelCase compared to css dash selectors
h1.style.color = "blue";
h1.style.backgroundColor = "yellow";

// to know which properties/methods are available
console.dir(h1);

// attributes and properties
const input = document.querySelector("input");
input.value = "test";
console.dir(input);

// setAttribute and getAttribute
const inputAttr = input.getAttribute("type");
console.log(inputAttr);

console.log(input.setAttribute("value", "test2"));
console.log(input.value); // does not update UI cause here no live-sync
input.value = input.getAttribute("value");
console.log(input.value); // now it shows updated

// looping through elements

// const listItemElements = document.querySelectorAll("li");
const listItemElements = document.getElementsByTagName("li"); // gives live-list, which reflects changes, while querySelectorAll is a snapshot.

for (const listItem of listItemElements) {
  console.dir(listItem);
}

// TRAVERSING THE DOM

// CHILDS and DESCENDANTS
// select 2nd li
const ul = document.querySelector("ul");
console.log(ul.children[1]); // gives specific direct children
console.log(ul.childNodes); // gives descendants

// select 1st li
console.log(ul.firstChild);
console.log(ul.firstElementChild);

// standard css selector way
const li2nd = document.querySelector("li:nth-child(2)");
console.log(li2nd);

// PARENTS AND ANCESTORS

const li1st = document.querySelector("li");
console.log(li1st.parentElement);
console.log(li1st.parentNode); // same in most cases
console.log(li1st.closest("body")); // for ancestors

// SIBLINGS - on same level
console.log(ul.previousSibling); // will be text element
console.log(ul.previousElementSibling); // the element node
console.log(ul.nextElementSibling); // the element node
