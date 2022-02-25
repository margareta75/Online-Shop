const databaseUrl = "https://online-shop-76d14-default-rtdb.europe-west1.firebasedatabase.app/products.json";

const getData = () => {
    fetch(databaseUrl)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

export {getData};