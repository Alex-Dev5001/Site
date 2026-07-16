const fixedBox = document.querySelector(".fixed_box");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        fixedBox.style.position = "sticky";
        fixedBox.style.top = "0";
    } else {
        fixedBox.style.top = "auto";
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth < 830) {
        document.querySelector(".assistance").textContent = "ASSISTÊNCIA";
        document.querySelector(".welcome").textContent = "Bem Vindo à Tech Cell!";
        document.querySelector(".welcome").style.color = "#EEB518";
    }
});

