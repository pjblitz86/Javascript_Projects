// XMLHttp Request - old school way - not done this way anymore, just for info, use fetchAPI or axios instead.

const xhr = new XMLHttpRequest();
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

function sendHttpRequest(method, url) {
  const promise = new Promise((resolve, reject) => {
    xhr.open(method, url);
    xhr.responseType = "json"; // we dont need JSON.parse then

    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.send();
  });
  return promise;
}

function fetchPosts() {
  sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts").then(
    responseData => {
      const listOfPosts = responseData;
      for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector("h2").textContent = post.title.toUpperCase();
        postEl.querySelector("p").textContent = post.body;
        listElement.append(postEl);
      }
    }
  );
}

fetchPosts();
