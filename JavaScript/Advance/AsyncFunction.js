// Using the concept of async function we can handle callback hell more easily
// Async function -> always return promise (Does'nt matter we return something or not)
async function greet() {
    return "Hello world"
    // abc.(abc); // will return error 
    // throw "Random error"; // another way -> throwing error
}
// console.log(greet());

greet().then((result) => {
    console.log("Successful", result);
}).catch((error) => {
    console.log("Unsuccessful", error);
})

// async arrow function
let hello = async () => {
    console.log("Hello");
}

// This is promise function | It is usually a asynchronize function
function getNum() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000)
    });
}

// await --- Pauses the execution of it's surrounding async function until the promise is settled. we can use await only in async function. It overcomes callback hell.
async function demo() {
    await getNum();
    await getNum();
    await getNum();
    getNum();
}
demo();


// Handling error on await
let h1 = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num < 5)
                reject("Error caught");
            else {
                h1.style.color = color;
                console.log("color changed to", color);
                resolve();
            }
        }, delay);
    })
}

async function color() {
    try {
        await changeColor('red', 1000);
        await changeColor('blue', 1000);
        await changeColor('green', 1000);
        await changeColor('teal', 1000);
    } catch (error) {
        console.log(error);
    }

    let a = 10;
    console.log(a + 10);
}
color();