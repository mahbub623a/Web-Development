// we need index.js(name should be exact same) file to grab all others file's data then we will send data to the expected file from index.js
const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

module.exports = [apple, banana, orange];
