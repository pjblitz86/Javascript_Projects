// XMLHttp Request - old school way - not done this way anymore, just for info, use fetchAPI or axios instead.

const xhr = new XMLHttpRequest();
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.responseType = "json"; // we dont need JSON.parse then

xhr.onload = function() {
  // const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr.response;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    listElement.append(postEl);
  }
};

xhr.send();
