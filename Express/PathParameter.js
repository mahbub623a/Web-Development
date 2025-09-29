const express = require("express")
const app = express(); // express is a function. it return a object

let port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`); 
});

app.get("/", (req, res) => {
    res.send("This is root path");
})

// path parameter -> instead of doing routing for every single path we can use a variable(parameter)
app.get("/:name", (req, res) => {
    console.log(req.params); // req.params -> this store the parameters
    res.send(`welcome ${req.params.name}`);
});

// we can rout more than one variable
app.get("/:name/:id", (req, res) => {
    console.log(req.params); 
    let { name, id } = req.params;
    res.send(`welcome ${name} your id is ${id}`);
});
