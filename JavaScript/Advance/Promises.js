// Promises -> It is a object, return completion or failure of resulting value. we solve callback hell complexity using promises.
// - resolve -> Success
// - reject -> failure

function saveToDB(data) {
   return new Promise((resolve, reject) => { // first argument is success, 2nd one is failure
      let intSpeed = Math.floor(Math.random() * 10) + 1;
      if (intSpeed > 4) {
         resolve("Success: Data was saved");
      } else {
         reject("Failure: Data was not saved");
      }
   });
}

// saveToDB("apna collage"); // write this in consol to see promise object

// Promise has some state
// 1. Pending -> we don't know promise was successful or not
// 2. Fulfilled -> Promise was success
// 3. Rejected -> Promise was failed(Error)


// Promise method ->
// - then -> if promises success perform "then" method
// - catch -> if promises failed perform "catch" method

let req = saveToDB("apna collage");

req.then(() => {
   console.log("promise was resolved");
}).catch(() => {
   console.log("promise was rejected");
});

// Promise chaining -> do after done
// Use like callback hell
saveToDB("Apna college")
   .then(() => {
      console.log("Promise resolve 1");
      saveToDB("Hello world").then(() => {
         console.log("Promise resolve 2");
      });
   })
   .catch(() => {
      console.log("Promise rejected");
   });

//  another way to write the same thing -> *preferable
saveToDB("Apna college")
   .then((result) => {
      console.log("Promise resolve 1");
      console.log("Result:", result);
      return saveToDB("Hello world");
   })
   .then((result) => {
      console.log("Promise resolve 2");
      console.log("Result:", result);
      return saveToDB("Hello world");
   })
   .then((result) => {
      console.log("Promise resolve 3");
      console.log("Result:", result);
   })
   .catch((err) => {
      console.log("Promise rejected");
      console.log("Result:", err);
   });
