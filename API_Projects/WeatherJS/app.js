// init weather object
const weather = new Weather('Boston', 'MA');
// init UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
  }