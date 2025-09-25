// NPM : Node package manager -> npm is the standard package manager for Node.js.
// 1. Library of packages. Package: Code, that write someone but we use
// 2. Command line tool
// 3. Example: expressJs. reactJs

// Installing packages -> npm install package_name
// figlet -> print something in command line using special character
// install -> npm install figlet
// how to use figlet -> create a index.js file in FigletDir(where package are installed)

// when we install any package we got there things -> node_modules, package.json, package-lock.json
// 1. node_modules The node_modules folder contains every installed dependency for our project.
// 2. package-lock.json ->  It records the exact version of every installed dependency, including its sub-dependencies and their versions.
// 3. package.json -> The package.json file contains descriptive and functional metadata about a project, such as a name, version, and dependencies
//      if we want to send the project to someone(or upload project in github) we don't need to send node_modules or package-lock.json. we simple can send package.json. using this someone can install all needed package or somethings.
// if we have package.json we just run -> nmp install <- it will install all necessary package from package.json


// We can create a package.json file for our own project
// command -> npm init : then follow the instruction, see My Project folder
// Here, if you install more packages, our project's package.json will get automatically updated with dependency. That installed packages will not have package.json file.

// Local installation -> install packages in a specific directory. (Best practice)
// Global installation -> install packages for all directory
// command -> npm install -g package_name
// but for this we need to link the package in that directory where we want to use. 
//  command -> npm link package_name
