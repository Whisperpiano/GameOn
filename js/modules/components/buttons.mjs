import { cartEmptyTemplate } from "./templates/cart-empty-template.mjs";

export let cart = JSON.parse(localStorage.getItem("cartData")) || [];

export function increment(id) {
  let selectedItemId = id;
  let searchProduct = cart.find(
    (product) => product.productID === selectedItemId
  );

  if (searchProduct === undefined) {
    cart.push({
      productID: selectedItemId,
      quantity: 1,
    });
  } else {
    searchProduct.quantity++;
  }

  localStorage.setItem("cartData", JSON.stringify(cart));
  updateCart(selectedItemId);

}

export function decrement(id) {
  let selectedItemId = id;
  let searchProduct = cart.find(
    (product) => product.productID === selectedItemId
  );

  if (searchProduct.quantity === 0 || searchProduct === undefined) {
    return;
  } else {
    searchProduct.quantity--;
  }

  cart = cart.filter((product) => product.quantity > 0);
  localStorage.setItem("cartData", JSON.stringify(cart));
  updateCart(selectedItemId);
}

export function updateCart(id) {
  const cartSpan = document.querySelector("#cart-span");
  const itemsSpan = document.querySelector('#items-span');
 
  

  let searchCart = cart.find((product) => product.productID === id);
  calculateTotal();
  cartSpan.textContent = calculateTotal();
  if (itemsSpan) {
    itemsSpan.textContent = `( ${calculateTotal()} items )`;
  }
 
  
  
 
}

export let calculateTotal = () => {
  
  return cart.map((product) => product.quantity).reduce((x, y) => x + y, 0);
};

updateCart();
