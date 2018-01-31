// document.getElementById() - single select

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';

// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// // Change the content
// taskTitle.textContent = 'Task list';
// taskTitle.innerText = 'My tasks';
// taskTitle.innerHTML = '<span style="color:red">Task Lists</span>';


// document.querySelector() - newer more powerfull can select by anything

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5')); // gets the first one

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello';
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // only first one