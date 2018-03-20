// more modern with promises, arrow functions, ES6 classes, etc.

class EasyHTTP {
  // // Make HTTP get request
  // async get(url) {
  //   const response = await fetch(url);

  //   const resData = await response.json();
  //   return resData;
  // }

  // Make an http post request
  async post(url, data) {
      const response = await fetch(url,  {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const resData = await response.json();
      return resData;
    }
  
  // Make ant http PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url,  {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make ant http DELETE request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url,  {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => resolve('Resource deleted'))
      .catch(err => reject(err));
    });
  }
}