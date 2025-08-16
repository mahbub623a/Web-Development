// inner text -> shows the visible text contained in display
let pera = document.querySelector("p");
pera.innerText = "Hi! I'm Mahbub The acknowledge man"; // we can change only text
console.log(pera.innerText);

// text content -> shows all the full text as same as html file including hidden part
console.log(pera.textContent);

// inner html -> shows the full markup
pera.innerHTML = "Hi! I'm <b> Mahbub </b> The acknowledge man;"; // we can manipulate inner html
console.log(pera.innerHTML);

let heading = document.querySelector("h1");
heading.innerHTML = `<u> ${heading.innerText} </u>`;

// attribute manipulating -> we can change attribute value
let img = document.querySelector("img");
let imgId = img.getAttribute("id");
console.log(imgId); // id = "mainImg"

img.setAttribute("id", "spiderMan"); // id = "spiderMan"
img.setAttribute("src", "Assets/Amazing-spiderman.jpg");

img.setAttribute("class", "images"); // we can also set a new attribute using this -> it also override the existing attribute
console.log(img);

// style manipulating -> we can change style in our page. "it is inline styling"
let hd = document.querySelector("h1");
hd.style.color = "purple";
hd.style.backgroundColor = "black";

let links = document.querySelectorAll(".box a");
for (link of links) {
   link.style.color = "green";
}

// check class list
let image = document.querySelector("img");
image.classList.add("pqr"); // add class -> it does'nt remove other class like setAttribute
image.classList.remove("pqr"); // remove class

console.log(image.classList.contains("pqr")); // check if class exist
image.classList.toggle("pqr"); // if class exist remove the class else add the class

console.dir(image.classList);

// Navigation -> we can navigate parent and children
let h4 = document.querySelector('h4');
let parent = h4.parentElement; // find parent
console.log(parent);

let children = parent.children; // find children
console.log(children);
console.log(parent.childElementCount); // count how many children they have

let ul = document.querySelector('ul');
let nxtSib = ul.children[0].nextElementSibling; // find next sibling
console.log(nxtSib);

let prevSib = ul.children[1].previousElementSibling; // find previous sibling
console.log(prevSib);


// create element to the document -> after creating an element we have to append it on html file
let newPar = document.createElement('p');
newPar.innerText = "Hello! I'm a new 'p'"; 

// append child -> we can append a element as a child of another
let box = document.querySelector(".box");
box.appendChild(newPar); // append p as a child of box class

let btn = document.createElement('button');
btn.innerText = "Click me!";
box.appendChild(btn);

// append  -> we can append some strings to a existing element's text and we also append an element to another in the last of the element
newPar.append(" Ths is a new text"); // text
newPar.append(btn); // append button to p

// prepend  -> inset first of the element
box.prepend(newPar);

// insert adjacent -> we can insert element in  our expected destination (MDN)
let pr = document.querySelector('p'); // first paragraph in index.html file

// beforeBegin -> before our target element itself
pr.insertAdjacentElement('beforebegin', btn);

// afterbegin -> beginning of our target element but inside 
pr.insertAdjacentElement('afterbegin', btn);

// beforeend -> end of our target element but inside
pr.insertAdjacentElement('beforeend', btn);

// afterend -> after our target element itself
pr.insertAdjacentElement('afterend', btn);

// remove -> we can remove something form page
box.removeChild(newPar); // we can remove as a child of another
newPar.remove(); //we an remove directly

