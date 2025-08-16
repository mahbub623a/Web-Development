// jason -> JavaScript Object natation
// we got jason data as a string when we call api

let jasonData = '{"fact":"Approximately 1/3 of cat owner think their pets are able to read their minds.", "length":78}'

// jason.parse -> convert a jason data(string) to javascript object
let validRes = JSON.parse(jasonData);
console.log(validRes.fact);
console.log(validRes.length);

// jason.stringify -> convert javascript object to jason data
let student = {
    name: "Mahbub",
    marks: 90,
}
console.log(JSON.stringify(student))

// API tools - Test your API
// https://hoppscotch.io/ 

// API link is called "endpoint"