let userInfo = JSON.parse(localStorage.getItem("userData")) ;
let name = userInfo.nameOfUser || "";
let mail = userInfo.userEmail || "";
document.getElementById("name").value = name;
document.getElementById("mail").value = mail;

orderButton.addEventListener("click", () => {
    let address = document.getElementById("address").value.trim();  

    if (address === "") {
        const msg = document.createElement("div");
        msg.classList.add(
            "fixed", "px-4", "py-2", "rounded-lg",
            "shadow-lg", "text-white", "bg-red-500", "left-1/2", "-translate-x-1/2"
        );
        msg.textContent = 'All fields required';
        document.getElementById("hiddenSection").append(msg);
        setTimeout(() => msg.remove(), 2000);

    } else {
        const msg = document.createElement("div");
        msg.classList.add(
            "fixed", "px-4", "py-2", "rounded-lg",
            "shadow-lg", "text-white", "bg-green-500", "left-1/2", "-translate-x-1/2"
        );
        msg.textContent = 'Your order has been confirmed';
        document.getElementById("hiddenSection").append(msg);
        setTimeout(() => msg.remove(), 2000);

        window.location.href = "index2.html"; 
        localStorage.removeItem("cart");
    }
});
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