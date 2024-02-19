import { data } from "../modules/services/api-fetch.mjs";
import { cart } from "../modules/components/cart-functions.mjs";
import {
  cartTemplate,
  removeEmptyCart,
} from "../modules/components/templates/cart-template.mjs";
import { cartEmptyTemplate } from "../modules/components/templates/cart-empty-template.mjs";

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

async function renderSearchBar() {
  const searchBarBtn = document.querySelector("#searchbar-btn");
  const searchInput = document.querySelector("#searchbar-input");

  try {
    const gamesArray = await data();

    if (!searchInput) {
      return;
    }

    searchBarBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const searchValue = searchInput.value;
      redirectToSearchPage(searchValue);
    });

    searchInput.addEventListener("input", (e) => {
      const searchValue = e.target.value.toLowerCase();
      const filteredGames = filterGames(gamesArray, searchValue);
    });
  } catch (error) {
    console.error(error);
  }
}

function filterGames(gamesArray, searchValue) {
  return gamesArray.filter((game) => {
    return (
      game.title.toLowerCase().includes(searchValue) ||
      game.genre.toLowerCase().includes(searchValue)
    );
  });
}

function redirectToSearchPage(searchValue) {
  window.location.href = `../search/index.html?platform=${searchValue.toLowerCase()}`;
}

function main() {
  renderCart();
  renderSummaryCart();
  filterByPlatform();
  renderSearchBar();
}

main();
