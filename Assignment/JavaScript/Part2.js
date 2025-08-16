// Question 1
let num = 100;
if (num % 100 === 0)
    console.log("Good");
else
    console.log("Bad");

// Question 2
// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// alert(`${name} is ${age} years old`);

// Question 3
let month = 2;
switch (month) {
    case 1:
        console.log("January, February, March, April");
        break;
    case 2:
        console.log("May, June, July, August");
        break;
    case 3:
        console.log("September, October, November,December")
}

// Question 4
let str = "assignment";
if ((str[0] === 'A' || str[0] === 'a') && str.length > 5) {
    console.log("Golden String");
}
else {
    console.log("Not a golden string");
}

// Question 5
let a = 10, b = 30, c = 40;
if (a >= b && a >= c)
    console.log("A is greater");
else if (b >= a && b >= c)
    console.log("B is greater");
else 
    console.log("C is greater");

// Question 6
let num1 = 33;
let num2 = 445223;

if ((num1 % 10)==(num2 % 10))
    console.log("Same", num1%10);
else
    console.log("Not same");