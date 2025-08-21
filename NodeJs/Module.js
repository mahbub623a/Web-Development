// module.exports -> used to export to different js file. Its  a special object
// require() -> a built-in function to include external modules that exist in separate files.

let value = require("./math");
console.log(value); 
console.log(value.sum(10, 20), value.PI);

// Access information from a directory
// we will need a index.js(name fix) file in that directory who will need(require) the others file information combined and send to the calling file
let info = require("./Fruits"); // directory info
console.log(info);
console.log(info[0]);
console.log(info[0].name);