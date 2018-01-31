// WINDOW OBJECT - global object / METHODS / PROPERTIES

// Alert / Prompt / Confirm

// window.alert('Hello');

// const input = prompt('Enter stuff');
// alert(input);

// Confirm - for deletion mostly but 90s type better custom
// if(confirm('Are you sure?')) {
//   console.log('Yes');
// } else {
//   console.log('no');
// }

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;

// Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.href;

// // Redirect
// window.location.href = 'http://google.com';
// // Reload
// window.location.reload();

// History Object - browsing history

window.history.go();

// NAVIGATOR OBJECT - browser

val = window.navigator;

console.log(val);