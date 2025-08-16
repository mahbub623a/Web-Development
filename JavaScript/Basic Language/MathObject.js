console.log(Math);

// Pie value
console.log(Math.PI);

// E Constant
console.log(Math.E);
// absolute value
console.log(Math.abs(-3));

// power
console.log(Math.pow(2, 2));

// floor number
console.log(Math.floor(3.88));

// ceil
console.log(Math.ceil(2.78));

// random number
console.log(Math.random());

// generate random integer
let num = Math.random();
num = num * 10; // generate random from 0 to 9
num = Math.floor(num);
num += 1; // random does'nt pick 10, so we got 1 to 10 number
console.log(num);

// generate number from 20 to 25
let s = Math.floor(Math.random() * 5) + 21;
console.log(s);