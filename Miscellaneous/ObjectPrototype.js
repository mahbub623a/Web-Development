// OOPS -> Use to optimize memory and increase usability of code. It gives us blueprint to create same type fo code.

// Object prototype -> Prototypes are the mechanism by which JavaScript objects inherit features from one another. It is like a single template object that all objects inherit methods and properties from without having their own copy.
// ** Every object in JavaScript has a built-in property, which is called its prototype.

/*
    GPT Response:
    Every JavaScript object has a hidden link to another object called its prototype.

    That prototype object acts like a blueprint — it defines shared methods and properties that the original object can "inherit". It's not a actual property of that(our created) object. It reduce memory load instead of creating each functionality for individual object. it just inherit.
 
    reminder: array is a object in javascript
 */

// we can assign a function or anything in any object(here in array)
let arr = [1, 2, 3];
arr.sayHello = () => {
    console.log("Hello world");
};
arr.name = "I'm array";

console.log(arr.name); // I'm array
arr.sayHello(); // Hello world
console.log(arr); // we can use this name and sayHello function using this array object. This is not the part of the actual array. My actual array is still the 1, 2, 3. but name & sayHello will add as key-value pair in array object.


// The built in function like length, push, pop or etc we are using, it comes from prototype object. It's not the property of each individual object we create.

// if we create one more array like arr2 = [4, 5, 6]. we wil not have the name & sayHello property in it.
// If we need some modification or we want to add(like name & sayHello) some property for each object, we can add this to the "prototype" object. Our created object will inherit this.

// we can access prototype in many way
// 1. by reference -> Only the objet we have crated (here arr). It will work for only created object
console.log(arr.__proto__);

// modification in build-in function
arr.__proto__.push = (n) => {
    console.log("You want to push the value:", n); // actual push function will be modified
}
arr.push(10); // You want to push the value: 10

// 2. We can access the actual object of prototype. we have to change in datatype
// changing array prototype
console.log(Array.prototype);

// modification
Array.prototype.pop = () => {
    console.log("Vag vosdike");
}
let mah = [10, 20, 30];
mah.pop(); // vag vosdike.(it will not remove the array element)
arr.pop(); // vag vosdike

// adding new property
Array.prototype.roman = "Acknowledge me!";
console.log(arr.roman);


// changing string prototype
console.log(String.prototype);
String.prototype.toUpperCase = () => {
    console.log("Fuck off bra");
}
"Mahbub".toUpperCase();
