console.log("Sending analytics...");

const intervalId = setInterval(() => {
  console.log("Data was sent...");
}, 4000);

const stopAnalyticsBtn = document
  .getElementById("stop-analytics-btn")
  .addEventListener("click", () => {
    clearInterval(intervalId);
  });
