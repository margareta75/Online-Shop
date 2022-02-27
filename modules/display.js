const newDiv = document.querySelector('#newContainer')


// Function to display products in HTML
const displayProducts = (arr) => {

  for (let i = 0; i < arr.length; i++); {

    let img = arr[i].imgSrc;
    let name = arr[i].name;
    let price = arr[i].price;
    let stock = arr[i].stockBalance;

    let div = document.createElement('div');//skapa div där products skall synas


    let imgNew = document.createElement('img')
    let nameNew = document.createElement('p');
    let priceNew = document.createElement('p')
    let stockNew = document.createElement('p');


    imgNew.src = img;
    nameNew.innerText = name
    priceNew.innerText = price + ' kr'
    stockNew.innerText = 'Stock balance: ' + stock


    div.className = 'item-containerNew'

    div.appendChild(imgNew)
    div.appendChild(nameNew)
    div.appendChild(priceNew)
    div.appendChild(stockNew)
    newDiv.appendChild(div)
  }

};




export { displayProducts };








