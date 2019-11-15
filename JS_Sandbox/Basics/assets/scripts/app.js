const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function log(operation, initialResult, enteredNumber, currentResult) {
  const logEntry = {
    operation,
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  log("add", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  log("subtract", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  log("multiply", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  log("divide", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
