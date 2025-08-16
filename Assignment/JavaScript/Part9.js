// Question 1
let btn = document.createElement('button');
let inp = document.createElement('input');
btn.innerText = "click me";

document.querySelector('body').append(btn);
document.querySelector('body').append(inp);

// Question 2
inp.setAttribute('placeholder', "username");
btn.setAttribute('id', 'btn');

// Question 2
let button = document.querySelector('#btn');
button.style.color = "white";
button.style.backgroundColor = 'blue';

// Question 4
let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM practice</u>";
h1.style.color = 'purple';

document.querySelector('body').append(h1);


// Question 4
let p = document.createElement('p');
p.innerHTML = "apna collage <b>delta</b> practice";
document.querySelector('body').append(p);