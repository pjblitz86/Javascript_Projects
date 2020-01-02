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
