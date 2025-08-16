// string method -> javaScript's string are immutable, we can not change the original string by applying string method. it create a new string when we apply any strings method rules

// trim -> remove space form string form both side
let name = "     Mahbub     ";
console.log(name);
name = name.trim();
console.log(name); // Mahbub

// toUpper, toLower -> we know
let str = "HeLLo I'm Mahbub"; 
str = str.toUpperCase();
console.log(str);
str = str.toLowerCase()
console.log(str);

// indexof -> Take a substring or character and return the index of first later, if does'nt exist return -1
let sen = "ILoveCoding";
console.log(sen.indexOf("Love")); // 1
console.log(sen.indexOf("P")); // -1

// Method chaining-> using more then one method at once
let msg = "    Hello    ";
let chain = msg.trim().toUpperCase();
console.log(chain);

// slice 
let slice = sen.slice(1, 5);
console.log(slice); // Love

slice = sen.slice(5); // Coding
console.log(slice); 

slice = sen.slice(-6) // length - position
console.log(slice);

// replace
rep = sen.replace("Love", "Do");
console.log(rep);

//repeat
let x = "Move";
let rpt = x.repeat(3);
console.log(rpt);

// string to number
let y = "5";
let n = parseInt(y) + 1;
console.log(n);

// number to string
let num = 10;
let strNum = num.toString();
console.log(strNum);