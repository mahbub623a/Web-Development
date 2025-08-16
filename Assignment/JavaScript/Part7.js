// Question 1
const arrayAverage = (arr) => {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   return sum / arr.length;
};
let ans = arrayAverage([20, 10, 5]);
console.log(ans);

// Question 2
const isEven = (num) => num % 2 == 0;
console.log(isEven(9));

// Question 3
const object = {
   message: "Hello world!",

   logMessage() {
      console.log(this.message);
   },
};
setTimeout(object.logMessage, 1000);
