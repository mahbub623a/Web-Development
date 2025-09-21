const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

// send code to the different file
// module.exports send data as object in general, but we can send data as string integer or something
module.exports = "123"; // as string

// as object
let obj = {
    sum: sum,
    mul: mul,
    g: g,
    PI: PI
}
module.exports = obj;

// others way of writing
// 1
module.exports = {
    sum: sum,
    mul: mul,
    g: g,
    PI: PI
}

// 2
module.exports.div = (a, b) => a / b;
module.exports.mul3 = (a, b, c) => a * b * c;

// not recommended
// 3 -> this usually works when no other method are present. javascript treats it as a normal variable
exports.mod = (a, b) => a % b;

