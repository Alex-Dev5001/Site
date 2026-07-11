console.log("Hello, World!");

const fixedBox = document.querySelector(".fixed_box");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        fixedBox.style.position = "sticky";
        fixedBox.style.top = "0";
    } else {
        fixedBox.style.top = "auto";
    }
});
