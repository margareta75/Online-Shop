import { ShoppingCart } from "./shoppingCart.js";

const clickEvent = (prodArray) => {
  const addToCartButtons = document.querySelectorAll(".add-item-button");
  console.log(prodArray);
  const newCart = new ShoppingCart();
  // Event listener for "add to cart" buttons
  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log("button value: " + event.target.value);
      let prodNum = event.target.value;
      let quantity = 0;
      if (prodNum == 0) {
        quantity = document.querySelector("#input-0").value;
        if (quantity != 0) {
          newCart.addItem(prodArray[0].name, quantity, prodArray[0].price);
          console.log(newCart);
        } else alert("Choose quantity of products!");
      } else if (prodNum == 1) {
        quantity = document.querySelector("#input-1").value;
        if (quantity != 0) {
          newCart.addItem(prodArray[1].name, quantity, prodArray[1].price);
          console.log(newCart);
        } else alert("Choose quantity of products!");
      } else if (prodNum == 2) {
        quantity = document.querySelector("#input-2").value;
        if (quantity != 0) {
          newCart.addItem(prodArray[2].name, quantity, prodArray[2].price);
          console.log(newCart);
        } else alert("Choose quantity of products!");
      } else if (prodNum == 3) {
        quantity = document.querySelector("#input-3").value;
        if (quantity != 0) {
          newCart.addItem(prodArray[3].name, quantity, prodArray[3].price);
          console.log(newCart);
        } else alert("Choose quantity of products!");
      } else if (prodNum == 4) {
        quantity = document.querySelector("#input-4").value;
        if (quantity != 0) {
          newCart.addItem(prodArray[4].name, quantity, prodArray[4].price);
          console.log(newCart);
        } else alert("Choose quantity of products!");
      } else if (prodNum == 5) {
        quantity = document.querySelector("#input-5").value;
        if (quantity != 0) {
          newCart.addItem(prodArray[5].name, quantity, prodArray[5].price);
          console.log(newCart);
        } else alert("Choose quantity of products!");
      }
    });
  });
};

export { clickEvent };
