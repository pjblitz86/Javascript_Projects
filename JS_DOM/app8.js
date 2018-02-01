const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// click
// clearBtn.addEventListener('click', runEvent);
// double click

// clearBtn.addEventListener('dblclick', runEvent);

card.addEventListener('mousemove', runEvent);

// event handler function - cleaner code without callback

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}