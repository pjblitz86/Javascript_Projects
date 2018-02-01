const form = document.querySelector('form');
const taskInput = document.getElementById('task');

// clear form input
taskInput.value = '';

form.addEventListener('submit', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  // get input value
  console.log(taskInput.value);

  e.preventDefault();
}