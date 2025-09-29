// This will act like server
// we need to require express like other packages

const express = require("express")
const app = express(); // express is a function. it return a object
// console.dir(app);

// port -> Ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.

// listen() -> wait for incoming request and create prot for communication
let port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`); // type localhost:3000 in browser to see the sever is working or not
});

// use() -> it will listen all type of request (eg: GET, POST, PUT, etc) and send response
// http request is text based request. express perse this into object
app.use((req, res) => {
    console.log("Request received");
    console.log(req); // getting request

    // sending response -> we can send any type of response : string, array, object, html etc
    res.send("This is a basic response"); // string

    // object
    res.send({
        name: "apple",
        color: "red",
        origin: "bangladesh"
    });

    // html
    res.send("<h1> Fruits </h1> <ul> <li>apple</li><li>Banana</li> </ul>");
        
});


// Nodemon -> To automatically restart server with code changes
// Best practice -> we have to install it globally
// install -> npm install -g nodemon
// use -> instead of running server using node index.js use nodemon index.js

