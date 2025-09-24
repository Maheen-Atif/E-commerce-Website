let wishListArray = JSON.parse(localStorage.getItem("wishList")) || []
const cartArray=JSON.parse(localStorage.getItem("cart"))||[]
function settingData(array,array2) {
    let box = document.getElementById("productWish")
    box.innerHTML = ""
     if (array.length === 0) {
        let emptyMsg = document.createElement("p")
        emptyMsg.classList.add("text-center", "text-gray-600", "text-xl", "font-bold", "mt-10")
        emptyMsg.textContent = "Your Wishlist is empty "
        box.append(emptyMsg)
        return
    }
    array.forEach((element,index) => {
        let container = document.createElement("div")
        container.classList.add("w-full", "sm:w-[45%]", "lg:w-[30%]", "border-2", "border-gray-200", "flex", "flex-col", "justify-center", "items-center", "p-[20px]", "gap-2", "rounded-lg", "shadow-xl", "h-[520px]","bg-white")
        container.innerHTML = `
        <img class=" h-[185px]" src="${element.image}" alt="${element.title}">
                        <h1 class="text-[18px] font-bold">${element.title.substring(0,20)}....</h1>
                        <p class="text-blue-400 font-bold">${element.price}</p>
                        <p class="text-center">${element.description.substring(0,80)}....</p>
                        <button class="add bg-green-300 text-white p-[10px] w-[100%] rounded-lg hover:bg-green-700 hover:scale-105 hover:rotate-2 transition-all duration-300 ease-in-out">Add to Cart</button>
                        <button class="bg-red-600 p-[10px] w-[100%] text-white rounded-lg hover:bg-pink-600 hover:scale-105 hover:rotate-2 transition-all duration-300 ease-in-out remove">Remove from Wishlist</button>
        `
        let removeButton=container.querySelector(".remove")
        removeButton.addEventListener("click",()=>{
            removeData(array,index)
        })
        let addButton=container.querySelector(".add")
        addButton.addEventListener("click",()=>{
            show(array2,element,"cart")
        })
        

        box.append(container)

    });
}
function removeData(array2,index){
    array2.splice(index,1)
    localStorage.setItem("wishList",JSON.stringify(array2))
    settingData(array2)

}
function show(array , element,sec){
    let exists = array.find(n => n.id === element.id)
    if (exists){
        console.log("item already exists in ",sec)
        const msg="Item already exists in "+sec
        showAlertMessage(msg)
    }else{
        array.push(element)
        localStorage.setItem(sec,JSON.stringify(array))
        const msg="Item added to "+ sec
        showAlertMessage(msg)
    }
}
function showAlertMessage(message ){
    const msg=document.createElement("div")
     msg.classList.add(
        "fixed",  "px-4", "py-2", "rounded-lg",
        "shadow-lg", "text-white","bg-green-500","left-1/2","-translate-x-1/2"
    )
    let part=document.getElementById("hiddenSection")
    msg.textContent=message
    part.append(msg)
    setTimeout(() => {
        msg.remove()
    }, 2000)
}

cartShow(cartArray, "cartCount")

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


settingData(wishListArray,cartArray)
let menuBtn = document.getElementById("menuBtn");
let mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden"); })

