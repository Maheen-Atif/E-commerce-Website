const cartArray = JSON.parse(localStorage.getItem("cart")) || []
const wishArray = JSON.parse(localStorage.getItem("wishList")) || []

function fetchdata() {
    let response = JSON.parse(localStorage.getItem("productDetails"))||[]
    let info = response
    renderProducts(info)
    const searchBar = document.getElementById("searchbar")
    searchBar.addEventListener("input", () => {
        const searchValue = searchBar.value.toLowerCase()
        search(info, searchValue)
    })
}
cartShow(cartArray, "cartCount")
cartShow(wishArray, "wishCount")

fetchdata()

function renderProducts(products) {
    const container = document.getElementById("Products")
    container.innerHTML = ""
    products.forEach(element => {
        const box = document.createElement("div")
        box.classList.add("w-full", "sm:w-[45%]", "lg:w-[30%]", "border-2", "border-gray-200",
            "flex", "flex-col", "justify-center", "items-center", "p-[20px]", "gap-2",
            "rounded-lg", "shadow-xl", "h-[520px]"
        )

        box.innerHTML = `
        <img class="h-[185px]" src="${element.image}" alt="${element.title}">
        <h1 class="text-[20px] font-bold">${element.title.substring(0, 20)}...</h1>
        <p class="text-blue-400 font-bold">$${element.price}</p>
        <p class="text-center">${element.description.substring(0, 80)}...</p>
        <button class="add bg-green-300 text-white p-[10px] w-[100%] rounded-lg hover:bg-green-700 hover:scale-105 hover:rotate-2 transition-all duration-300 ease-in-out">Add to Cart</button>
        <button class="bg-red-600 p-[10px] w-[100%] text-white rounded-lg hover:bg-pink-600 hover:scale-105 hover:rotate-2 transition-all duration-300 ease-in-out toWish">Add to Wishlist</button>
        `
        container.append(box)

        let addButton = box.querySelector(".add")
        addButton.addEventListener("click", () => {
            show(cartArray, element, "cart")
        })

        let wishListButton = box.querySelector(".toWish")
        wishListButton.addEventListener("click", () => {
            show(wishArray, element, "wishList")
        })
    })
}

function show(array, element, sec) {
    let exists = array.find(n => n.id === element.id)
    if (exists) {
        console.log("item already exists in ", sec)
        showAlertMessage("Item already exists in " + sec)
    } else {
        array.push(element)
        localStorage.setItem(sec, JSON.stringify(array))
        showAlertMessage("Item added to " + sec)
         cartShow(array, sec === "cart" ? "cartCount" : "wishCount")
    }
}

function showAlertMessage(message) {
    const msg = document.createElement("div")
    msg.classList.add(
        "fixed", "px-4", "py-2", "rounded-lg",
        "shadow-lg", "text-white", "bg-green-500", "left-1/2", "-translate-x-1/2"
    )
    let part = document.getElementById("hiddenSection")
    msg.textContent = message
    part.append(msg)
    setTimeout(() => {
        msg.remove()
    }, 2000)
}

function search(products, searchTitle) {
    const filtered = products.filter(p => p.title.toLowerCase().includes(searchTitle))
    renderProducts(filtered)
}
let menuBtn = document.getElementById("menuBtn");
let mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden"); 
});

function cartShow(array,id){
    let count=document.getElementById(id)
    if (array.length===0){
        count.classList.add("hidden")
    }else{
        count.classList.remove("hidden")
        count.textContent=array.length
    }
}
