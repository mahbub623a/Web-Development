const express = require("express");
const app = express();

const port = 8080;
app.listen(port, () => {
    console.log(`listing on port:${port}`);
});

// Interpolation -> Interpolation refers to embedding expressions into marked up text(inside html).
// We embed expression in html code. We can embed the javascript and its logic.
// using ejs we make our html code dynamic. we can change value in template based on our need. 
// To achieve interpolation syntax we refers ejs tags : https://ejs.co/#license
// Tag: <%= %> -> outputs the value into the template. output of this tag will be the html strings. see home2.ejs

// basically using ejs interpolation we can write our javascript in our template according to different scenario. like different user will have different information into their profile but profile template will be the same.

app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("home2.ejs");
});

// passing data to the template : assume we got data from database
app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    // res.render("rolldice.ejs", {num:diceValue}); // we send a object(key value pair) to the ejs file
    res.render("rolldice.ejs", { diceValue }); // we an also send the single variable
})

// activity
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    console.log(username);
    res.render("instagram.ejs", { username });
    
    // for loops example
    let followers = ["Mahbub", "Tamanna", "Taj", "Jana", "Jane"];
    res.render("instagram.ejs", { username, followers });

});

// conditional statements in ejs : see rolldice.ejs pages
// loops statements in ejs : see instagram.ejs
