import burger from "./images/burger.jpg";
import wrap from "./images/wrap.jpg";
import wings from "./images/wings.jpg";
import fries from "./images/loaded-fries.jpg";
import sundae from "./images/sundae.jpg";
import caramel from "./images/caramel.jpg";


export function about() {
    let content = document.querySelector("#content");
    // content.textContent = "About";
    let aboutPage = document.createElement("div");
    aboutPage.classList.add("about-page");

    let aboutTitle = document.createElement("h1");
    aboutTitle.classList.add("about-title")
    let aboutText = document.createTextNode("About ");
    let span = document.createElement("span");
    span.textContent = "CraveHub";
    aboutTitle.append(aboutText, span);

    let aboutDesc1 = document.createElement("p");
    aboutDesc1.classList.add("about");
    aboutDesc1.textContent = "At CraveHub, we don’t just serve food — we serve bold, satisfying flavors made for real cravings. Every item on our menu is crafted to deliver speed, taste, and consistency without compromise."
    let aboutDesc2 = document.createElement("p");
    aboutDesc2.classList.add("about");
    aboutDesc2.textContent = "Our philosophy is simple: fast food should never feel rushed. From our signature burgers to loaded fries and indulgent sides, we focus on quality ingredients, rich flavors, and a menu that hits every craving."
    let aboutDesc3 = document.createElement("p");
    aboutDesc3.classList.add("about");
    aboutDesc3.textContent = "Whether you're grabbing a quick bite or fueling up with friends, CraveHub is your go-to spot for food that’s fast, fresh, and unforgettable."

    let aboutTitle2 = document.createElement("h1");
    aboutTitle2.classList.add("about-title");   
    let aboutText2 = document.createTextNode("Fan Favorites at ");
    let span2 = document.createElement("span");
    span2.textContent = "CraveHub";
    aboutTitle2.append(aboutText2, span2);

    let images = document.createElement("div");
    images.classList.add("about-image-set");
    
    let image1 = document.createElement("img");
    image1.src = burger;
    image1.classList.add("about-image");
    let image2 = document.createElement("img");
    image2.classList.add("about-image");
    image2.src = caramel;
    let image3 = document.createElement("img");
    image3.classList.add("about-image");
    image3.src = wings
    let image4 = document.createElement("img");
    image4.classList.add("about-image");
    image4.src = fries
    let image5 = document.createElement("img");
    image5.classList.add("about-image");
    image5.src = sundae
    let image6 = document.createElement("img");
    image6.classList.add("about-image");
    image6.src = wrap;
    images.append(image1, image2, image3, image4, image5, image6);


    aboutPage.append(aboutTitle, aboutDesc1, aboutDesc2, aboutDesc3, aboutTitle2, images);
    content.append(aboutPage);
}