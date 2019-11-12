const defaultResult = 0;
let currentResult = defaultResult;

currentResult = defaultResult + 10;

let calculationDescription = `${defaultResult} + 10`;

console.log(currentResult);

function add() {
  currentResult += userInput.value;
  outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener("click", add);
