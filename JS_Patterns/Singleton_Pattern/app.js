const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: 'PJ'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB) // can never have more than 1 instance

// console.log(instanceA);