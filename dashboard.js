let icon = document.getElementById("icon");
let sidebar = document.getElementById("mobileSidebar");
let close = document.getElementById("close");
icon.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full");
});
close.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
});
