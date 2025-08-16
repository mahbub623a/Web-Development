// Axios -> use to send request to api. we get exact response in axios we don't need to parse. We need axios cdn link for that (in html file)
let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let res = await axios.get(url); // return promise
        console.log(res); // print promise
        console.log(res.data); // print object
        console.log(res.data.fact); // print fact

        // for activity
        return res.data.fact;

    } catch (e) {
        console.log("Error -", e);
    }
}

// getFact();

// activity
let btn = document.querySelector('button');
let text = document.querySelector("#text");

btn.addEventListener("click", async () => {
    text.innerText = await getFact();
})
