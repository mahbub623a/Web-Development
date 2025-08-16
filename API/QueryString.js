let url = "http://universities.hipolabs.com/search?name=";
// let country = "nepal";

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        // console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

// getColleges();

let btn = document.querySelector("button");
btn.addEventListener('click', async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colleges = await getColleges(country);
    // console.log(colleges);
    show(colleges);
})

function show(colleges) {
    let list = document.querySelector('.list');
    list.innerText = "";
    for (const col of colleges) {
        console.log(col.name);

        let li = document.createElement('li');
        li.innerText = col.name;
        list.appendChild(li);
    }
}