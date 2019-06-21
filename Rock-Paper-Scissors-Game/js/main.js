const choices = document.querySelectorAll(".choice"),
  score = document.getElementById("score"),
  result = document.getElementById("result"),
  restart = document.getElementById("restart"),
  modal = document.querySelector(".modal");

const scoreboard = {
  player: 0,
  computer: 0
};

function play(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  console.log(playerChoice, computerChoice);
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 2) {
    return "scissors";
  } else if (randomNumber == 1) {
    return "paper";
  } else {
    return "rock";
  }
}

choices.forEach(choice => {
  choice.addEventListener("click", play);
});
