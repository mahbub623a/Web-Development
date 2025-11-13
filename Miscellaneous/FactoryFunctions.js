// Factory Functions -> A function that creates object
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log("Hi my name is", this.name);
        }
    }
    return person;
}

let p1 = PersonMaker("Mahbub", 25);
console.log(p1);
p1.talk();

let p2 = PersonMaker("Tasnuva", 14);
console.log(p2);
p2.talk();

// But here we have disadvantage that each function create a new copy of object's property. p1.talk() not equal to p2.talk(). which is not memory efficient.

// New operator is better than factory function which is used in constructor function. This does not create individual copy.
// constructor function -  constructor function does not return anything
// The new operator lets developers create an instance(object) of a user-defined object type or of one of the built-in object types that has a constructor function.

function Person(name, age) {
    this.name = name,
        this.age = age
}

Person.prototype.talk = () => {
    console.log("Hi my name is", this.name);
}

let p3 = new Person("Tamanna", 14);
let p4 = new Person("Jana", 14);
console.log(p3, p4);
p3.talk();

/*
Properties of new keyword
1. Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.
2. Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].
3. Executes the constructor function with the given arguments, binding newInstance as the "this" context (i.e., all references to "this" in the constructor function now refer to newInstance).
*/