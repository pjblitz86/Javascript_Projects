const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const AMorPM = hour >= 12
    ? 'PM'
    : 'AM';

  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${AMorPM}`;
  setTimeout(showTime, 1000);
}

function addZero(number) {
  return (parseInt(number, 10) < 10
    ? '0'
    : '') + number;
}

showTime();