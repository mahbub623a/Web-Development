// Question 1
let arr = [2, 3, 4, 5];
let square = arr.map((value) => value * value);
console.log(square);

let sum = square.reduce((value, el) => value + el);
console.log(sum / square.length);

// Question 2
let newArr = arr.map((value) => value + 5);
console.log(newArr);

// Question 3
let name = ["mahbub", "tamanna", "tasnuva"];
let upper = name.map((value) => value.toUpperCase());
console.log(upper);

// Question 4
const doubleReturn =  (arr, ...args) => [
   ...arr,
   ...args.map((value) => value * 2),
];
console.log(doubleReturn([1, 2], 10, 20));

// Question 5
function mergeObject(obj1, obj2) {
   return { ...obj1, ...obj2 };
}
console.log(mergeObject({ 1: "a", 2: "b" }, { 3: "c", 4: "d" }));
