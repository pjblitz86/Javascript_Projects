// XMLHttp Request - old school way - not done this way anymore, just for info, use fetchAPI or axios instead.

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();
