// for loops
for (let i = 1; i <= 10; i++) {
   console.log(i);
}
console.log();

// Nested loops
for (let i = 1; i <= 3; i++) {
   for (let j = 1; j <= 3; j++) {
      console.log(j);
   }
   console.log();
}

// while loop
let i = 1;
while (i <= 5) {
   console.log(i);
   i++;
}
console.log();

// break -> give a break on lop
i = 1;
while (i <= 5) {
   if (i == 3) break;
   console.log(i);
   i++;
}

// loops with array
let arr = ["Mango", "Banana", "Apple", "Pineapple"];
for (let i = 0; i < arr.length; i++) {
   console.log(i, arr[i]);
}
console.log(arr.join(" ")); // print in one line

// for of loop

for (const value of arr) {
   console.log(value);
}