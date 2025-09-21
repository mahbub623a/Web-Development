// Export -> we can use pre-writing code from different file.

// receive code from different file, (use path of the file)
let get = require("./math")

console.log(get);
console.log(get.mod(2, 3)); 
