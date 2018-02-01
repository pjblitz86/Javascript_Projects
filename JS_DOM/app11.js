// LOCAL AND SESSION storage

// set local storage item - persists
// localStorage.setItem('name', 'John'); // key, value pair
// localStorage.setItem('age', '30'); // key, value pair

// set session storage item - doesnt stay after reopening browser
// sessionStorage.setItem('name', 'Paul'); // key, value pair

// // remove from storage
// // localStorage.removeItem('name');

// // get from storage
// const name = localStorage.getItem('name');
// console.log(name);

// // clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
  console.log(task);
});