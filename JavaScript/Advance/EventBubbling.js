// Event Bubbling -> if we activate any child's event listener, it's parents event listener will automatically active. we can prevent it using propagation

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function (event) {
   event.stopPropagation(); // prevent bubbling
   console.log("Div was clicked");
});

ul.addEventListener("click", function (event) {
   event.stopPropagation();
   console.log("ul was clicked");
});

for (li of lis) {
   li.addEventListener("click", function (event) {
      event.stopPropagation();
      console.log("li was clicked");
   });
}
