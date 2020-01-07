const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimeout(() => {
        // callback'ception - getting to callback hell
        console.log(posData);
      }, 2000);
    },
    error => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log("Timer done!"); // will not run first as it is put into message queue by browser api, and then inserted into call stack
  }, 0); // minimum not guaranteed time
  console.log("Getting position..."); // this will run first
}

button.addEventListener("click", trackUserHandler); // browser managed event loop is async example: its registered in message queue and via callback it steps back in the code execution when call stack is empty (not blocking other code execution)

// code blocking - thread will be free for event listening only after this block is finished, cause JS is single threaded
// let result = 0;

// for (let i = 0; i < 40000; i++) {
//   result += i;
// }
// console.log(result);
