const task3Element = document.getElementById("task-3");

function sayHello() {
  alert("Hello");
}

function sayHelloWithName(name) {
  alert(`Hello ${name}`);
}

sayHello();
sayHelloWithName("Paul");

task3Element.addEventListener("click", sayHello);

function concat3Strings(str1, str2, str3) {
  alert(`${str1}${str2}${str3}`);
}

concat3Strings("Paul", "Jukman", "learns");
