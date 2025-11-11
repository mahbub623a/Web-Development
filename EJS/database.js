const express = require("express");
const app = express();

const port = 8080;
app.listen(port, () => {
    console.log(`listing on port:${port}`);
});


// we will get data from database in json file.
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    
    // to access data we have to require the data file
    const instData = require("./data.json");
    const data = instData[username];
    if (data) res.render("clone.ejs", { data });
    else res.send("<h1> No account found </h1>");
});

// use of sub-template, see clone.ejs pages