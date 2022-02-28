const clickEvent = () => {
  const addToCartButtons = document.querySelectorAll(".add-item-button");

  // Event listener for "add to cart" buttons
  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log("button value (customId for product): " + event.target.value);
    });
  });
};

export { clickEvent };
