import { data } from "../modules/services/api-fetch.mjs";
import { cart } from "../modules/components/buttons.mjs";
import { cartTemplate, removeEmptyCart } from "../modules/components/templates/cart-template.mjs";
import { cartEmptyTemplate } from "../modules/components/templates/cart-empty-template.mjs";

export async function renderCart() {
    try {
      const gamesArray = await data();
      
      if (cart.length !== 0) {

        removeEmptyCart();

        cart.map((product) => {
          const { productID, quantity } = product;
          const findGame = gamesArray.find((game) => game.id === productID);
          const { id, title, description, genre, released, ageRating, price, discountedPrice, onSale, image, platforms } = findGame;
          const renderCart = cartTemplate(findGame, product);
        }) 

      } else if (cart.length === 0){
        cartEmptyTemplate();
    
      }
    } catch (error) {
      console.log(error)
    }
 }

 function main() {
  renderCart();
 }

 main();