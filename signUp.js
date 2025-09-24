let form = document.getElementById("signup");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("mail").value.trim();
    let password1 = document.getElementById("pass1").value;
    let password2 = document.getElementById("pass2").value;
    let nameInLowerCase = name.toLowerCase();

    // get existing user (object)
    let existingUser = JSON.parse(localStorage.getItem("userData"));

    if (name === "" || email === "" || password1 === "" || password2 === "") {
        alert("Please fill all the required fields!");
    } else if (password1 !== password2) {
        alert("Passwords do not match!");
    } else if (name !== nameInLowerCase) {
        alert("Username should contain only small letters");
    } else if (!email.includes("@gmail.com")) {
        alert("Email Invalid!");
    } else if (password1.length < 6) {
        alert("Password should contain at least 6 characters");
    } else if (existingUser && existingUser.userEmail === email) {
        // agar object me pehle se ye email exist karti hai
        alert("⚠️ Account with this email already exists!");
    } else {
        // ek hi user ka object store hoga
        let information = {
            nameOfUser: name,
            userEmail: email,
            userPassword1: password1
        };

        localStorage.setItem("userData", JSON.stringify(information));

        const msg = document.createElement("div");
        msg.classList.add(
            "fixed", "px-4", "py-2", "rounded-lg",
            "shadow-lg", "text-white", "bg-green-500", "left-1/2", "-translate-x-1/2"
        );
        msg.textContent = "Account created successfully";
        document.getElementById("hiddenSection").append(msg);
        setTimeout(() => msg.remove(), 2000);

        window.location.href = "SignIn.html";
    }
});
