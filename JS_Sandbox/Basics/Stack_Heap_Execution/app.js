function getName() {
  return prompt("Your name: ", "Paul");
}

function greet() {
  const userName = getName();
  console.log(`Hello, ${userName}`);
}

greet();

// functions will be registered by JS V8 engine and stored in the Heap memory, can see the stack in Chrome dev tools
