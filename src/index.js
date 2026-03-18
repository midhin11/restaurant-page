import "./styles.css"
import { menu } from "./menu.js";
import { about } from "./about.js";
import { home } from "./home.js"

home()

//Navigation button actions

document.querySelector(".menu-btn").addEventListener("click", function(e) {
    document.querySelector(".menu-btn").style.borderBottom = `${8}px solid oklch(68.1% 0.162 75.834)`;
    document.querySelector(".home-btn").style.borderBottom = `8px solid transparent`;
    document.querySelector(".about-btn").style.borderBottom = `8px solid transparent`;
    content.textContent = "";
    menu();
})

document.querySelector(".about-btn").addEventListener("click", function(e) {
    content.textContent = "";
    document.querySelector(".about-btn").style.borderBottom = `${8}px solid oklch(68.1% 0.162 75.834)`;
    document.querySelector(".menu-btn").style.borderBottom = `8px solid transparent`;
    document.querySelector(".home-btn").style.borderBottom = `8px solid transparent`;
    about();
})

document.querySelector(".home-btn").addEventListener("click", function() {
    content.textContent = "";
    document.querySelector(".home-btn").style.borderBottom = `${8}px solid oklch(68.1% 0.162 75.834)`;
    document.querySelector(".menu-btn").style.borderBottom = `8px solid transparent`;
    document.querySelector(".about-btn").style.borderBottom = `8px solid transparent`;
    home();
})