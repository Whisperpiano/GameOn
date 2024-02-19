import { data } from "../modules/services/api-fetch.mjs";
import { cart, clearCart } from "../modules/components/cart-functions.mjs";

export async function renderCheckout() {
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

function payButtons() {
  const payWithCardBtn = document.querySelector(".pay-card-btn");
  payWithCardBtn.addEventListener("click", clearCart);

  const payWithPaypalBtn = document.querySelector(".pay-paypal-btn");
  payWithPaypalBtn.addEventListener("click", clearCart);

  const payWithGoogleBtn = document.querySelector(".pay-google-btn");
  payWithGoogleBtn.addEventListener("click", clearCart);

  const payBtnResponsive = document.querySelector(".pay-btn-responsive");
  payBtnResponsive.addEventListener("click", clearCart);
}

function filterByPlatform() {
  const filterPC = document.querySelector(".filter-pc");
  filterPC.href = "../../search/index.html?platform=steam";
  const filterPlaystation = document.querySelector(".filter-playstation");
  filterPlaystation.href = "../../search/index.html?platform=playstation";
  const filterXbox = document.querySelector(".filter-xbox");
  filterXbox.href = "../../search/index.html?platform=xbox";
  const filterNintendo = document.querySelector(".filter-nintendo");
  filterNintendo.href = "../../search/index.html?platform=nintendo";
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
  window.location.href = `../../search/index.html?platform=${searchValue.toLowerCase()}`;
}

function main() {
  renderCheckout();
  filterByPlatform();
  payButtons();
  renderSearchBar();
}

main();
