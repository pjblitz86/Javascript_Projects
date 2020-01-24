// localStorage (permanent until deleted)
// sessionStorage (lives as long as browser is open)
// both are usefull for token and small stuff storage

const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

const userId = "u123";
const user = {
  // how to store an object? use JSON.stringify
  name: "Paul",
  age: 30,
  hobbies: ["chess", "coding"]
};

storeBtn.addEventListener("click", () => {
  sessionStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});
retrieveBtn.addEventListener("click", () => {
  const storedKey = sessionStorage.getItem("uid");
  const extractedUser = JSON.parse(localStorage.getItem("user"));
  if (storedKey && extractedUser) {
    console.log(storedKey);
    console.log(extractedUser);
  } else {
    console.log("Could not find id");
  }
});
