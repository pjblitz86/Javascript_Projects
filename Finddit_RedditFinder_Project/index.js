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
  reddit.search(searchTerm, searchLimit, sortBy)
    .then(results => {
      console.log(results);
      let output = '<div class="card-columns">';
      // loop through posts
      results.forEach(post => {
        // check if it has image
        const image = post.preview ? post.preview.images[0].source.url : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg"  

        output += `
        <div class="card">
          <img class="card-img-top" src="${image}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${truncateText(post.selftext, 100)}</p>
            <a href="${post.url}" target="_blank" class="btn btn-primary">Read more...</a>
            <hr>
            <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
            <span class="badge badge-dark">Score: ${post.score}</span>
          </div>
        </div>
        `;
      });
      output += '</div>';
      document.getElementById('results').innerHTML = output;
    });

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

// truncate text
function truncateText(text, limit) {
  const shortened = text.indexOf(' ', limit);
  if(shortened == -1) return text;
  return text.substring(0, shortened);
}