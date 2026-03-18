//menu.js

export function menu() {


    let content = document.querySelector("#content");
    // menu.textContent = "Menu";
    let menuPage = document.createElement("div");
    menuPage.classList.add("menu-page");

    let emptySide = document.createElement("div");
    emptySide.classList.add("empty-menu-side");
    
    let menuSide = document.createElement("div");
    menuSide.classList.add("menu-side");
    let menuTitle = document.createElement("h1"); //title
    menuTitle.textContent = "THE MENU";
    menuSide.append(menuTitle); 

    let item1 = document.createElement("div");
    item1.classList.add("item");
    let item1Details = document.createElement("div");
    item1Details.classList.add("item-details");
    let item1Name = document.createElement("div");
    item1Name.textContent = "Inferno Smash Burger";
    let item1Desc = document.createElement("div");
    item1Desc.textContent = "Double-smashed beef, melted cheddar, smoky chipotle glaze.";
    item1Details.append(item1Name, item1Desc);
    let item1Price = document.createElement("div");
    item1Price.textContent = "$8.99";
    item1Price.classList.add("item-price");
    item1.append(item1Details, item1Price);
    menuSide.append(item1);

    let item2 = document.createElement("div");
    item2.classList.add("item");
    let item2Details = document.createElement("div");
    item2Details.classList.add("item-details");
    let item2Name = document.createElement("div");
    item2Name.textContent = "Truffle Loaded Fries";
    let item2Desc = document.createElement("div");
    item2Desc.textContent = "Golden fries tossed in truffle oil with parmesan and herbs.";
    item2Details.append(item2Name, item2Desc);
    let item2Price = document.createElement("div");
    item2Price.textContent = "$5.99";
    item2Price.classList.add("item-price");
    item2.append(item2Details, item2Price);
    menuSide.append(item2);

    let item3 = document.createElement("div");
    item3.classList.add("item");
    let item3Details = document.createElement("div");
    item3Details.classList.add("item-details");
    let item3Name = document.createElement("div");
    item3Name.textContent = "Midnight Chicken Stack";
    let item3Desc = document.createElement("div");
    item3Desc.textContent = "Crispy fried chicken, spicy mayo, and soft brioche buns.";
    item3Details.append(item3Name, item3Desc);
    let item3Price = document.createElement("div");
    item3Price.textContent = "$7.99";
    item3Price.classList.add("item-price");
    item3.append(item3Details, item3Price);
    menuSide.append(item3);

    let item4 = document.createElement("div");
    item4.classList.add("item");
    let item4Details = document.createElement("div");
    item4Details.classList.add("item-details");
    let item4Name = document.createElement("div");
    item4Name.textContent = "Cheesy Volcano Wrap";
    let item4Desc = document.createElement("div");
    item4Desc.textContent = "Grilled filling with melted cheese, peppers, and smoky sauce.";
    item4Details.append(item4Name, item4Desc);
    let item4Price = document.createElement("div");
    item4Price.textContent = "$7.99";
    item4Price.classList.add("item-price");
    item4.append(item4Details, item4Price);
    menuSide.append(item4);

    let item5 = document.createElement("div");
    item5.classList.add("item");
    let item5Details = document.createElement("div");
    item5Details.classList.add("item-details");
    let item5Name = document.createElement("div");
    item5Name.textContent = "Loaded Nacho Supreme";
    let item5Desc = document.createElement("div");
    item5Desc.textContent = "Crunchy nachos layered with cheese, jalapeños, and salsa.";
    item5Details.append(item5Name, item5Desc);
    let item5Price = document.createElement("div");
    item5Price.textContent = "$6.99";
    item5Price.classList.add("item-price");
    item5.append(item5Details, item5Price);
    menuSide.append(item5);

    let item6 = document.createElement("div");
    item6.classList.add("item");
    let item6Details = document.createElement("div");
    item6Details.classList.add("item-details");
    let item6Name = document.createElement("div");
    item6Name.textContent = "Atomic Hot Wings";
    let item6Desc = document.createElement("div");
    item6Desc.textContent = "Juicy wings coated in a bold spicy glaze with ranch dip.";
    item6Details.append(item6Name, item6Desc);
    let item6Price = document.createElement("div");
    item6Price.textContent = "$8.49";
    item6Price.classList.add("item-price");
    item6.append(item6Details, item6Price);
    menuSide.append(item6);
    
    let item7 = document.createElement("div");
    item7.classList.add("item");
    let item7Details = document.createElement("div");
    item7Details.classList.add("item-details");
    let item7Name = document.createElement("div");
    item7Name.textContent = "Classic American Hot Dog";
    let item7Desc = document.createElement("div");
    item7Desc.textContent = "Grilled sausage topped with mustard and crispy onions.";
    item7Details.append(item7Name, item7Desc);
    let item7Price = document.createElement("div");
    item7Price.textContent = "$5.49";
    item7Price.classList.add("item-price");
    item7.append(item7Details, item7Price);
    menuSide.append(item7);

    let item8 = document.createElement("div");
    item8.classList.add("item");
    let item8Details = document.createElement("div");
    item8Details.classList.add("item-details");
    let item8Name = document.createElement("div");
    item8Name.textContent = "Caramel Crunch Milkshake";
    let item8Desc = document.createElement("div");
    item8Desc.textContent = "Creamy vanilla shake with caramel swirl and biscuit crunch.";
    item8Details.append(item8Name, item8Desc);
    let item8Price = document.createElement("div");
    item8Price.textContent = "$4.99";
    item8Price.classList.add("item-price");
    item8.append(item8Details, item8Price);
    menuSide.append(item8);

    let item9 = document.createElement("div");
    item9.classList.add("item");
    let item9Details = document.createElement("div");
    item9Details.classList.add("item-details");
    let item9Name = document.createElement("div");
    item9Name.textContent = "Choco Lava Sundae";
    let item9Desc = document.createElement("div");
    item9Desc.textContent = "Warm chocolate lava cake with ice cream and rich drizzle.";
    item9Details.append(item9Name, item9Desc);
    let item9Price = document.createElement("div");
    item9Price.textContent = "$5.99";
    item9Price.classList.add("item-price");
    item9.append(item9Details, item9Price);
    menuSide.append(item9);
    
    
    
    menuPage.append(emptySide, menuSide);
    content.append(menuPage);


}