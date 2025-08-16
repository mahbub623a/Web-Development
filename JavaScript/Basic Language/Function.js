function hello() {
   console.log("Hello!");
   console.log("I'm Mahbub");
}

function print1to5() {
   for (let i = 1; i <= 5; i++) {
      console.log(i);
   }
}

hello();
print1to5();

// function with argument
function printInfo(name, age) {
   console.log(`Your name is ${name} and you are ${age} years old`);
}
printInfo("Mahbub", 23);
printInfo("Tamanna", 12);

// return
function sum(a, b) {
   return a + b;
}
let Sum = sum(10, 18);
console.log(Sum);

// function expression -> we store function in a variable
let sumNum = function (a, b) {
   return a + b;
};
console.log(sumNum(7, 8));

let hi = function () {
   console.log("Hi, I'm Mahbub");
};
hi();

// High order function -> takes one or multiple function as argument, and returns
let greet = function () {
   console.log("Hello");
};

function multipleGreet(greet, n) {
   for (let i = 1; i <= n; i++) {
      greet();
   }
}
multipleGreet(greet, 5);

function oddEven(request) {
   // function return
   if (request == "odd") {
      let odd = function (n) {
         console.log(n % 2 == 1);
      };
      return odd;
   } else if (request == "even") {
      let even = function (n) {
         console.log(n % 2 == 0);
      };
      return even;
   }
}

let res = oddEven("even");
res(10);

// Method -> function that can be perform on an object
const calculator = {
   add: function (a, b) {
      return a + b;
   },
   sub: function (a, b) {
      return a - b;
   },
   mult: function (a, b) {
      return a * b;
   },
   // another way
   pow(a, b) {
      return a ** b;
   },
};
console.log(calculator.add(30, 10));
console.log(calculator.pow(2, 5));
