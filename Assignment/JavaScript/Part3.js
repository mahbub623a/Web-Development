// Question 1
let n = 3;
let arr = [7, 9, 0, -2];
let first = arr.slice(0, n);
console.log(first);

// Question 2
let last = arr.slice(arr.length - 3);
console.log(last);

// Question 3
let str = "Hello, I'm cristiano Ronaldo";
if (str) {
   console.log("String is not empty");
} else {
   console.log("String is empty");
}

// Question 4
let idx = 3;
if (str[idx] === str[idx].toLowerCase()) {
   console.log("Yes");
} else {
   console.log("NO");
}

// Question 5
let space = "         Mahbub         ";
space = space.trim();
console.log(space);

let names = ["Mahbub", "Tamanna", "Tasnuva"];
if (names.includes("Bob") === true) {
   console.log("Exist");
} else {
   console.log("Does'nt exist");
}
