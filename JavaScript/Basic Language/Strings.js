let firstName = "Tony";
let lastName = 'Stark';
console.log(firstName);

let char = 'a';
console.log(typeof (char)); // string
let emp = ""; // empty strings

let str = "I 'love' food";
console.log(str); // string

str = 'I "Love" food';
console.log(str); // string

let name = "Tony stark";
console.log(name[5]);
console.log(name[1000]); // undefine
console.log(name.length);
console.log("Mahbub".length); /// interesting

// concatenation of strings
let fullName = firstName + " " + lastName;
console.log(fullName);

let jana = "Tasnuva";
console.log(jana + 29); // string + number = string

// undefine -> javaScript does'nt know the value
// null -> absence of value

let tamanna;
console.log(tamanna); // undefine

let mahbub = null;
console.log(mahbub); // null
