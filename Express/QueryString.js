const express = require("express")
const app = express(); // express is a function. it return a object

let port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`); 
});

// Query strings -> https://www.google.com/search?q=apple [here q=apple is a query]
app.get("/search", (req, res) => {
    console.log(req.query); // this shows all query string we have sent
    let { q } = req.query;
    if (q) {
        res.send(`Search result for : ${q}`);
    } else {
        res.send("No query found");
    }
})