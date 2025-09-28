let icon = document.getElementById("icon");
let sidebar = document.getElementById("mobileSidebar");
let close = document.getElementById("close");
icon.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full");
});
close.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
});


let a = JSON.parse(localStorage.getItem("productDetails")) || []
let uploadedImage = ""   
let b = JSON.parse(localStorage.getItem("newProducts")) || [] 
let imageButton = document.getElementById("image")
imageButton.addEventListener("click", () => {
    let box2 = document.createElement("div")
    box2.classList.add("fixed", "inset-0", "flex", "items-center", "justify-center", "z-50")
    box2.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-lg w-[300px]">
            <h2 class="text-lg font-bold mb-3">Upload Image</h2>
            <label class="block mb-1">Image URL :</label>
            <input type="text" placeholder="Enter image URL" id="imageUrl"
                   class="border-2 border-gray-200 p-2 rounded-lg w-full mb-3">
            <button id="closeBox" class="bg-red-500 text-white rounded-lg px-3 py-1">Done</button>
        </div>
    `
    document.body.appendChild(box2);

    document.getElementById("closeBox").addEventListener("click", () => {
        uploadedImage = document.getElementById("imageUrl").value  
        box2.remove();
    });
})

let add = document.getElementById("add")
add.addEventListener("click", () => {
    let title2 = document.getElementById("title2").value
    let price2 = parseInt(document.getElementById("price2").value)
    let description2 = document.getElementById("description2").value
    let features = document.getElementById("features").value
    let category2 = document.getElementById("category2").value
    let image2 = uploadedImage 
    let id2 = a.length > 0 ? Math.max(...a.map(p => p.id)) + 1 : 1;

    if (title2==="" || price2==="" || description2==="" || features==="" || category2==="Select Category" || image2==="") {
        showAlertMessage("All fields required")
    } else {
        let a2 = {
            id: id2,
            title: title2,
            price: price2,
            description: description2,
            category: category2,
            image: image2
        }
        a.push(a2)
        localStorage.setItem("productDetails", JSON.stringify(a))
        b.push(a2)
        localStorage.setItem("newProducts",JSON.stringify(b))
        showAlertMessage("Product added successfully ")
        window.location.href="viewproduct.html"
    }
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
