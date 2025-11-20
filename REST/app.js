const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // to generate unique ids
const methodOverride = require("method-override"); // to use PUT, PATCH, DELETE methods in HTML form

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); // override with POST having ?_method=DELETE or ?_method=PUT


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public"))); // used to access public folder(in public folder we create files that are need publicly)

app.listen(port, () => {
    console.log("listening to prot", port);
})

// since we have not database we can store data in array
let posts = [
    { id: uuidv4(), username: "Mahbub", content: "Hey, My name is Mahbub!" },
    { id: uuidv4(), username: "Tasnuva", content: "Acknowledge Me!" },
    { id: uuidv4(), username: "Noman", content: "I'm talented as hell :)" },
];


//                   Handling APIs                //

// see all post
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts }); // views/index.ejs
});

// add new post - will take two steps
// send the form with this APIs
app.get("/posts/new", (req, res) => {
    res.render("new.ejs"); // views/new.ejs
});

// add data to the database
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    // res.send("Post request working");

    // send.redirect - we use redirect to connect different pages or go to another API.
    // using redirect we can send response to the another API. That API will send the final response and we will see the result.
    // we send response as API request of another API's. Then that API will show the data

    // Here after updating the data we are sending new request to the "/posts" to see all the posts.
    // res.redirect always send "get" request by default.

    res.redirect("/posts"); // we are sending get request to the /posts. So that after adding new post we can see all posts
});

// see one post
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    const post = posts.find((p) => p.id === id); // finds the first post object in the posts array whose id matches the given id.
    res.render("show.ejs", { post }); // views/show.ejs
});

// Update post
// send edit form
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    const post = posts.find((p) => p.id === id);
    res.render("edit.ejs", { post }); // views/edit.ejs
});

// update the data
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let newContent = req.body.content;
    console.log(newContent);

    let post = posts.find((p) => p.id === id);
    post.content = newContent;
    console.log(post);

    res.redirect("/posts");
});

// Delete post
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id != p.id);
    res.redirect("/posts");
});