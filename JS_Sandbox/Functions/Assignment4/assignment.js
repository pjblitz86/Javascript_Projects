const sayHello = name => console.log("Hi " + name);

const sayHello2 = (name, greeting = "Hi") =>
  console.log(`${greeting}, ${name}`);
const sayHello3 = () => console.log("Hello example");
const sayHello4 = name => `Hi, ${name}`;

sayHello("Paul");
sayHello2("Paul");
sayHello3("Hi", "Paul");
console.log(sayHello4("Paul"));

const checkInput = (cb, ...inputStr) => {
  let isEmpty = false;
  for (const str of inputStr) {
    if (!str) {
      isEmpty === true;
      break;
    }
  }
  if (!isEmpty) {
    cb();
  }
};

checkInput(
  () => {
    console.log("callback");
  },
  "hello",
  "123",
  ""
);
