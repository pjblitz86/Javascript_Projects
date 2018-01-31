// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName()

// let lis = document.getElementsByTagName('li');

// // convert html collection into an array

// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function(li, index) {
//   console.log(li.className);
//   li.textContent = `${index} : Hello`;
// });

// console.log(lis);

// document.querySelectorAll()

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index) {
  item.textContent = `${index} : Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) { // works only with array
  li.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++) { // works with array and collection
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);