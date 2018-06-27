// basic MODULE pattern structure

// (function() {
//   // declare private vars and functions here

//   return {
//     // Declare public vars and functions
//   }
// })();

// stadard module pattern
// const UICtrl = (function() {
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return { // this will be public
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   }

// })();

// UICtrl.callChangeText();

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item added..');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add, // what methods to reveal inside module
    get: get 
  }

})();

ItemCtrl.add({id: 1, name: 'John'});
console.log(ItemCtrl.get(1));