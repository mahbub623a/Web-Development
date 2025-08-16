let url = "https://dog.ceo/api/breeds/image/random";

async function getDog() {
    try {
        let res = await axios.get(url);
        console.log(res.data.message);

        return res.data.message;
    } catch (err) {
        console.log(err);
    }
}

// getDog();
let btn = document.querySelector('button');
let image = document.querySelector("img");

btn.addEventListener('click', async () => {
    let res = await getDog();
    image.src = res;
})



