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

function calculate(calculationType) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperator;

  switch (calculationType) {
    case "ADD":
      currentResult += enteredNumber;
      mathOperator = "+";
      break;
    case "SUBTRACT":
      currentResult -= enteredNumber;
      mathOperator = "-";
      break;
    case "MULTIPLY":
      currentResult *= enteredNumber;
      mathOperator = "*";
      break;
    case "DIVIDE" || ("DIV" && enteredNumber !== 0):
      currentResult /= enteredNumber;
      mathOperator = "/";
      break;
    default:
      return;
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  log(calculationType, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
