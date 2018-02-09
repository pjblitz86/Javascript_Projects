document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true); // 3rd parameter desc is it async?

  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders while fetching data
  xhr.onprogress = function(){ // ready state will be 3
    console.log('READYSTATE', xhr.readyState);
  }


  // already on step 4 dont need onreadystatechange
  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // earlier we needed to do this... older syntax
  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  // optional - for user experience if smth goes wrong
  xhr.onerror = function() {
    console.log('Request error...');
  }

  xhr.send();


    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}