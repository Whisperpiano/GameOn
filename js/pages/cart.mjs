import { data } from "../modules/services/api-fetch.mjs";
import { cart } from "../modules/components/cart-functions.mjs";
import {
  cartTemplate,
  removeEmptyCart,
} from "../modules/components/templates/cart-template.mjs";
import { cartEmptyTemplate } from "../modules/components/templates/cart-empty-template.mjs";
import { renderSearchBar } from "../modules/components/searchbar.mjs";
import { updateWishlist } from "../modules/components/wishlist-functions.mjs";

export async function renderCart() {
  try {
    const gamesArray = await data();

    if (cart.length !== 0) {
      removeEmptyCart();

      cart.map((product) => {
        const { productID, quantity } = product;
        const findGame = gamesArray.find((game) => game.id === productID);
        const {
          id,
          title,
          description,
          genre,
          released,
          ageRating,
          price,
          discountedPrice,
          onSale,
          image,
          platforms,
        } = findGame;
        const renderCart = cartTemplate(findGame, product);
      });
    } else if (cart.length === 0) {
      cartEmptyTemplate();
    }
  } catch (error) {
    console.log(error);
  }
}

export async function renderSummaryCart() {
  const summary = document.querySelector(".summary");

  try {
    const gamesArray = await data();

    if (summary === null) {
      return;
    }

    const summaryPriceBefore = document.querySelector(".summary-price-before");
    const summaryPriceAfter = document.querySelector(".summary-price-after");
    const summaryPriceDiscount = document.querySelector(".summary-discount");

    let totalPriceBefore = cart
      .map((product) => {
        const { productID, quantity } = product;
        const findGame = gamesArray.find((game) => game.id === productID);

        return quantity * findGame.price;
      })
      .reduce((x, y) => x + y, 0);

    summaryPriceBefore.textContent = `$${totalPriceBefore.toFixed(2)}`;

    let totalPriceAfter = cart
      .map((product) => {
        const { productID, quantity } = product;
        const findGame = gamesArray.find((game) => game.id === productID);

        return quantity * findGame.discountedPrice;
      })
      .reduce((x, y) => x + y, 0);

    summaryPriceAfter.textContent = `$${totalPriceAfter.toFixed(2)}`;

    let totalDiscount = totalPriceBefore - totalPriceAfter;
    summaryPriceDiscount.textContent = `-$${totalDiscount.toFixed(2)}`;
  } catch (error) {
    console.log(error);
  }
}
function filterByPlatform() {
  const filterPC = document.querySelector(".filter-pc");
  filterPC.href = "../search/index.html?platform=steam";
  const filterPlaystation = document.querySelector(".filter-playstation");
  filterPlaystation.href = "../search/index.html?platform=playstation";
  const filterXbox = document.querySelector(".filter-xbox");
  filterXbox.href = "../search/index.html?platform=xbox";
  const filterNintendo = document.querySelector(".filter-nintendo");
  filterNintendo.href = "../search/index.html?platform=nintendo";
}

function main() {
  renderCart();
  renderSummaryCart();
  filterByPlatform();
  renderSearchBar();
  updateWishlist();
}

main();
