// Question 1
// mouseout => when mouse goes out from element
let msOut = document.querySelector(".mouseOut");
msOut.addEventListener("mouseout", function () {
   console.log("your mouse is out");
});

// keypress => The keypress event is fired when a key that produces a character value is pressed down.

let kp = document.querySelector(".keyPress");
kp.addEventListener("keypress", function (event) {
   console.log(event.key);
});

// scroll -> when scrolling is detected
window.addEventListener("scroll", function () {
   console.log("You scrolled");
});

// Question 2
let btn = document.createElement("button");
btn.innerText = "click to change color";
kp.insertAdjacentElement("afterend", btn);

btn.addEventListener("click", function () {
   btn.style.backgroundColor = "green";
});

// Question 3
let name = document.querySelector(".name");
let h2 = document.querySelector("h2");

name.addEventListener("keypress", function (e) {
   h2.innerText += e.key;
});
