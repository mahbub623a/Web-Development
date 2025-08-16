// And operator -> both condition should be true
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(3 > 1 && 5 > 3); // true

// or operator -> any of two have to true for get true
console.log(true || false); // true
console.log(false || false); // false

// not -> it reverse the result
console.log(!true); // false
console.log(!false); // true

let marks = 23;
if ((marks > 45 && marks < 80) || !false) {
    console.log("pass");
}


