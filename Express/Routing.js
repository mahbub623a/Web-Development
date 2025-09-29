const express = require("express")
const app = express(); // express is a function. it return a object

let port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`); 
});

// Routing -> it is process of selecting a path for traffic in a network or between or across multiple networks.
// when we are sending request we can specify the exact path instead of whole network. we can send different request to different path.
// app.use can'nt differentiate the route it send request to the whole network. 

// we need app.get but it handles only GET request
app.get("/", (req, res) => {
    res.send("You contacted with root path");
})
app.get("/apple", (req, res) => {
    res.send("You contacted with apple path");
})
app.get("/orange", (req, res) => {
    res.send("You contacted with orange path");
})

// we can also use app.post to handel post request
app.post("/", (req, res) => {
    res.send("hey, you send a post request to the root");
})
app.post("/home", (req, res) => {
    res.send("This is your home page");
})


// if someone send wrong path request we can handel this using wildcard(*) path. must be the last middleware
app.get(/.*/, (req, res) => {
    res.status(404).send("Your path doesn't exist");
});

// more better way
// 404 handler – must be the last middleware
app.use((req, res) => {
    res.status(404).send("Your path doesn't exist");
});