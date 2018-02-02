/* 
GAME FUNCTION:
- Player must guess a number bewtween min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of correct answer if loose
- Let player choose to play again
*/

// Game values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max), // gonna be random
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  // validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number bewtween ${min} and ${max}`, 'red');
  }
  //check if won
  if(guess === winningNum) {
    // Game over - won
    gameOver(true, `${winningNum} is correct! YOU WIN!`);
  } else {
    // Wrong number
    guessesLeft -= 1;
    if(guessesLeft === 0) {
      // Game over - lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)
    } else {
      // Game continues - answer wrong
      guessInput.style.borderColor = 'red';
      // Clear input
      guessInput.value = "";
      // Tell user it's the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

// Game over function
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  
  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);

  // Play again?
  guessBtn.value = 'Play again?';
  guessBtn.className += 'play-again';
}

// Get Winning number function
function getRandomNum(min, max) {
  return Math.floor(Math.random()*(max-min+1) + min);
}

// Set message function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}