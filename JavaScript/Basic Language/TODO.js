let todo = [];
let req = prompt("Enter your request:");

while (true) {
   if (req === "quit") {
      console.log("Quitting app");
      break;
   }

   if (req === "list") {
      let i = 1;
      console.log("--------------------");
      for (const task of todo) {
         console.log(i, task);
         i++;
      }
      console.log("--------------------");
   }
   else if (req === "add") {
      let task = prompt("Please enter the task:");
      todo.push(task);
      console.log("Task added");
   }
   else if (req === 'delete') {
       let idx = prompt("Enter index to delete:");
       todo.splice(idx - 1, 1);
       console.log("Task Deleted");
    }

   req = prompt("Enter your request:");
}
