// STYLING DOM ELEMENTS

// inline styles
section.style.backgroundColor = "blue";

// add/remove classes
section.className = "";
section.className = "red-bg";

const button = document.querySelector("button");
button.addEventListener("click", () => {
  // if (section.className === "red-bg visible") {
  //   section.className = "red-bg invisible";
  // } else {
  //   section.className = "red-bg visible";
  // }

  // with classList much easier way
  section.classList.toggle("invisible");
});

// CREATING and INSERTING ELEMENTS
// section.innerHTML = "<h2>New Title</h2>"; // replaces current element

const list = document.querySelector("li");
// list.innerHTML = list.innerHTML + "<li>New List Item</li>"; // not a good way, as browser rerenders this

section.insertAdjacentHTML("beforeend", "<p>sum ting wong</p>");

// even better way of creating/inserting element
const newLi = document.createElement("li");
ul.appendChild(newLi);
newLi.textContent = "new dynamic item";
newLi.append(" some text");
// and advantage with createElement is you can now query select this element, add event listeners like for normal element.

// to add as 1st element
const newLi2 = document.createElement("li");
newLi2.textContent = "Dynamic item once more";
ul.prepend(newLi2);

// add it before last li
ul.lastElementChild.before(newLi2); // this will be moved as it's part of the DOM and is an object (reference type).

// replace
ul.firstElementChild.replaceWith(newLi);

// insertAdjacentElement - more browser supported
const newLi3 = document.createElement("li");
newLi3.textContent = "Dynamic item adjacent";
newLi.insertAdjacentElement("afterend", newLi3);
