// Question 1
let number = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 3;

for (let i = 0; i < number.length; i++) {
   if (number[i] == num) {
      number.splice(i, 1);
   }
}

for (const value of number) {
   console.log(value);
}
console.log();

// Question 2,3
let nums = 287152,
   cnt = 0,
   sum = 0;
while (nums > 0) {
   cnt++;
   sum += nums % 10;
   nums = Math.floor(nums / 10);
}
console.log(cnt);
console.log(sum);

// Question 4
let fact = 1,
   f = 5;
for (let i = 1; i <= f; i++) {
   fact *= i;
}
console.log(fact);

// Question 5
let arr = [1, 43, 4, 1, 1, 55, 2];
let largest = 0;

for (let i = 0; i < arr.length; i++){
    if (largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);