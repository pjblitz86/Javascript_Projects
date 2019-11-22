let randomNumber = Math.random();
let randomNumber2 = Math.random();

if (randomNumber > 0.7) {
  alert(`${randomNumber} is greater than 0.7`);
}

let numArr = [1, 2, 3, 4];

for (let i = numArr.length - 1; i >= 0; i--) {
  console.log(numArr[i]);
}

for (let num of numArr) {
  console.log(num);
}

if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber < 0.2 ||
  randomNumber2 < 0.2
) {
  alert("code runs..");
}
