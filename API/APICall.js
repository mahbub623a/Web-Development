let url = "https://catfact.ninja/fact"; // endpoint

// fetch -> use to send request to api. it returns a promises
fetch(url)
.then((res) => {
    console.log(res); // we can not use direct result. we need readable data
    // we use .json() function to access readable data and it also return promises
    // console.log(res.json());
    res.json().then((data) => {
        console.log(data);
    });

}).catch((err) => {
    console.log("Error - ", err);
})

// better way to write
fetch(url)
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data.fact);
    return fetch(url);    // second call
}).then((res) => {
    return res.json();
}).then((data2) => {
    console.log(data2);
}).catch((err) => {
    console.log("Error - ", err);
});