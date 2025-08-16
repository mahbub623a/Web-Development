let btn = document.querySelector("button");

btn.addEventListener("click", function () {
   let h3 = document.querySelector("h3");
   let div = document.querySelector("div");

   let color = generateColor();
   h3.innerText = color;

   div.style.background = color;
   console.log("Color updated");
});

function generateColor() {
   let red = Math.floor(Math.random() * 255);
   let green = Math.floor(Math.random() * 255);
   let blue = Math.floor(Math.random() * 255);

   let color = `rgb(${red}, ${green}, ${blue})`;
//    console.log(color);
   return color;
}
