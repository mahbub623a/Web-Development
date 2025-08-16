// push -> add element to the last
let cars = ["audi", "BMW", "XUV", "Lamborghini"];
cars.push("Supra");
console.log(cars);

// Pop -> remove element form last and return that element
cars.pop();
console.log(cars);

// unshift -> add element to the front
cars.unshift("Lamborghini");
console.log(cars);

// shift -> remove element from front and return that element
cars.shift();
console.log(cars);

// indexof -> return the index element
console.log(cars.indexOf("BMW")); // If don't find it return -1

// include -> find the value from array and return true else false
let find = cars.includes("toyota");
console.log(find);

// concatenation
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "Violate"];

let con = primary.concat(secondary);
console.log(con);

// reverse -> it reverse the original array
let rev = primary.reverse();
console.log(rev);

// array slice
console.log(con.slice); // give full array
console.log(con.slice(2)); // form zero index to Given index
console.log(con.slice(2, 3)); // first and last index - 1
console.log(con.slice(-2)); // length - 2

// splice method -> remove/replace/add elements. it returns the element, It also change the original array
// splice(start index, deleteCount, items0...itemsN);

let sp = ["audi", "BMW", "XUV", "Lamborghini"];
let del = sp.splice(2); // remove element form index 2 to end
console.log(del);
console.log(sp);

del = sp.splice(0, 2); // start from 0 index and delete 2 element
console.log(del);
console.log(sp);

let add = sp.splice(1, 0, "SUV", "ferrari"); // add element to the 1 index and delete nothing
console.log(sp);

sp.splice(4, 1, "toyota"); // replace the 5th element from the array
console.log(sp);

// sort array -> it works with only strings, it does'nt sort number correctly
let char = ["a", "d", "b", "c", "e"];
char.sort();
console.log(char);

let num = [100, 42, 76, 89];
num.sort(); // it gives wrong value
console.log(num);

// nested array
let nest = [[2, 3], [4, 5], [6, 7], [8, 9]];
console.log(nest[1][0]);
