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

button.addEventListener("click", buttonClickHandler); // allows multiple event listeners to the same element

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler); // same as addeventlistener
// }, 2000);

// scroll events - careful for not slowing down the page
// window.addEventListener("scroll", event => {
//   console.log(event);
// });
