import { data } from "../modules/services/api-fetch.mjs";
import { cart } from "../modules/components/cart-functions.mjs";
import { cartTemplate, removeEmptyCart } from "../modules/components/templates/cart-template.mjs";
import { cartEmptyTemplate } from "../modules/components/templates/cart-empty-template.mjs";
import { renderSearchBar } from "../modules/components/searchbar.mjs";
import { updateWishlist } from "../modules/components/wishlist-functions.mjs";
import { setFilterLinks } from "../modules/components/filter-by-platform.mjs";
import { RenderError } from "../modules/utils/errorHandling.mjs";
import { calculateTotalPriceAfter, calculateTotalPriceBefore } from "../modules/components/templates/cart-summary-template.mjs";

//* Render the cart
export async function renderCart() {
  try {
    const gamesArray = await data();

    if (!gamesArray) {
      throw new Error("Data received from API is empty or invalid");
    }

    if (cart.length !== 0) {
      // Removes empty cart template
      removeEmptyCart();
      // Renders the cart with the products
      cart.forEach((product) => {
        const findGame = gamesArray.find((game) => game.id === product.productID);
        const renderCart = cartTemplate(findGame, product);
      });
    } else if (cart.length === 0) {
      // If is nothing in the cart, it renders the empty cart template
      cartEmptyTemplate();
    }
  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error(error);
    }
  }
}

//* Update summary cart
export async function updateSummaryCart() {
  
  try {
    const gamesArray = await data();

    // Check if there is summary in the page.
    const summary = document.querySelector(".summary");
    if (summary === null) {
      return;
    }
    // Update price before discount
    const summaryPriceBefore = document.querySelector(".summary-price-before");
    const totalPriceBefore = calculateTotalPriceBefore(cart, gamesArray);
    summaryPriceBefore.textContent = `$${totalPriceBefore.toFixed(2)}`;

    // Update price after discount
    const summaryPriceAfter = document.querySelector(".summary-price-after");
    const totalPriceAfter = calculateTotalPriceAfter(cart, gamesArray);
    summaryPriceAfter.textContent = `$${totalPriceAfter.toFixed(2)}`;

    // Update discount
    const summaryPriceDiscount = document.querySelector(".summary-discount");
    let totalDiscount = totalPriceBefore - totalPriceAfter;
    summaryPriceDiscount.textContent = `-$${totalDiscount.toFixed(2)}`;
    
  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error(error);
    }
  }
}

function main() {
  renderCart();
  updateSummaryCart();
  setFilterLinks("../search/index.html");
  renderSearchBar();
  updateWishlist();
}

main();
