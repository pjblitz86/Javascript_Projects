// Top to bottom step by step execution

const form = document.getElementById("user-input");

function signUpHandler(event) {
  event.preventDefault();

  const userNameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const enteredUserName = userNameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredUserName.trim().length === 0) {
    alert("Invalid input, user name must not be empty");
    return;
  }

  if (enteredPassword.trim().length <= 4) {
    alert(
      "Invalid input, password must not be empty or less than 5 characters"
    );
    return;
  }

  const user = {
    name: enteredUserName,
    password: enteredPassword
  };

  console.log(user);
}

form.addEventListener("submit", signUpHandler);
