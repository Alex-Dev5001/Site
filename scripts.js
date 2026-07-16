

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
        document.querySelector(".hello").style.display = "none";
        document.querySelector(".user_box").style.display = "none";
        document.querySelector(".text_area").style.width = "90%";
    } else {
        document.querySelector(".hello").style.display = "flex";
        document.querySelector(".user_logo").style.display = "flex";
    }
});


