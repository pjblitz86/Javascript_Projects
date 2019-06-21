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
  console.log(e.target.id);
}

choices.forEach(choice => {
  choice.addEventListener("click", play);
});
