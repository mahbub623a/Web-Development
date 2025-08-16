const student = {
   name: "Mahbub",
   age: 23,
   eng: 90,
   math: 100,
   phy: 95,
   getAvg() {
      console.log((this.eng + this.math + this.phy) / 3); // without this keyword we can not access math, phy, eng
   },
};
student.getAvg();

// try Catch
console.log("Hello");
try {
   console.log(a);
} catch {
   console.log("Found and error");
}
console.log("I'm Mahbub");

let a = 10;
try {
   console.log(a / 0);
} catch (e) {
   console.log(e); // infinity
}