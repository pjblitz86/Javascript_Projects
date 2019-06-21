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
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
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

function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (
    (p === "rock" && c === "paper") ||
    (p === "paper" && c === "scissors") ||
    (p === "scissors" && c === "rock")
  ) {
    return "computer";
  } else {
    return "player";
  }
}

function showWinner(winner, computerChoice) {
  if (winner === "player") {
    scoreboard.player++;
    result.innerHTML = `
    <h1 class="text-win">You Win</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
  } else if (winner === "computer") {
    scoreboard.computer++;
    result.innerHTML = `
    <h1 class="text-lose">You Lose</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
  } else {
    result.innerHTML = `
    <h1>It's Draw</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
  }
  score.innerHTML = `
  <p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>
  `;

  modal.style.display = "block";
}

function clearModal(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

choices.forEach(choice => {
  choice.addEventListener("click", play);
});
window.addEventListener("click", clearModal);
