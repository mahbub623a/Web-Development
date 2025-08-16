// linked with properties.html

// get element by ID -> select element using their id, if does'nt exist return null
let imgObj = document.getElementById("mainImg");
console.log(imgObj); // print tag
console.dir(imgObj); // print object

console.log(imgObj.src);
console.log(imgObj.tagName); // IMG
console.log(imgObj.id); // mainImg

imgObj.src = "Assets/Man.png"; // change the src

// get element by class -> select element using class name
let oldImg = document.getElementsByClassName("oldImage");
console.dir(oldImg); // three class available
console.log(oldImg[0].tagName);

for (let i = 0; i < oldImg.length; i++) {
   console.log(oldImg[i].src);
}

// get element by tag -> select element using tag name
let para = document.getElementsByTagName("p");
console.dir(para);
para[0].innerText = "Mahbubur Rahman, The acknowledge man";

// Query selector -> we can select element by tagname, id and class even sudo class. It will select a single element
let tag = document.querySelector('h1'); // tag name
console.dir(tag);

let id = document.querySelector('#description'); // id
console.dir(id);

let className = document.querySelector('.oldImage'); // class
console.dir(className);

let anc = document.querySelector("div a"); // select 'a' tag under 'div'
console.dir(anc);

// selecting collection of element
let ancAll = document.querySelectorAll("div a"); // select all a tag under div
console.dir(ancAll);
