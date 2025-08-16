// for each -> do a functionality for each element of the array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(function (value) {
   if (value % 2 == 0) console.log(value);
});
arr.forEach((value) => {
   console.log(value);
});
console.log();

// map -> do exactly the same as for each but it return the functionality result as array
let store = arr.map((value) => {
   return value * 2;
});
console.log(store);

// filter -> filter the value base on given condition and return value
let odd = arr.filter((value) => {
   return value % 2 == 1;
});
console.log(odd);

// every -> Return true if every element of the array gives true for some condition else return false
let res = arr.every((el) => el % 2 == 0);
console.log(res);

// some -> return if any of element gives true for condition
let sm = arr.some((value) => {
   return value % 2 == 0;
});
console.log(sm);

// Reduce method -> reduce the array to a single value base on condition
let sum = arr.reduce((res, el) => { // res always store the first value of arr
   return res + el;
}); // sum
console.log(sum);

// finding max value of an array using reduce function
let max = arr.reduce((res, el) => { 
   if (res < el) return el;
   else return res;
});
console.log(max);

// default parameter -> we have to use default value from end to start
function total(a, b = 6) {
   console.log(a + b);
}
total(1); // 7
total(5, 7); // 12

// spread -> expand an iterable into multiple value
let num = [-10, 45, 1, 2, 54];
console.log(Math.min(...num)); // -10

console.log(..."Mahbub"); // print individual
let copyNum = [...num]; // make a copy of num

let oddNum = [1, 3, 5];
let evenNum = [2, 4, 6];

let allNum = [...oddNum, ...evenNum];
console.log(allNum);

let data = {
   email: "mahbub623a@gmail.com",
   name: "Mahbub",
};

let copyData = { ...data, id: 441 };
console.log(copyData);

// we can copy a array to an object key will be default 0 to n - 1
let objCopy = { ...num };
console.log(objCopy);

// rest -> alow a function to take an infinite number of arguments
function findSum(...value) {
   return value.reduce((add, el) => add + el); // taking sum
}
console.log(findSum(1, 2, 3, 4, 5));

function minimum(msg, ...args) {
   console.log(msg);
   let min = args.reduce((min, el) => {
      if (min < el) {
         return min;
      } else {
         return el;
      }
   });
   console.log(min);
}

minimum("Min value", 1, 2, 3, -4, 4);
