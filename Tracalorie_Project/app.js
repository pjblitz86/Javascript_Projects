// STORAGE Controller

// ITEM Controller
const ItemCtrl = (function() {
  // Item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data structure / STATE
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Cookie', calories: 400},
      {id: 2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods in return
  return {
    logData: function() {
      return data;
    }
  }
})();



// UI Controller
const UICtrl = (function() {
  
})();



// APP Controller - MAIN - all modules meet here 
const App = (function(ItemCtrl, UICtrl) {
  
  // Public methods in return
  return {
    init: function() {
      console.log('Initializing app...');
    }
  }
})(ItemCtrl, UICtrl);

// Initialize app
App.init();