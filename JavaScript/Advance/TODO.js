let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
   // console.log(("button was click"));
   let item = document.createElement("li");
   item.innerText = inp.value;

   let delBtn = document.createElement("button");
   delBtn.innerText = "x";
   delBtn.classList.add("delete");

   item.appendChild(delBtn);
   ul.appendChild(item);
   inp.value = "";
});

let delBtn = document.querySelectorAll(".delete");
for (del of delBtn) {
   del.addEventListener("click", function () {
      console.log("deleted");
      let par = this.parentElement; // this means specific button where we pressed
      par.remove();
   });
}

// event listener don't work for newly created element using javascript. It works only in existing element
// here comes
// event delegation -> if we want any event listener for our child we can do the same event listener on his parents in this case.
// event target -> we can address for which element event listener was triggered. and nodeName address it's name

ul.addEventListener("click", function (e) {
   console.log(e.target.nodeName);
   if (e.target.nodeName == "BUTTON") {
      let del = e.target.parentElement;
      del.remove();
   }
});