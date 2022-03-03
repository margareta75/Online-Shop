import { getData } from "./modules/database.js";
// import { ShoppingCart } from "./modules/shoppingCart.js"
import { Product } from "./modules/productClass.js";

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
  
getData();
