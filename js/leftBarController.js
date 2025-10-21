function openLeftBar() {
    const element = document.querySelector(".left-bar-content")
    const overlay = document.querySelector(".left-bar .overlay")
    element.style.left = "0";
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
}

function closeLeftBar() {
    const element = document.querySelector(".left-bar-content")
    const overlay = document.querySelector(".left-bar .overlay")
    element.style.left = "-300px";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
}