function settingData() {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let cartBody = document.getElementById("cartBody")
    let emptiness = document.getElementById("emptyCart")
    let totalSection = document.getElementById("totalSection")
    cartBody.innerHTML = ""
    totalSection.innerHTML = ""
    let total = 0
    if (cart.length === 0) {
        emptiness.classList.remove("hidden")
        return
    } else {
        emptiness.classList.add("hidden")
        cart.forEach((element, index) => {
            if (!element.quantity) {
                element.quantity = 1
            }
            const box = document.createElement("tr")
            box.classList.add("border-2")
            let subTotal = element.quantity * element.price
            total += parseFloat(subTotal)

            box.innerHTML = `
                <td class="p-2 text-center border-2"><img src="${element.image}" class="w-16"></td>
                <td class="p-2 text-center border-2">${element.title}</td>
                <td class="p-2 text-center border-2">$${element.price}</td>
                <td class="p-2 text-center border-2">
                  <button class="bg-gray-200 px-2 rounded quantityRemove">-</button>
                  ${element.quantity}
                  <button class="bg-gray-200 px-2 rounded quantityAdd">+</button>
                </td>
                <td class="p-2 text-center border-2">$${subTotal.toFixed(2)}</td>
                <td class="p-2 text-center border-2">
                  <button class="bg-red-500 text-white px-3 py-1 rounded remove">Remove</button>
                </td>
            `
            let removeButton = box.querySelector(".remove")
            removeButton.addEventListener("click", () => {
                removeData(cart, index)
            })
            let quantityAddButton = box.querySelector(".quantityAdd")
            quantityAddButton.addEventListener("click", () => {
                element.quantity++
                localStorage.setItem("cart", JSON.stringify(cart))
                settingData()
            })
            let quantityRemoveButton = box.querySelector(".quantityRemove")
            quantityRemoveButton.addEventListener("click", () => {
                if (element.quantity > 1) {
                    element.quantity--
                    localStorage.setItem("cart", JSON.stringify(cart))
                    settingData()
                }
            })

            cartBody.append(box)
        })
        totalSection.innerHTML = `
            <div class="flex flex-col gap-4 sm:flex-row sm:justify-between  w-full">
  <p class="font-semibold text-lg">
    Total : $<span id="cartTotal">${total.toFixed(2)}</span>
  </p>
  <a href="checkout.html">
    <button class="bg-blue-500 rounded-lg p-[8px] text-white hover:bg-blue-600 transition">
      Checkout
    </button>
  </a>
</div>

        `
    }
}
function removeData(array, index) {
    array.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(array))
    settingData()
}

const wishArray = JSON.parse(localStorage.getItem("wishList")) || []


cartShow(wishArray, "wishCount")

function cartShow(array, id) {
    let count = document.getElementById(id)
    if (array.length === 0) {
        count.classList.add("hidden")
    } else {
        count.classList.remove("hidden")
        count.textContent = array.length
    }
}

settingData()
let menuBtn = document.getElementById("menuBtn");
let mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

