let signinForm = document.getElementById("signup"); 
signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("mail").value.trim();
    let password1 = document.getElementById("pass1").value;

    let storedUser = JSON.parse(localStorage.getItem("userData")); 

    if (email === "" || password1 === "") {
        const msg = document.createElement("div");
        msg.classList.add(
            "fixed", "px-4", "py-2", "rounded-lg",
            "shadow-lg", "text-white", "bg-green-500", "left-1/2", "-translate-x-1/2"
        );
        msg.textContent = 'All fields required';
        document.getElementById("hiddenSection").append(msg);
        setTimeout(() => msg.remove(), 2000);
        return;
    }

    if (!storedUser || storedUser.userEmail !== email || storedUser.userPassword1 !== password1) {
        const msg = document.createElement("div");
        msg.classList.add(
            "fixed", "px-4", "py-2", "rounded-lg",
            "shadow-lg", "text-white", "bg-red-500", "left-1/2", "-translate-x-1/2"
        );
        msg.textContent = 'Invalid username or password';
        document.getElementById("hiddenSection").append(msg);
        setTimeout(() => msg.remove(), 2000);
    } else {
        const msg = document.createElement("div");
        msg.classList.add(
            "fixed", "px-4", "py-2", "rounded-lg",
            "shadow-lg", "text-white", "bg-green-500", "left-1/2", "-translate-x-1/2"
        );
        msg.textContent = 'Login successful';
        document.getElementById("hiddenSection").append(msg);
        setTimeout(() => msg.remove(), 2000);

        window.location.href = "index2.html";
    }
});