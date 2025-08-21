const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.1416;

// module.exports -> used to export to different js file. Its  a special object
// we are sending information to the other file

// module.exports = "Hello"; // we can send anything we want
module.exports = { // we send information using object
    sum: sum,
    mul: mul,
    g: g,
    PI: PI
};

// another way to send information
module.exports.div = (a, b) => a / b;