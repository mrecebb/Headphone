const element = document.querySelector(".left-bar-content")
const overlay = document.querySelector(".left-bar .overlay")

function openLeftBar() {
    element.style.left = "0";
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
}

function closeLeftBar() {
    element.style.left = "-500px";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
}