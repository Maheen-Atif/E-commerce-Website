let form = document.getElementById("signup");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value
    let email = document.getElementById("mail").value
    let password1 = document.getElementById("pass1").value
    let password2 = document.getElementById("pass2").value
    let nameInLowerCase = name.toLowerCase();
    let existingUser = JSON.parse(localStorage.getItem("userData"));

    if (name === "" || email === "" || password1 === "" || password2 === "") {
        showAlertMessage("Please fill all the required fields!")
    } else if (password1 !== password2) {
        showAlertMessage("Passwords do not match!")
    } else if (name !== nameInLowerCase) {
        showAlertMessage("Username should contain only small letters")
    } else if (!email.includes("@gmail.com")) {
        showAlertMessage("Email Invalid!")
    } else if (password1.length < 6) {
        showAlertMessage("Password should contain at least 6 characters")
    } else if (existingUser && existingUser.userEmail === email) {
        showAlertMessage(" Account with this email already exists!")
    } else {
        let information = {
            nameOfUser: name,
            userEmail: email,
            userPassword1: password1
        };

        localStorage.setItem("userData", JSON.stringify(information));

        showAlertMessage("Account created successfully")

        window.location.href = "SignIn.html";
    }
});
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
    }, 4000)
}