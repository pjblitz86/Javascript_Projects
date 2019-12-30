// organize the code around reusable, pure functions

const REQUIRED = "REQUIRED";
const MIN_LENGTH = "MIN_LENGTH";

// reusable
function getUserInput(inputElementId) {
  return document.getElementById(inputElementId).value;
}

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

// pure function
function createUser(uName, uPassword) {
  if (!validate(uName, REQUIRED) || !validate(uPassword, MIN_LENGTH, 5)) {
    throw new Error(
      "invalid input - username or password is wrong or password should be at least 6 chars"
    );
  }
  return {
    name: uName,
    password: uPassword
  };
}

function greetUser(user) {
  console.log(user);
  console.log(`Hi I am ${user.name}`);
}

function signupHandler(event) {
  event.preventDefault();
  const enteredUserName = getUserInput("username");
  const enteredPassword = getUserInput("password");

  try {
    const newUser = createUser(enteredUserName, enteredPassword);
    greetUser(newUser);
  } catch (err) {
    alert(err.message);
  }
}

// completely reusable - no hardcode, no assumptions
function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById(formId);
  form.addEventListener("submit", formSubmitHandler);
}

connectForm("user-input", signupHandler);
