// import -> we can use pre-writing code from different file using import. that is much memory efficient then require bcz we don't import all the file information.
import { sum, PI } from "./math.js";

// but before we use this we need a package.json file in which directory we want to use import. and in package.json file we need to add "type": "module"

console.log(sum(10, 20));
console.log(PI);


// we can also import packages. (need to install first)
import { generate } from "random-words";
console.log(generate());