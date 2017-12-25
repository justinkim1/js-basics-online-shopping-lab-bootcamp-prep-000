var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.random() * 101
 item = 1 * price
 cart.push(item)
}

function viewCart() {
  if (cart.length === 0){
  return "Your shopping cart is empty"
  }
  else (i = 0; i < cart.length; i++){
    
  }
  return `In your cart, you have ${items} at ${price}`
}

function total() {
    return cart[] * price
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  if cart has something 
  return `Your total cost is ${total}, which will be charged to the card ${cardNumber}
  
  if
  return "Sorry, we don't have a credit card on file for you."
}
