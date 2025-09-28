const adminInfo = [
    { email: "admin@gmail.com", password: "12345" },
    { email: "admin2@gmail.com", password: "12345" }
]
localStorage.setItem("admin", JSON.stringify(adminInfo))

let loginButton = document.getElementById("loginButton")
let adminArray = JSON.parse(localStorage.getItem("admin"))

loginButton.addEventListener("click", () => {
    check(adminArray)
})

function check(adminArray) {
    let emailUser = document.getElementById("usernameemail").value.toLocaleLowerCase()
    let passwordUser = document.getElementById("usernamePassword").value
    if (emailUser === "" || passwordUser === "") {
        showAlertMessage("Both fields required")
    } else {
        let exists = adminArray.find(element =>
            element.email.toLowerCase() === emailUser &&
            element.password === passwordUser
        )
        if (exists) {
            window.location.href = "dashboard.html";
        } else {
            showAlertMessage("not found")
        }
    }
}

const cartArray = JSON.parse(localStorage.getItem("cart")) || []
const wishArray = JSON.parse(localStorage.getItem("wishList")) || []

cartShow(cartArray, "cartCount")
cartShow(wishArray, "wishCount")

function cartShow(array, id) {
    let count = document.getElementById(id)
    if (!count) return
    if (array.length === 0) {
        count.classList.add("hidden")
    } else {
        count.classList.remove("hidden")
        count.textContent = array.length
    }
}


let menuBtn = document.getElementById("menuBtn")
let mobileMenu = document.getElementById("mobileMenu")

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
})
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
