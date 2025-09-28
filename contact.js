let i = JSON.parse(localStorage.getItem("userData")) || {};
let mail=i.userEmail
document.getElementById("auto").value=mail||""
let sendMessage=document.getElementById("sendMessage")

sendMessage.addEventListener("click",()=>{
    let subjectField = document.getElementById("subjectField").value
    let messageField = document.getElementById("messageField").value
    if(subjectField===""||messageField===""){
        showAlertMessage("All fields required!")
    }else{
        showAlertMessage("Thank you for contacting Us!")
        let feedBack={
            email:mail,
            subject:subjectField,
            message:messageField
        }
        localStorage.setItem("feedback",JSON.stringify(feedBack))
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
