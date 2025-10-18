function openUserLogin() {
    const element = document.querySelector(".user-login-popup");
    element.style.opacity = "1";
    element.style.pointerEvents = "auto";
}

function closeUserLogin() {
    const element = document.querySelector(".user-login-popup");
    element.style.opacity = "0";
    element.style.pointerEvents = "none";
}