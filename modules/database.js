import { displayProducts } from "./display.js";

const databaseUrl =
  "https://online-shop-76d14-default-rtdb.europe-west1.firebasedatabase.app/products.json";

const dbUrl =
  "https://online-shop-76d14-default-rtdb.europe-west1.firebasedatabase.app/";

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

class Product {
  // Constructor for Product
  constructor(customId, name, price, imgSrc, stockBalance) {
    this.customId = customId;
    this.name = name;
    this.price = price;
    this.imgSrc = imgSrc;
    this.stockBalance = stockBalance;
  }

  // Function for adding new products to database
  addProductToDatabase = () => {
    let prod = {
      name: `${this.name}`,
      customId: `${this.customId}`,
      price: `${this.price}`,
      imgSrc: `${this.imgSrc}`,
      stockBalance: `${this.stockBalance}`,
    };

    const headerObject = {
      "Content-type": "application/json; charset=UTF-8",
    };

    const init = {
      method: "PUT",
      body: JSON.stringify(prod),
      headers: headerObject,
    };

    // Fetch with database and add new player with custom id to database
    fetch(dbUrl + `/products/${prod.customId}.json`, init)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

// Creating 6 different products with constructor
const product1 = new Product(
  "0",
  "Draperad skjortklänning",
  299,
  "img/draperad_skjortklanning.jpg",
  2
);
const product2 = new Product(
  "1",
  "Luftig klänning",
  199,
  "img/luftig_klanning.jpg",
  3
);
const product3 = new Product(
  "2",
  "Luftig klänning med blommor",
  199,
  "img/luftig_klanning_2.jpg",
  3
);
const product4 = new Product(
  "3",
  "Ribbad klänning",
  349,
  "img/ribbad_klanning.jpg",
  4
);
const product5 = new Product(
  "4",
  "Skjortklänning ",
  199,
  "img/skjortklanning.jpg",
  3
);
const product6 = new Product(
  "5",
  "Stickad klänning",
  399,
  "img/stickad_klanning.jpg",
  3
);

// Adding products to database
product1.addProductToDatabase();
product2.addProductToDatabase();
product3.addProductToDatabase();
product4.addProductToDatabase();
product5.addProductToDatabase();
product6.addProductToDatabase();

export { getData };