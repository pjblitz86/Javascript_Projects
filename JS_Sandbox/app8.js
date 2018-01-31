// DATE AND TIME

let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00'); // various ways, see documentation
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth(); // january is 0
val = today.getDate(); // day of month
val = today.getDay(); // week day; sunday is 0
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();

val = today.getTime(); // time stamp since 1970 in seconds

birthday.setMonth(2); // starts from 0
birthday.setDate(6);
birthday.setFullYear(1986);

console.log(birthday);