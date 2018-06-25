// Init Github

const github = new Github();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== '') {
    // make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === "Not Found") {
          // Show Alert

        } else {
          // Show the profile
        }
      })
  } else {
    // Clear the profile
  }

});