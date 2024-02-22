import { data } from "../modules/services/api-fetch.mjs";
import { RenderError } from "../modules/utils/errorHandling.mjs";
import { productPanelTemplate } from "../modules/components/templates/product-banner-template.mjs";
import { productBannerResponsiveTemplate } from "../modules/components/templates/product-banner-responsive-template.mjs";
import { users } from "../modules/services/users-fetch.mjs";
import { informationDropDown } from "../modules/components/templates/product-info-dropdown.mjs";
import { calculateTotal } from "../modules/components/cart-functions.mjs";
import { renderSearchBar } from "../modules/components/searchbar.mjs";
import { updateWishlist } from "../modules/components/wishlist-functions.mjs";
import { likeDislikeBtns } from "../modules/components/like-dislike-btns.mjs";
import { productSliderFunctions } from "../modules/components/product-slider-functions.mjs";
import { setFilterLinks } from "../modules/components/filter-by-platform.mjs";
import { updateUserReviews } from "../modules/components/product-page-reviews.mjs";


//* Renders the product banner with the selected game from the API.
async function renderProductBannerTemplate() {
  try {
    // Get product ID from URL
    const urlString = window.location.search;
    const productID = new URLSearchParams(urlString).get("id");
    const gamesArray = await data();
    const gameById = gamesArray.find((game) => game.id === productID);

    if (!gamesArray) {
      throw new RenderError(
        "Can not render product panel. Data received from API is empty or invalid."
      );
    }

    productPanelTemplate(gameById);
   
  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error(error);
    }
  }
}

//* Renders the responsive product banner with the selected game from the API.
async function renderProductBannerResponsiveTemplate() {
  try {
    const urlString = window.location.search;
    const productID = new URLSearchParams(urlString).get("id");
    const gamesArray = await data();
    const gameById = gamesArray.find((game) => game.id === productID);

    if (!gamesArray) {
      throw new RenderError(
        "Can not render responsive product panel. Data received from API is empty or invalid."
      );
    }

    productBannerResponsiveTemplate(gameById);

  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error(error);
    }
  }
}

//* Renders the product reviews.
async function renderProductReviews() {
  try {
    const usersArray = await users();

    if (!usersArray) {
      throw new RenderError(
        "Can not render product reviews. Data received from Users-API is empty or invalid."
      );
    }

    updateUserReviews(usersArray);

  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error(error);
    }
  }
}

function main() {
  renderProductBannerTemplate();
  productSliderFunctions();
  setFilterLinks("../search/index.html");
  renderProductBannerResponsiveTemplate();
  informationDropDown();
  calculateTotal();
  renderSearchBar();
  renderProductReviews();
  updateWishlist();
  likeDislikeBtns();
}

main();
