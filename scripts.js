console.log("Olá mundo!");

const fixed_box = document.querySelector(".fixed_box");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    fixed_box.style.top = "0";
  } else {
    if (window.innerWidth > 720) {
      fixed_box.style.top = "4%";
    } 
    else {
      if (window.innerHeight > 900) {
        fixed_box.style.top = "80px";
      } else {
        fixed_box.style.top = "60px";
      }
    }
  }
});

let final_logo = document.querySelector(".final_logo");

window.addEventListener("resize", () => {
  if (window.innerWidth < 1100) {
    final_logo.style.overflow = "auto";
  } else {
    final_logo.style.overflow = "hidden";
  }
});

const logo_insta = document.querySelector(".logo_insta");
logo_insta.addEventListener("click", () => {
  window.open("https://www.instagram.com/tech_cell67/");
});

const logo_face = document.querySelector(".logo_face");

logo_face.addEventListener("click", () => {
  window.open("https://www.facebook.com/profile.php?id=61579808399087");
});

const whats_logo = document.querySelector(".whats_logo");
whats_logo.addEventListener("click", () => {
  window.open("https://wa.me/5567999786870");
});

const email_img = document.querySelector(".e-mail_img");
email_img.addEventListener("click", () => {
  window.open(
    "mailto:techcell.ms67@gmail.com?subject=Orçamento!&body=Olá,%20gostaria%20de%20fazer%20um%20orçamento.",
  );
});

if (window.innerWidth <= 720) {
  document.querySelector(".sub-menu_only").innerHTML = "ASSISTÊNCIA";
}

