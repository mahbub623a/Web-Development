// ---- linked with index.html file ----

// Get request -> used to GET some response. Usually when we want some response in return.
// we send additional data using query string in get request.
// But this data is limited, string data & visible in URL.


// Post request -> used to POST something (for Create/Write/Update). We want to store something in DB.
// we send data using request body (see https://hoppscotch.io/)
// we can send any type of data and we have no limit

const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`listening in port ${port}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// accepting GET request
app.get("/register", (req, res) => {
    // res.send("Standard GET response");
    // access data -> we get data as query string
    let { user, pass } = req.query;
    res.send(`Welcome ${user}. Your password is ${pass}`);
});

// accepting POST request
app.post("/register", (req, res) => {
    // res.send("Standard POST response");
    // access data -> we get data as request body.

    // we get data in req.body
    console.log(req.body); // this will give us undefine. We have to perse this data
    // If we get data as urlencoded formate then we have to use "app.use(express.urlencoded({ extended: true }));" see line number 20
    // if we get data as json formate we have to use "app.use(express.json());" see line number 21
    
    let { user, pass } = req.body; // we get data ase json formate
    res.send(`Welcome ${user}. Your password is ${pass}`);

});
