const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    // promise can be pending, resolved or failed.
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition() // promise chaining with 'then'
    .then(posData => {
      positionData = posData;
      return setTimer();
    })
    .then(data => {
      console.log(data, positionData);
    })
    .catch(err => {
      // catches any errors prior in this promise chain, so usually this block is at the end.
      console.log(err);
    })
    .finally(() => {
      console.log("final cleanup");
    });

  // setTimer(1000).then(() => {
  //   console.log("Timer done!");
  // });
  // console.log("Getting position...");
}

// async/await rewritten for trackUserHandler function
async function trackUserHandler2() {
  // async wraps whole function to return a promise
  try {
    // async await error handling
    const posData = await getPosition(); // looks like synchronous code but it isnt
    const timerData = await setTimer(2000);
    // under the hood it still works like 'then' chaining
    // throw Error("sum ting went wong...");
    console.log("will appear after await cause whole function is async");
    console.log(timerData, posData);
  } catch (err) {
    console.log(err);
  }
}

button.addEventListener("click", trackUserHandler2);

Promise.race([getPosition(), setTimer(1000)]).then(fastestPromise => {
  console.log(fastestPromise);
}); // race conditions

Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData); // returns all promises in array
});

Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData);
});
