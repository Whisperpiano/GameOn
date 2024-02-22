// prettier-ignore
import { data } from "../modules/services/api-fetch.mjs";
import { gameTemplate } from "../modules/components/templates/bestseller-template.mjs";
import { mainSliderTemplate } from "../modules/components/templates/main-slider-template.mjs";
import { reviewsSliderTemplate } from "../modules/components/templates/reviews-template.mjs";
import { FetchError, RenderError } from "../modules/utils/errorHandling.mjs";
import { users } from "../modules/services/users-fetch.mjs";
import { randomTime } from "../modules/utils/random-time.mjs";
import { mainSliderResponsiveTemplate } from "../modules/components/templates/main-slider-responsive-template.mjs";
import { responsiveReviewsSliderTemplate } from "../modules/components/templates/reviews-responsive-template.mjs";
import { compareValues } from "../modules/utils/compare-values.mjs";
import { renderSearchBar } from "../modules/components/searchbar.mjs";
import { updateWishlist } from "../modules/components/wishlist-functions.mjs";
import { setFilterLinks, setResponsiveFilterLinks, showMoreAllButtons } from "../modules/components/filter-by-platform.mjs";

//* Renders the main slider with the favorite games from the API.
async function renderMainSlider() {
  try {
    const gamesArray = await data();

    if (!gamesArray) {
      throw new RenderError(
        "Can not render main slider. Data received from API is empty or invalid."
      );
    }

    const favoriteGames = gamesArray.filter((game) => game.favorite === true);

    for (const game of favoriteGames) {
      const mainSliderContainer = document.querySelector(".slider-header");
      const favoriteGameElement = mainSliderTemplate(game);
      mainSliderContainer.appendChild(favoriteGameElement);
    }
    
  } catch (error) {
    if (error instanceof RenderError || error instanceof FetchError || error instanceof DataError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error(error);
    }
  }
}

//* Renders the bestseller section with the first 6 games from the API.
async function renderBestseller() {
  try {
    const games = await data();
    const bestsellers = games.slice(0, 6);
    const bestsellerContainer = document.querySelector(".bestseller__container");

    bestsellers.forEach(({ title, image, id, price, discountedPrice, platforms }) => {
      const gameElement = gameTemplate(title, image, id, price, discountedPrice, platforms);
      bestsellerContainer.appendChild(gameElement);
    });
  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error(error);
    }
  }
}

//* Renders the new releases section with the next 4 games from the API.
async function renderNewReleases() {
  try {
    const gamesArray = await data();
    const newReleasesArray = gamesArray.slice(4, 10);
    const newReleasesContainer = document.querySelector(".newreleases__container");

    if (!gamesArray) {
      throw new RenderError(
        "Can not render new releases section. Data received from API is empty or invalid."
      );
    }

    newReleasesArray.forEach((game) => {
      const { title, image, id, price, discountedPrice, platforms } = game;
      const gameElement = gameTemplate(title, image, id, price, discountedPrice, platforms);
      newReleasesContainer.appendChild(gameElement);
    });

  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error("An unknown error occurred rendering new releases section.");
    }
  }
}

//* Renders the reviews section.
async function renderReviews() {
  try {
    // Fetches the games from the Noroff API.
    const gamesArray = await data();
    const reviewsArray = gamesArray.slice(6, 9);

    if (!gamesArray) {
      throw new RenderError(
        "Can not render reviews section. Data received from API is empty or invalid."
      );
    }
    // Fetches the users from the users.json file.
    const usersArray = await users();

    if (!usersArray) {
      throw new RenderError(
        "Can not render reviews section. Data received from Users-API is empty or invalid."
      );
    }

    // Adds a random time to each game, and sorts the games by time.
    const newObjectKey = "time";
    reviewsArray.map((game) => {
      game[newObjectKey] = randomTime();
    });
    let sortedArray = reviewsArray.sort(compareValues("time"));

    // Renders the reviews section.
    sortedArray.forEach((game) => {
      const reviewsSliderContainer = document.querySelector("#reviews-slider");
      const reviewElement = reviewsSliderTemplate(game);
      reviewsSliderContainer.appendChild(reviewElement);
    });
    // Patches to add user names
    const nameElements = document.querySelectorAll(".user-name");
    const reviewCommentElements = document.querySelectorAll(".review-comment");
    const reviewCommentResponsiveElements = document.querySelectorAll(".res-reviews__comment");

    usersArray.forEach((user, index) => {
      // In normal mode
      if (nameElements[index] && reviewCommentElements[index]) {
        nameElements[index].textContent = user.username;
        reviewCommentElements[index].textContent = user.video_game_comment;
      }
      // In responsive mode
      if (reviewCommentResponsiveElements[index]) {
        reviewCommentResponsiveElements[index].textContent = user.video_game_comment;
      }
    });

  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error(error);
    }
  }
}

//* Renders the responsive main slider with the favorite games from the API.
async function renderMainSliderResponsive() {
  try {
    const gamesArray = await data();
    const responsiveMainSliderContainer = document.querySelector('.res-slider__container');
    const favoriteGames = gamesArray.filter((game) => game.favorite === true);

    if (!gamesArray) {
      throw new RenderError(
        "Can not render responsive main slider . Data received from API is empty or invalid."
      );
    }

    favoriteGames.forEach((game) => {
      const favoriteGameElement = mainSliderResponsiveTemplate(game);
      responsiveMainSliderContainer.appendChild(favoriteGameElement);
    });

  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error(error);
    }
  }
}

//* Renders the responsive reviews.
async function renderReviewsSliderResponsive() {
  try {
    const gamesArray = await data();
    const reviewsArray = gamesArray.slice(4, 9);
    const responsiveReviewsSlideContainer = document.querySelector(".res-reviews__container")

    if (!gamesArray) {
      throw new RenderError(
        "Can not render responsive reviews section. Data received from API is empty or invalid."
      );
    }
    // Adds a random time to each game, and sorts the games by time.
    const newObjectKey = "time";
    reviewsArray.map((game) => {
      game[newObjectKey] = randomTime();
    });
    let sortedArray = reviewsArray.sort(compareValues("time"));

    // Renders the reviews section.
    sortedArray.forEach((game) => {
      const reviewElement = responsiveReviewsSliderTemplate(game);
      responsiveReviewsSlideContainer.appendChild(reviewElement);
    });

  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error(error);
    }
  }
}



//* Renders the main page.
function main() {
  renderMainSlider();
  renderBestseller();
  renderNewReleases();
  renderReviews();
  renderMainSliderResponsive();
  renderReviewsSliderResponsive();
  setFilterLinks("./search/index.html");
  setResponsiveFilterLinks("./search/index.html");
  showMoreAllButtons("./search/index.html");
  renderSearchBar();
  updateWishlist();
}

main();
