// call back -> we use callback for show dependency. If first things happen then the second things should execute
// call back hell -> The writing of the code of callback is so complex like hell.

let h1 = document.querySelector("h1");
function changeColor(color, delay, nextColor) {
   setTimeout(() => {
      h1.style.color = color;
      if (nextColor) nextColor();
   }, delay);
}

// here we are changing the color if the previous color has been changed
changeColor("red", 1000, () => {
   changeColor("orange", 1000, () => {
      changeColor("blue", 1000, () => {
         changeColor("teal", 1000);
      });
   });
});

// another example
function saveToDB(data, success, failure) {
   let internetSpeed = Math.floor(Math.random() * 10) + 1;
   if (internetSpeed > 4) {
      success();
   } else {
      failure();
   }
}

saveToDB(
   "Apna collage",
   () => {
      console.log("Success: Your data was saved");
      saveToDB(
         "Hello world",
         () => {
            console.log("Success 2: Data two saved");
         },
         () => {
            console.log("Failure 2: week connection");
         }
      );
   },
   () => {
      console.log("Failure: Week connection: Data not save");
   }
);
