const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  const userId = "u123";
  const user = {
    name: "Paul",
    age: 30
  };
  document.cookie = `uid=${userId}; max-age=4`; // adds a cookie with expiration in secs
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveBtn.addEventListener("click", () => {
  const cookieData = document.cookie.split(";");
  const data = cookieData.map(i => {
    return i.trim();
  });
  console.log(data);
  console.log(data[1].split("=")[1]); // user value
});
