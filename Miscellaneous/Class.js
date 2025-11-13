// Classes are a template for creating objects
// The constructor method is a special method of a class for creating and initializing an object instance of that class.
// This is the easy way of writing constructor function's property
// we don't need to create prototype separately. It will create automatically in class
class Person {
    constructor(name, age) {
        this.type = "human"; // we can add default property in constructor
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log("Hey, My name is", this.name);
    }
}

let p1 = new Person("Mahbub", 25);
let p2 = new Person("Jana", 14);
p1.talk();


// Inheritance -> Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age); // we inherit name and age from parent class 
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); // we inherit name and age from parent class 
        this.subject = subject;
    }

    // function overriding
    talk() {
        console.log("Hello, I am Professor", this.name);
    }
}

let s1 = new Student("Tasnuva", 14, 90);
let s2 = new Student("Tamanna", 15, 95);
console.log(s1.type);
s1.talk();

let t1 = new Teacher("Mahbubur Rahman", 40, "Math");
console.log(t1.subject);
t1.talk();