// process: This object provides information about, and control over, the current Node.js process.
console.log(process);

// process.argv : returns an array containing the command-line arguments passed when the Node.js process was launched. we can send multiple arguments when we run a specific file
let p = process.argv;
console.log(p);

// we can pass a lot of argument in process.argv
let arg = process.argv;
for (let i = 2; i < arg.length; ++i) {
    console.log("Hello to", arg[i]);
} 
// run this file using cmd (node Process.js Mahbub Riana Jana Tamanna)