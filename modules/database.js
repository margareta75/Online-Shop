import { displayProducts } from "./display.js";

const databaseUrl =
  "https://online-shop-76d14-default-rtdb.europe-west1.firebasedatabase.app/products.json";


// Function to get data from Firebase
const getData = () => {
  fetch(databaseUrl)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      displayProducts(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getData };