// let cart = JSON.parse(localStorage.getItem('cartData')) || [];

// export function increment(id) {
//   let selectedItemId = id;
//   let searchProduct = cart.find(
//     (product) => product.productID === selectedItemId
//   );

//   if (searchProduct === undefined) {
//     cart.push({
//       productID: selectedItemId,
//       quantity: 1,
//     });
//   } else {
//     searchProduct.quantity++;
//   }

//   localStorage.setItem('cartData', JSON.stringify(cart))

//   updateCart(selectedItemId);
// }

// export function decrement() {
//   let selectedItemId = id;
//   let searchProduct = cart.find(
//     (product) => product.productID === selectedItemId
//   );

//   if (searchProduct.quantity === 0) {
//     return;
//   } else {
//     searchProduct.quantity--;
//   }

//   updateCart(selectedItemId);
// }

// function updateCart(id) {
//   //   let cartItems = document.querySelector(".cart-items");
//   //   let cartTotal = document.querySelector(".cart-total");

//   //   cartItems.textContent = cart.length;
//   //   cartTotal.textContent = cart.length;
//   const cartSpan = document.querySelector("#cart-span");
//   let searchCart = cart.find((product) => product.productID === id);
//   calculateTotal();
// }

// let calculateTotal = () => {
//   const cartSpan = document.querySelector("#cart-span");
//   cartSpan.textContent = cart
//     .map((product) => product.quantity)
//     .reduce((x, y) => x + y, 0);
// };

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
  const qtyNumber = document.querySelector("#qty-number");
 
  

  let searchCart = cart.find((product) => product.productID === id);
  calculateTotal();
  cartSpan.textContent = calculateTotal();
  
 
}

export let calculateTotal = () => {
  
  return cart.map((product) => product.quantity).reduce((x, y) => x + y, 0);
};

updateCart();
