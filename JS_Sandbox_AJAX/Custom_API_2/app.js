const http = new EasyHTTP;

// Get Users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

  // User data
  const data = {
    name: 'Paul',
    username: 'blitz86',
    email: 'joe@pj.lt'
  }

  // Create post
http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err));

// Update post
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));

// Delete post
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));