class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    addressForm.addEventListener("submit", this.findAddressHandler);

    locateUserBtn.addEventListener("click", this.locateUserHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        "Location feauture not available in your browser, please use Chrome or enter address manually"
      );
      return;
    }
    navigator.geolocation.getCurrentPosition(
      successResult => {
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude
        };
        console.log(coordinates);
      },
      error => {
        alert("Could not locate you, please enter address manually");
      }
    );
  }
  findAddressHandler() {}
}

const placeFinder = new PlaceFinder();
