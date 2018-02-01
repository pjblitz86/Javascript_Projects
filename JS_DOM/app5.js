// CREATING ELEMENTS AND INSERING INTO THE DOM

const li = document.createElement('li');

// add class
li.className = 'collection-item';

// add od
li.id = 'new-item';

// add-attribute
li.setAttribute('title', 'New item');

// create text node and append
li.appendChild(document.createTextNode('Hellow World'));

// create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// append link into li
li.appendChild(link);

// append li as child to ul (insert into dom)
document.querySelector('ul.collection').appendChild(li);

console.log(li);

