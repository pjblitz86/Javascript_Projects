// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('hello');
//   // e.preventDefault();
// });


//2nd way
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  // console.log('clicked');
  let val;
  val = e;

  //event target element
  val = e.target;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Hello';

  // Event type

  val = e.type;

  // Timestamp
  val = e.timeStamp;

  console.log(val);
}