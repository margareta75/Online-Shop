import { clickEvent } from "./eventsCart.js";

const newDiv = document.querySelector("#new-container");

// Function to display products in HTML
const displayProducts = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // Get values
    let imgSrc = arr[i].imgSrc;
    let name = arr[i].name;
    let price = arr[i].price;
    let stock = arr[i].stockBalance;
    let itemId = arr[i].customId;

    // Create elements
    let div = document.createElement("div"); //skapa div där products skall synas
    let imgNew = document.createElement("img");
    let nameNew = document.createElement("p");
    let priceNew = document.createElement("p");
    let stockNew = document.createElement("p");
    let inputNew = document.createElement("input");
    let buttonNew = document.createElement("button");

    // Set values on elements
    imgNew.src = imgSrc;
    nameNew.innerText = name;
    priceNew.innerText = price + " kr";
    stockNew.innerText = "Stock balance: " + stock;
    inputNew.type = "number";
    inputNew.value = 0;
    inputNew.id = `input-${itemId}`;
    inputNew.min = 0;
    inputNew.max = `${stock}`;
    buttonNew.innerText = "add to cart";
    buttonNew.setAttribute("value", itemId);

    // Add classes on elements
    nameNew.className = "p-item";
    priceNew.className = "p-item";
    stockNew.className = "p-item";
    buttonNew.className = "add-item-button";
    div.className = "item-container";

    // Add elements to div
    div.appendChild(imgNew);
    div.appendChild(nameNew);
    div.appendChild(priceNew);
    div.appendChild(stockNew);
    div.appendChild(inputNew);
    div.appendChild(buttonNew);
    newDiv.appendChild(div);
  }
  clickEvent(arr);
};

export { displayProducts };
