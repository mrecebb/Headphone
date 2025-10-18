const cursorBorder = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
    cursorBorder.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
});