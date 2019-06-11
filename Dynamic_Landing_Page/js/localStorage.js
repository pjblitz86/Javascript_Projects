const name = document.getElementById('name'),
  focus = document.getElementById('focus');

function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    name.textContent = localStorage.getItem('focus');
  }
}

getName();
getFocus();