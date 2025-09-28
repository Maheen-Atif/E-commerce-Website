let icon = document.getElementById("icon")
let sidebar = document.getElementById("mobileSidebar")
let close = document.getElementById("close")
icon.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full")
});
close.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full")
});
let noProduct = document.getElementById("noProduct")
let a = JSON.parse(localStorage.getItem("newProducts")) || []
let c = JSON.parse(localStorage.getItem("productDetails")) || []

if (a.length === 0) {
    noProduct.innerHTML = `<p class="text-xl font-semibold text-center">No Product Available</p>`;
} else {
    noProduct.innerHTML = ""
    let productContainer = document.createElement("div")
    productContainer.classList.add("flex", "flex-wrap", "gap-6", "justify-center")

    a.forEach((element,index) => {
        let b = document.createElement("div")
        b.classList.add("w-[200px]", "border", "p-4", "rounded-lg", "shadow-lg", "bg-white")
        b.innerHTML = `
            <img class="h-[185px] w-full object-cover rounded-md mb-3" src="${element.image}" alt="${element.title}">
            <h1 class="text-[18px] font-bold mb-2">${element.title.substring(0, 20)}...</h1>
            <p class="text-blue-400 font-bold mb-2">$${element.price}</p>
            <p class="text-gray-600 mb-3">${element.description.substring(0, 80)}...</p>
            <button class="remove bg-green-500 text-white p-[10px] w-full rounded-lg hover:bg-green-700 transition">Remove</button>
        `;
        let removeButton = b.querySelector(".remove")
        removeButton.addEventListener("click", () => {
            a = a.filter(item => item.id !== element.id)
            localStorage.setItem("newProducts", JSON.stringify(a))
            c = c.filter(item => item.id !== element.id)
            localStorage.setItem("productDetails", JSON.stringify(c))
             showAlertMessage("Item deleted successfully")
            location.reload()
        })
        productContainer.appendChild(b);
    });

    noProduct.appendChild(productContainer);
}


function showAlertMessage(message) {
    const msg = document.createElement("div")
    msg.classList.add("fixed", "px-4", "py-2", "rounded-lg", "shadow-lg", "text-white",
                      "bg-green-500", "left-1/2", "-translate-x-1/2", "top-10")
    msg.textContent = message
    document.body.appendChild(msg)  
    setTimeout(() => {
        msg.remove()
    }, 2000)
}
