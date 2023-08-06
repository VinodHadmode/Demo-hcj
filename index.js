
let bag = [];
let cartData = JSON.parse(localStorage.getItem("cartData")) || []
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        bag = data
        displayProducts(data)
    })
    .catch((err) => console.log(err))


function displayProducts(data) {

    // console.log("inside dispalyProd");
    document.querySelector(".container").innerHTML = ""

    data.forEach(elem => {
        let div = document.createElement("div")

        let prodImage = document.createElement("img")
        prodImage.setAttribute("src", elem.image)

        let title = document.createElement("h2")
        title.innerText = `title :${elem.title}`

        let price = document.createElement("p")
        price.innerText =`Price :${elem.price}` 

        let rating = document.createElement("p")
        rating.innerText =`rating :${elem.rating.rate}` 

        let btn = document.createElement("button")
        btn.innerText = "Add to Cart"
        btn.addEventListener("click", () => storeInLocal(elem))

        div.append(prodImage, title, price, rating, btn)
        document.querySelector(".container").append(div)
    });
}

function Search() {
    let q = document.querySelector("input").value
    // console.log(q);

    let filteredData = bag.filter((el) => {
        return el.title.toLowerCase().includes(q.toLocaleLowerCase())
    })
    // console.log(filteredData);
    displayProducts(filteredData)
}

function storeInLocal(element) {
    //    console.log(data);
    cartData.push(element)
    localStorage.setItem("cartData", JSON.stringify(cartData))
}