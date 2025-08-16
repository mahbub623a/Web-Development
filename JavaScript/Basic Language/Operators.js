// Assignment operator
let age = 23;
age += 1;
console.log(age); // age = 24

age -= 1;
console.log(age); // age = 23

age /= 2;
age *= 2;
age %= 2;

// Unary operators
// Post increment -> use then change
let year = 2000;
year++ 
console.log(year); // 20001;

year--; 
console.log(year); // 2000;

// Pre inclement -> change then use
let month = 9;
++month;
console.log(month); // 10

--month;
console.log(month); // 9

let newMonth = month++; // newMonth = 9, month = 10;
newMonth = ++month; // newMont = 11, month = 11 
