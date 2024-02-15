import { data } from "../modules/services/api-fetch.mjs";
import { cart } from "../modules/components/buttons.mjs";
import { cartTemplate, removeEmptyCart } from "../modules/components/templates/cart-template.mjs";
import { cartEmptyTemplate } from "../modules/components/templates/cart-empty-template.mjs";

function updateCart(id) {
    const cartSpan = document.querySelector("#cart-span");
    const itemsSpan = document.querySelector('#items-span');
  
    let searchCart = cart.find((product) => product.productID === id);
    let total = calculateTotal();
    cartSpan.textContent = calculateTotal();
    itemsSpan.textContent = `( ${calculateTotal()} items )`;
  
  }
  
  let calculateTotal = () => {
    return cart.map((product) => product.quantity).reduce((x, y) => x + y, 0);
  };
  
  updateCart();

 async function renderCart() {
    try {
      const gamesArray = await data();
      
      if (cart.length !== 0) {

        removeEmptyCart();

        cart.map((product) => {
          const { productID, quantity } = product;
          const findGame = gamesArray.find((game) => game.id === productID);
          const { id, title, description, genre, released, ageRating, price, discountedPrice, onSale, image, platforms } = findGame;
          const renderCart = cartTemplate(findGame, product);
          updateCart()
        }) 

      } else {
        cartEmptyTemplate();
      }
    } catch (error) {
      console.error("An unknown error occurred rendering cart.");
    }
 }

 function main() {
  renderCart();
 }

 main();