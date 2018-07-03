import reddit from './redditapi';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');


// Form Event Listener
searchForm.addEventListener('submit', e => {
  // get search term
  const searchTerm = searchInput.value;
  // Get sort
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  // Get limit
  const searchLimit = document.getElementById('limit').value;

  // Check input for not empty
  if(searchTerm === '') {
    // show message
    showMessage('Please add a search term', 'alert-danger');
  }

  // Clear input
  searchInput.value = '';

  // Search Reddit
  reddit.search(searchTerm, searchLimit, sortBy);

  e.preventDefault();
});

// show message - creates a div with DOM manipulation
function showMessage(message, className) {
  // create a div
  const div = document.createElement('div');
  // add class
  div.className = `alert ${className}`;
  // add the text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const searchContainer = document.getElementById('search-container');
  // Get search
  const search = document.getElementById('search');

  // Insert message
  searchContainer.insertBefore(div, search);

  // timeout the message
  setTimeout(() => document.querySelector('.alert').remove(), 3000);

}