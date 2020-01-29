const button = document.querySelector("button");
const textParagraph = document.querySelector("p");

// clipboard api - would work on chrome, but not edge, safari for example

button.addEventListener("click", () => {
  const text = textParagraph.textContent;
  if (navigator.clipboard) {
    // wont run if browser doesnt support it
    navigator.clipboard
      .writeText(text)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    // fallback
    alert("Feauture not available");
  }
});

// you can use polyfills - it recreates the feauture in broser that doesnt support it

// for not supported core JS features you can use transpilation (babel) - to ES5
