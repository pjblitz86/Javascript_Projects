const button = document.querySelector("button");

// button.onclick = function() {} // older way

const buttonClickHandler = event => {
  alert("Button was clicked...");
  event.target.disabled = true;
  console.log(event);
};

// const anotherButtonClickHandler = () => {
//   console.log("This was clicked");
// };

// button.onclick = buttonClickHandler; // downside - can only attach 1 handler
// button.onclick = anotherButtonClickHandler; // wont work on 2, overrides - gets the last event attached only

// button.addEventListener("click", buttonClickHandler); // allows multiple event listeners to the same element

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler); // same as addeventlistener
// }, 2000);

// scroll events - careful for not slowing down the page
// window.addEventListener("scroll", event => {
//   console.log(event);
// });

// infinite scroll
let curElementNumber = 0;

function scrollHandler() {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  if (distanceToBottom < document.documentElement.clientHeight + 150) {
    const newDataElement = document.createElement("div");
    curElementNumber++;
    newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
    document.body.append(newDataElement);
  }
}

window.addEventListener("scroll", scrollHandler);

const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log(event);
});

// Propagation (capturing and bubbling of event listeners)
const div = document.querySelector("div");

div.addEventListener("click", event => {
  console.log("clicked DIV");
  console.log(event);
}); // if 3rd param true, then capturing phase will run before, outside to inside, useful if you wanna switch the order

button.addEventListener("click", function(event) {
  event.stopPropagation(); // will prevent capture and bubbling to any ancestors
  console.log("clicked BUTTON");
  console.log(event);
  console.log(this);
});

// as we see it bubbles from inside most element to outside

// event delegation
const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// cumbersome approach, bad for performance
// listItems.forEach(listItem => {
//   listItem.addEventListener("click", event => {
//     event.target.classList.toggle("highlight");
//   });
// });

// better is delegate pattern, we take advantage of propagation - just 1 event listener for ul
list.addEventListener("click", function(event) {
  // console.log(event.currentTarget);
  // event.target.classList.toggle("highlight"); // will refer to actual target we clicked - in this case li
  event.target.closest("li").classList.toggle("highlight"); // traverses up with inclusion of itself
  console.log(this);
  //form.submit(); // triggering dom elements from 1 event listener
});

// more complex example with nested li, when event target doesnt help - dom traversal ti the rescue - closest()
