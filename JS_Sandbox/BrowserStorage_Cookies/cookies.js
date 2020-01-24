console.log(document.cookie);

const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  const userId = "u123";
  document.cookie = `uid=${userId}`; // adds a cookie
});

retrieveBtn.addEventListener("click", () => {
  console.log(document.cookie);
});
