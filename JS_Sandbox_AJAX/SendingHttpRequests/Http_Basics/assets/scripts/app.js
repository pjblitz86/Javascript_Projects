// XMLHttp Request - old school way - just for understanding, use fetchAPI or axios instead.

const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post");
const fetchBtn = document.querySelector("#available-posts button");
const postList = document.querySelector("ul"); // dont add event listener on all li, but use delegation

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json"; // we dont need JSON.parse then

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("sum ting wong!"));
      }
    };

    xhr.onerror = function() {
      reject(new Error("Failed to send request"));
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
}

// using then chaining
function getPosts() {
  sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/postss")
    .then(responseData => {
      const listOfPosts = responseData;
      for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector("h2").textContent = post.title.toUpperCase();
        postEl.querySelector("p").textContent = post.body;
        postEl.querySelector("li").id = post.id;
        listElement.append(postEl);
      }
    })
    .catch(err => console.log(err.message));
}

// in async/await
async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };
  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchBtn.addEventListener("click", getPosts);
form.addEventListener("submit", event => {
  event.preventDefault();
  // validate
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;
  createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", event => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});