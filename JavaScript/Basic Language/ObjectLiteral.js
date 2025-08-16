// Object literals -> used to store keyed collection & complex entity, all keys of object are string, we can use keyword as keys also
let student = {
   name: "Mahbub",
   age: 23,
   marks: 94.4,
   city: "Delhi",
   true: 10, // bool data type
};
console.log(student); // print value

const items = { // another way to initialize
   price: 100,
   discount: 10,
   colors: ["red", "pink"],
};

// print value
console.log(items["discount"]); // 10
console.log(items.price); // 100

// update value
student.city = "Mumbai";
console.log(student.city);

// add value
student.gender = "Male";
console.log(student);

// we can update data type too
student.marks = "A"; // marks = "A"

// delete -> it returns boolean values
let del = delete student.gender;
if (del) console.log(student);

// object of object
const classInfo = {
   mahbub: {
      grade: "A",
      city: "Pabna",
   },
   tamanna: {
      grade: "A+",
      city: "pabna",
   },
   tasnuva: {
      grade: "A+",
      city: "Dhaka",
   },
};
console.log(classInfo);
console.log(classInfo.mahbub);
console.log(classInfo.tamanna.grade);

// array of object
const player = [
   {
      name: "Ronaldo",
      dor: 5,
      club: "all-Nasser",
   },
   {
      name: "Messi",
      dor: 8,
      club: "inter miami",
   },
   {
      name: "Ronaldo R9",
      dor: 2,
      club: "Retied",
   },
];
console.log(player);
console.log(player[0].dor);
