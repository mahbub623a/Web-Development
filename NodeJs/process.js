/*
    Process : This object provides information about, and control over, the current Node.js process. 
    1. It shows us information related to what work happening in a nodejs process.
    2. We can change or manipulate that information using process object. 

    To see the object -> print process int terminal
 */

// Process property ->
// 1. process.version -> shows current nodejs version
// 2. process.cwd() -> show current directory
// 3. process.release -> show release note

// 4. process.argv -> returns an array containing the command-line arguments passed when the Node.js process was launched.
// * We can access this arguments from anywhere in the code file.

console.log(process.argv); // no argument -> it will shows two path 1. executable path for node. 2. Current file path
// with argument
// run -> node process.js Mahbub Tamannna Tasnuva
let args = process.argv;
for (let i = 2; i < args.length; i++) { // we don't want to show the path
    console.log("Hello and welcome ", args[i]);
}