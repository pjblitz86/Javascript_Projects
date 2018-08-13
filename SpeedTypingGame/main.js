/* future improvements to do: 
  1. add radio button or dropbox for user to select difficulty
  2. implement local storage to display high scores
  3. more colors, UI improvement
  4. add a start game button maybe
*/
window.addEventListener('load', init);

// GLOBAL vars

// available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

// to change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying; // is the game in progress or not

// DOM element selection
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// static array for words - could improve by fetching from some API
const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// initialize game
function init() {
  // show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // load word from array
  showWord(words);
  // start matching on word input
  wordInput.addEventListener('input', startMatch);
  // call countdown every second
  setInterval(countdown, 1000);
  // check game status
  setInterval(checkStatus, 50);
}

// start match
function startMatch() {
  if(matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  // if score is -1, display 0
  if(score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match current word to wordInput
function matchWords() {
  if(wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!'
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// pick and show random word
function showWord(words) {
  // generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // output a random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // check if time has not run out
  if(time > 0) {
    // decrement
    time--;
  } else if (time === 0) {
    // game over
    isPlaying = false;
  }
  // show time
  timeDisplay.innerHTML = time;
}
// check game status
function checkStatus() {
  if(!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}

