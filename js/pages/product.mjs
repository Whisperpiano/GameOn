import { data } from "../modules/services/api-fetch.mjs";
import { RenderError } from "../modules/utils/errorHandling.mjs";
import { productPanelTemplate } from "../modules/components/templates/product-banner-template.mjs";
import { productBannerResponsiveTemplate } from "../modules/components/templates/product-banner-responsive-template.mjs";
import { users } from "../modules/services/users-fetch.mjs";
import { oneReviewTemplate } from "../modules/components/templates/product-page-reviews-template.mjs";
import { informationDropDown } from "../modules/components/templates/product-info-dropdown.mjs";
import { calculateTotal } from "../modules/components/cart-functions.mjs";
import { renderSearchBar } from "../modules/components/searchbar.mjs";

async function renderProductBannerTemplate() {
  try {
    const urlString = window.location.search;
    const productID = new URLSearchParams(urlString).get("id");
    const gamesArray = await data();
    const gameById = gamesArray.find((game) => game.id === productID);

    if (!gamesArray) {
      throw new RenderError(
        "Can not render product panel. Data received from API is empty or invalid."
      );
    }

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
    } = gameById;

    const renderGame = productPanelTemplate(
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
      platforms
    );

    return renderGame;
  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`RenderError: ${error.message}`);
    } else {
      console.error("An unknown error occurred rendering product panel.");
    }
  }
}

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
    } = gameById;

    const renderGame = productBannerResponsiveTemplate(
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
      platforms
    );

    return renderGame;
  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`RenderError: ${error.message}`);
    } else {
      console.error(
        "An unknown error occurred rendering responsive product panel."
      );
    }
  }
}

async function renderProductReviews() {
  try {
    const userReviewContainer = document.querySelectorAll(".user-review");
    const usersArray = await users();

    if (!usersArray) {
      throw new RenderError(
        "Can not render product reviews. Data received from Users-API is empty or invalid."
      );
    }

    const usersSlicedArray = usersArray.slice(0, 4);

    usersSlicedArray.map((user) => {
      const {
        username,
        comment_title,
        video_game_comment,
        verified_purchase,
        avatar,
      } = user;
      const userReview = oneReviewTemplate(
        username,
        comment_title,
        video_game_comment,
        verified_purchase,
        avatar
      );
    });
  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`RenderError: ${error.message}`);
    } else {
      console.error("An unknown error occurred rendering product reviews.");
    }
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
  renderProductBannerTemplate();
  renderProductBannerResponsiveTemplate();
  informationDropDown();
  filterByPlatform();
  calculateTotal();
  renderSearchBar();
  //   renderProductReviews();
}

main();
