// array are mutable -> it can change

let student = ["Mahbub", "Tamanna", "Tasnuva"];
console.log(student);
console.log(student.length); 
console.log(typeof (student)); // object

let info = ["Mahbub", 90, 3.88];
let empty = []; // empty array

let arr = ["Mahbub", "Hello", "Jana"];
arr[10] = "Tamanna"; // its valid although arr size is 3
console.log(arr);