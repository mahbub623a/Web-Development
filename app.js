let url = "http://universities.hipolabs.com/search?name=";

async function getCollage(country) {
    let res = await axios.get(url + country);
    // console.log(res);
    return res.data;
}

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let inp = document.querySelector(".country");
    let country = inp.value;
    let res = await getCollage(country);
    show(res, country);
    inp.value = "";
});

function show(res, country) {
    let list = document.querySelector('.list');
    list.innerText = "";
    list.innerText = country + " University list";
    
    for (r of res) {
        let li = document.createElement("li");
        li.innerText = r.name;
        list.appendChild(li);
    }
}
