// XMLHttp Request - old school way - not done this way anymore, just for info, use fetchAPI or axios instead.

const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json"; // we dont need JSON.parse then

    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
}

// using then chaining
function getPosts() {
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

getPosts();
createPost("Test", "A test post");
