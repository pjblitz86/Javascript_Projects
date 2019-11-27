const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;
let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you`);
    return DEFAULT_CHOICE;
  }
  return selection;
};

startGameBtn.addEventListener("click", function() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("game is starting...");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
