const button = document.querySelector("button");

// button.onclick = function() {} // older way

const buttonClickHandler = () => {
  alert("Button was clicked...");
};

const anotherButtonClickHandler = () => {
  console.log("This was clicked");
};

button.onclick = buttonClickHandler; // downside - can only attach 1 handler
button.onclick = anotherButtonClickHandler; // wont work on 2, overrides - gets the last event attached only
