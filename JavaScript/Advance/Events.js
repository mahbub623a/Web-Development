// onclick - inline events -> => check events.html file

// onclick -> when an element is clicked. one function call, at a time
let btn = document.querySelector("button");
btn.onclick = function () {
   console.log("Button was clicked");
};

function sayHello() {
   alert("Hello!");
}
btn.onclick = sayHello; // we should not use () in function call

// on mouse enter -> when mouse hover upon an element
function hover() {
   console.log("You hovered");
}
btn.onmouseenter = hover;

// event listener -> we can call multiple function at a time. (events list -> mdn)
function sayName() {
   alert("Mahbub");
}

btn.addEventListener("click", sayHello); // click -> one single click
btn.addEventListener("click", sayName);

let dbt = document.querySelector("#double"); // dblclick -> double click
dbt.addEventListener("dblclick", function () {
   console.log("you double click on it");
});

// this -> here 'this' is it's calling object itself(cz reguler function). it useful when we use same event listener for multiple element
let th = document.querySelector(".this");
th.addEventListener("click", function () {
   console.log(this); // button itself (th)
   console.log(this.innerText);
});

// there is a hidden object called event in every function call.
let ev = document.querySelector(".event");
ev.addEventListener("click", function (event) {
   console.dir(event);
});

// keydown -> when key is pressed
let inp = document.querySelector("input");
inp.addEventListener("keydown", function (event) {
   console.dir(event);
   console.log("Key is pressed");
});

// keyup -> when key is released
inp.addEventListener("keyup", function (event) {
   console.log("key is release");

   console.log(event.code); // we can access the code of what we press
   console.log(event.key); // we can access the key that we pressed
});

// change event -> when the FINAL value of an elements has been changed. works on input, textarea and select. It tracks initial and final state
let use = document.querySelector('.user');
use.addEventListener('change', function (e) {
   console.log("input changed");
   console.log("Final value:", this.value);

   e.preventDefault(); // see FromEvent page
})

// input event -> The input event fires when the value of an input, select, or textarea element has been changed. it track every single change

use = document.querySelector('.user');
use.addEventListener('input', function (e) {
   console.log("input changed");
   console.log("Final value:", this.value);

   e.preventDefault();
})