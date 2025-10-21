const element = document.querySelector(".user-login-popup");

function openUserLogin() {
    element.style.opacity = "1";
    element.style.pointerEvents = "auto";
}

function closeUserLogin() {
    element.style.opacity = "0";
    element.style.pointerEvents = "none";
}