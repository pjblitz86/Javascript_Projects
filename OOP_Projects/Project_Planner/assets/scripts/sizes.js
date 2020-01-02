console.log(window.innerWidth);
console.log(window.innerHeight); // includes visible scrollbar
console.log(document.documentElement.clientWidth); // without scrollbar

const box = document.getElementById("main-box");
console.log(box.getBoundingClientRect()); // shows element coordinates/dimensions in pixels - they star at top left document corner

console.log(box.offsetTop); // distance from element outer to top document, basically y value
console.log(box.offsetLeft); // distance from element outer to left side, x value
console.log(box.clientTop); // inner element content top positioning
console.log(box.clientLeft); // inner element content left positioning
console.log(box.offsetHeight); // whole element height
console.log(box.offsetWidth); // whole element width
console.log(box.clientWidth); // inner element concent width
console.log(box.clientHeight); // inner element concent height
console.log(box.scrollHeight); // whole height currently not visible in the box
console.log(box.scrollTop); // how much you scrolled

// more on HTMLElement article on MDN
