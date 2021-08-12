// Toggles the hamburger menu on

const hamburger = document.querySelector(".hamburger");
const linkMenu = document.querySelector(".links");

hamburger.addEventListener("click", mobileNav);

function mobileNav() {
    hamburger.classList.toggle("active");
    linkMenu.classList.toggle("active");
}

// Toggles the hamburger menu off

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
