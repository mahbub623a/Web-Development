const express = require("express");
const app = express();
// we don't require ejs bcz it automatically comes with express

const port = 8080;
app.listen(port, () => {
    console.log(`listing on port:${port}`);
});

// app.set -> it set the view engine to the ejs
// view engine -> its basically template engine that use to create, render, or show the template. and we are setting this engine as "ejs".
app.set("view engine", "ejs");


// in ejs we don't send the response, we render the response. render: sending the file(template)
// we create "ejs" template. E.g -> home.ejs : we write html + javascript in ejs file

// our "view engine" will search for template in views folder by default.
// if we run server from deferent directory our view engine can not find the views folder so we have to set the path for this
const path = require("path");
app.set("views", path.join(__dirname, "/views"));
// __dirname -> the directory path from where we run the index.js file(server);

// sending file using ejs
app.get("/", (req, res) => {
    res.render("home.ejs");
})