// Arrow function
const hello = () => {
   console.log("Hello! Mahbub");
};
hello();

const sum = (a, b) => {
   console.log(a + b);
};
sum(10, 10);

// implicit return
const mult = (c, d) => c * d; // return automatic
let value = mult(10, 8);
console.log(value);

// time out -> execute something after given time
console.log("Hi!, there");
setTimeout(() => {
   console.log("Mahbub... ");
}, 4000); // time in mile second
console.log("Welcome");

// interval -> execute something continually withing given time
setInterval(() => {
   console.log("I'm Mahbub");
}, 2000);

let id = setInterval(() => {
   // each setInterval hav an id
   console.log("I'm Mahbub");
}, 2000);

clearInterval(id); // we can stop execution of setInterval

// this keyword with arrow function -> checkout video again
const student = {
   name: "Mahbub",
   marks: 97,
   prop: this, // global scope = window object

   getname: function () {
      console.log(this); // calling object scope = student object
      console.log(this.name);
   },

   getMarks: () => {
      console.log(this); // parent's scope(student) = window
      console.log(this.marks); // undefine = because window object has no marks property
   },

   getInfo: function () {
      setTimeout(() => {
         console.log(this); // student
      }, 2000);
   },
   getInfo2: function () {
      setTimeout(function () {
         console.log(this); // window (setTimeout is a window's object)
      }, 2000);
   },
};
