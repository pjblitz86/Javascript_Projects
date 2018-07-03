import fetchJsonp from 'fetch-jsonp';

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);

// fetch animals from API

function fetchAnimals(e) {
  e.preventDefault();
  // get user input
  const animal = document.querySelector('#animal').value;
  const zip = document.querySelector('#zip').value;
  // fetch pets
  fetchJsonp(`http://api.petfinder.com/pet.find?format=json&key=7bec9c7514d4e1627003a8d320ba4286&animal=${animal}&location=${zip}&callback=callback`,
   {jsonpCallbackFunction: 'callback'})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

