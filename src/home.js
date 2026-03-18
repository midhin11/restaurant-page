import pizzaImage from "./pizza.jpg";
import { menu } from "./menu.js";
import { about } from "./about.js";

export function home () {
    console.log("Restaurant Page using Webpack!");

    let content = document.querySelector("#content");
    let container = document.createElement("div");
    container.id = "container";
    let infoContainer = document.createElement("div");
    infoContainer.classList.add("info");
    // infoCOntainer.textContent = "Test";
    let intro = document.createElement("p"); 
    let introText = document.createTextNode("Welcome to ");
    let span = document.createElement("span");
    span.textContent = "CraveHub";;
    intro.append(introText,span);

    let tagLine = document.createElement("p");
    tagLine.textContent = "Fresh off the grill, made fast, and built to satisfy every craving.";

    let homeBtns = document.createElement("div");
    homeBtns.classList.add("btns");
    let viewMenuBtn = document.createElement("button");
    viewMenuBtn.textContent = "View Menu";
    viewMenuBtn.classList.add("view-menu-btn");
    viewMenuBtn.addEventListener("click", function() {
        content.textContent = "";
        document.querySelector(".menu-btn").style.borderBottom = `${8}px solid oklch(68.1% 0.162 75.834)`;
        document.querySelector(".home-btn").style.borderBottom = `8px solid transparent`;
        document.querySelector(".about-btn").style.borderBottom = `8px solid transparent`;
        menu();
    })
    let bookTableBtn = document.createElement("button");
    bookTableBtn.addEventListener("click", function() {
        content.textContent = "";
        document.querySelector(".about-btn").style.borderBottom = `${8}px solid oklch(68.1% 0.162 75.834)`;
        document.querySelector(".menu-btn").style.borderBottom = `8px solid transparent`;
        document.querySelector(".home-btn").style.borderBottom = `8px solid transparent`;
        about();
    })
    bookTableBtn.textContent = "Book a Table";
    homeBtns.append(viewMenuBtn, bookTableBtn);

    let openHours = document.createElement("div");
    openHours.classList.add("hours");
    let openHoursHead = document.createElement("h3");
    openHoursHead.textContent = "Opening Hours";
    let openHours1 = document.createElement("p");
    openHours1.textContent = "Mon – Fri: 10 AM – 11 PM";
    let openHours2 = document.createElement("p");
    openHours2.textContent = "Sat – Sun: 9 AM – 12 AM";
    openHours.append(openHoursHead, openHours1, openHours2);

    let address = document.createElement("div");
    address.classList.add("hours");
    let addressHead = document.createElement("h3");
    addressHead.textContent = "Address";
    let addressDetail = document.createElement("p");
    addressDetail.textContent = "404 Hunger St, Feedville";
    address.append(addressHead,addressDetail);

    infoContainer.append(intro, tagLine, homeBtns, openHours, address);

    //image
    let image = document.createElement("img");
    image.classList.add("home-img");
    image.src = pizzaImage;

    container.append(infoContainer, image);
    content.append(container);

    document.querySelector(".home-btn").style.borderBottom = `${8}px solid oklch(68.1% 0.162 75.834)`;
}