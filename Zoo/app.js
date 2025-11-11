const express = require("express");
const app = express();

let port = 3000;
app.listen(port, () => {
    console.log(`Zoo app is listening on port ${port}`);
});
app.set("view engine", "ejs");

app.get("/ig/:user", (req, res) => {
    let { user } = req.params;
    console.log(user);

    let followers = ["Tasnuva", "OTC", "Tasin"];
    res.render("profile.ejs", { user, followers });
});