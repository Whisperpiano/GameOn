import { data } from "../modules/services/api-fetch.mjs";
import { cart, clearCart } from "../modules/components/cart-functions.mjs";
import { renderSearchBar } from "../modules/components/searchbar.mjs";
import { updateWishlist } from "../modules/components/wishlist-functions.mjs";
import { calculateTotalPriceAfter, calculateTotalPriceBefore } from "../modules/components/templates/cart-summary-template.mjs";
import { RenderError } from "../modules/utils/errorHandling.mjs";
import { setFilterLinks } from "../modules/components/filter-by-platform.mjs";

//* Render checkout page
async function renderCheckout() {
  
  try {
    const gamesArray = await data();
    // Checck if there is summary in the page.
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

//* Payment buttons
function payButtons() {
  const payWithCardBtn = document.querySelector(".pay-card-btn");
  payWithCardBtn.addEventListener("click", function (event) {
    const form = document.forms["pay-with-card-form"];

    if (form.checkValidity() !== false) {
      event.preventDefault();
      clearCart();
      window.location.href = "confirmation.html";
    } else {
      return;
    }
  });

  const payWithPaypalBtn = document.querySelector(".pay-paypal-btn");
  payWithPaypalBtn.addEventListener("click", clearCart);

  const payWithGoogleBtn = document.querySelector(".pay-google-btn");
  payWithGoogleBtn.addEventListener("click", clearCart);

  const payBtnResponsive = document.querySelector(".pay-btn-responsive");
  payBtnResponsive.addEventListener("click", clearCart);
}

function main() {
  renderCheckout();
  setFilterLinks("../../search/index.html");
  payButtons();
  renderSearchBar();
  updateWishlist();
}

main();
