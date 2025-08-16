// Submit event -> detect submit
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
   alert("Form was submitted");
   event.preventDefault(); // we can prevent any default behavior of any element. we stopped to go action page
});

//  getting data from form
let frm = document.querySelector(".form");
frm.addEventListener("submit", function (event) {
   let inp = document.querySelector(".input");
   let pas = document.querySelector(".pass");

   let val = inp.value;
   let p = pas.value;
   console.log(val, p);

   alert(`Hi! ${val}. your password is ${p}`);

   // we can also use another method called elements
   console.log(this.elements); // it will show all element in the form as collection

   val = this.elements[0]; // frm.elements[0]
   p = this.elements[1];

   console.log(val.value, p.value);

   event.preventDefault();
});
