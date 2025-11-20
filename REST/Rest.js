// Rest(Representational State Transfer) - REST is an architectural style that defines a set of constraints(Rules) to be used for creating Web services.
// we service - collection of AIPs

// CRUD Operations - Create, Read, Update, Delete
// some rules for Operations
/**
    GET - retrieves resources.
    POST - submits new data to the server
    PUT - updates existing data
    PATCH - update existing data partially
    DELETE - removes data
 */

// resource - resource is the data where we performs our CRUD operations. data can be post, users, tweets.
// Here our resource is Facebook post

// Creating RESTfull APIs for our post
/**
   Request      path            What it does
 * GET          /posts          to get data for all posts
 * POST         /posts          to add new post
 * PATCH        /posts/:id      to update specific post
 * DELETE       /posts/:id      to delete specific post
 * PUT          /posts/:id      to update/replace specific post
 */


// To generate unique id for each post we can use "uuid" package
// npm install uuid

// const { v4: uuidv4 } = require("uuid");
// Then while adding new post we can generate id using uuidv4()
// Example:
// let id = uuidv4(); // '110ec58a-a0f2-4ac4-8393-c866d813b8d1'
// posts.push({ id: id, username, content });


// Method Override - to use PUT, PATCH and DELETE methods in HTML form we need to use method-override package
// npm install method-override

// const methodOverride = require("method-override");
// app.use(methodOverride("_method"));

// use ?_method=PATCH to the form
// <form action="/posts/?_method=PATCH" method="post">
// This will override the method to PUT when the form is submitted