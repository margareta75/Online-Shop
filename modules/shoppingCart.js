// * Egenskaper
//  - Produkter som lagts till i bagen 
// * Metoder
//  - Lägg till produkt
//  - Ta bort produkt
//  - Räkna ut totala summan
//  - Köp ( tar bara bort alla produkter)

// Produkterna:
// * Metoder
//  - Uppdatera lagersaldo 
// Ni behöver inte uppdatera firebase utan endast hämta infon.
// Både när man lägger till eller tar bort en produkt ur shoppingbagen. 
// Den här metoden ska även varna om man försöker köpa fler produkter än vad som finns på lager.

console.log(' ***** test shopping cart ***** ');

class ShoppingCart {
  // Constructor for ShoppingCart
  constructor() {
    this.total = 0;
    this.items = [];
  }

  // Function to add item to cart
  addItem(itemName, quantity, price) {
    // Add cost of added items to the current value of total
    this.total += quantity * price;
    // Add item to the items array
    this.items[itemName] = quantity;
    console.log(this.total);
    console.log(this.items);
  }

  // Function to delete item from cart
  removeItem(itemName, quantity, price) {
    // Subtract cost of removed items from the current value of total 
    this.total -= quantity * price;
    // Remove item from the items array
    this.items[itemName] = this.items[itemName] - quantity;
    console.log(this.total);
    console.log(this.items);
  }

  // Function to count total amount
  totalAmount() {
    console.log(this.total);
    return this.total;
  }

  // Function to delete order
  deleteOrder() {
    this.total = 0;
    this.items = [];
  }

  // Function to purchase order / just deletes order for now
  purchaseOrder() {
    this.total = 0;
    this.items = [];
  }

}

const newCart = new ShoppingCart();
newCart.addItem("Luftig klänning", 1, 250);
newCart.addItem("Ribbad klänning", 1, 450);


console.log(newCart);

export { ShoppingCart };

