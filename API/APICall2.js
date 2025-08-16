let url = "https://catfact.ninja/fact"; // endpoint

async function getFact() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
        
    } catch (error) {
        console.log("Error -", error);
    }
}

getFact();