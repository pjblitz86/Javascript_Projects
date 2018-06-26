// Init local storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// init UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  // Change location
  weather.changeLocation(city, state);
  // Set location in local storage
  storage.setLocationData(city, state)
  // get and display weather 
  getWeather();
  // Close modal
  $('#locModal').modal('hide');

});


function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
  }