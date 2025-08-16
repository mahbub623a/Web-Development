// Destructuring -> storing value of array into multiple variables
let name = ["Mahbub", "Tamanna", "Tasnuva", "Riana"];
let [winner, runnerUp] = name;
console.log(winner, runnerUp);

let [win, run, ...others] = name;
console.log(win, run, others);

// object destructuring
const student = {
   name: "Mahbub",
   age: 23,
   class: 9,
   subject: ["Bangla", "English", "Statistics"],
   username: "mahbub623a",
   password: 1234,
   city: "Pabna",
};

let { username, password } = student; // we can grab exact variable
console.log(username, password);

let { username: user, password: pass } = student; // store to the other variable
console.log(user, pass);

// we can insert/update value what is not in object
let { username: u, password: p, city = "Dhaka" } = student;
console.log(u, p, city);
