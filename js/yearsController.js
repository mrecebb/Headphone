const years = Array.from({ length: 11 }, (_, i) => 2015 + i);
let counter = 2020;

function openYear(year) {
    hideAllYears();
    hideAllLineCircle();

    const element = document.querySelector(`.year-${year}`);
    element.style.opacity = "1";
    element.style.pointerEvents = "auto";

    const index = year - 2015 + 1;
    const circle = document.querySelector(`.circle-item-${index}`);
    const circleP = circle.querySelector("p");

    circle.style.backgroundColor = "var(--yellow)";
    circle.style.border = "1px solid black";
    circle.style.transform = "scale(1.3)";
    circleP.style.color = "white";

    counter = year;
}

function hideAllYears() {
    years.forEach(y => {
        const el = document.querySelector(`.year-${y}`);
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
    });
}

function hideAllLineCircle() {
    years.forEach((_, i) => {
        const c = document.querySelector(`.circle-item-${i + 1}`);
        const p = c.querySelector("p");
        c.style.backgroundColor = "rgba(180, 180, 180, 1)";
        c.style.border = "1px solid white";
        c.style.transform = "scale(1)";
        p.style.color = "rgba(200, 200, 200, 1)";
    });
}

function goLeft() {
    const index = years.indexOf(counter);
    const newIndex = (index - 1 + years.length) % years.length;
    openYear(years[newIndex]);
}

function goRight() {
    const index = years.indexOf(counter);
    const newIndex = (index + 1) % years.length;
    openYear(years[newIndex]);
}

years.forEach(year => {
    window[`open${year}`] = () => openYear(year);
});