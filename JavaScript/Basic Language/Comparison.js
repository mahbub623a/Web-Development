let age = 18;
console.log(age > 18); // false
console.log(age >= 18); // true

console.log(age < 18); // false
console.log(age <= 18); // true

console.log(age == 18); // true
console.log(age != 18); // false

// In comparison javaScript convert string to number  if it possible 
console.log(5 == '5'); // true -> converted to number
console.log(5 == '5a'); // false -> can't converted to number
console.log(0 == ''); // true


// strict comparison -> we use triple(===) equal
console.log(5 === '5'); // false
console.log(555 === '555'); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// Non-number comparison -> It compar unicode
// A == 0041, a = 0061
console.log('a' > 'A'); // true
console.log('a' > 'b'); // false


