const dbUrl =
  "https://online-shop-76d14-default-rtdb.europe-west1.firebasedatabase.app/";


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
          //console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
  
  export { Product };