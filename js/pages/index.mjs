import { data } from "../modules/services/api-fetch.mjs";
import {
  gameTemplate,
  bestsellerContainer,
} from "../modules/components/templates/bestseller-template.mjs";
import {
  mainSliderTemplate,
  mainSliderContainer,
} from "../modules/components/templates/main-slider-template.mjs";
import {
  reviewsSliderTemplate,
  reviewsSliderContainer,
} from "../modules/components/templates/reviews-template.mjs";
import { RenderError } from "../modules/utils/errorHandling.mjs";
import { users } from "../modules/services/users-fetch.mjs";
import { randomTime } from "../modules/utils/random-time.mjs";
import {
  mainSliderResponsiveTemplate,
  responsiveMainSliderContainer,
} from "../modules/components/templates/main-slider-responsive-template.mjs";
import {
  responsiveReviewsSlideContainer,
  responsiveReviewsSliderTemplate,
} from "../modules/components/templates/reviews-responsive-template.mjs";
import { compareValues } from "../modules/utils/compare-values.mjs";
import { renderSearchBar } from "../modules/components/searchbar.mjs";

async function renderMainSlider() {
  try {
    const gamesArray = await data();

    if (!gamesArray) {
      throw new RenderError(
        "Can not render main slider. Data received from API is empty or invalid."
      );
    }

    const favoriteGames = gamesArray.filter((game) => game.favorite === true);

    favoriteGames.map((game) => {
      const {
        title,
        image,
        genre,
        description,
        price,
        discountedPrice,
        onSale,
        id,
        platforms,
      } = game;
      const favoriteGameElement = mainSliderTemplate(
        title,
        description,
        image,
        genre,
        price,
        discountedPrice,
        onSale,
        id,
        platforms
      );
      mainSliderContainer.appendChild(favoriteGameElement);
    });
  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`RenderError: ${error.message}`);
    } else {
      console.error("An unknown error occurred rendering main slider..");
    }
  }
}
async function renderBestseller() {
  try {
    const gamesArray = await data();

    if (!gamesArray) {
      throw new RenderError(
        "Can not render bestseller section. Data received from API is empty or invalid."
      );
    }

    const bestsellerArray = gamesArray.slice(0, 6);

    bestsellerArray.map((game) => {
      const { title, image, id, price, discountedPrice, platforms } = game;
      const gameElement = gameTemplate(
        title,
        image,
        id,
        price,
        discountedPrice,
        platforms
      );
      bestsellerContainer.appendChild(gameElement);
    });
  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`RenderError: ${error.message}`);
    } else {
      console.error("An unknown error occurred rendering bestseller section.");
    }
  }
}

async function renderNewReleases() {
  const newReleasesContainer = document.querySelector(
    ".newreleases__container"
  );
  try {
    const gamesArray = await data();

    if (!gamesArray) {
      throw new RenderError(
        "Can not render new releases section. Data received from API is empty or invalid."
      );
    }

    const newReleasesArray = gamesArray.slice(4, 10);

    newReleasesArray.map((game) => {
      const { title, image, id, price, discountedPrice, platforms } = game;
      const gameElement = gameTemplate(
        title,
        image,
        id,
        price,
        discountedPrice,
        platforms
      );
      newReleasesContainer.appendChild(gameElement);
    });
  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`RenderError: ${error.message}`);
    } else {
      console.error(
        "An unknown error occurred rendering new releases section."
      );
    }
  }
}

async function renderReviews() {
  try {
    const gamesArray = await data();

    if (!gamesArray) {
      throw new RenderError(
        "Can not render reviews section. Data received from API is empty or invalid."
      );
    }

    const reviewsArray = gamesArray.slice(6, 9);

    const usersArray = await users();

    if (!usersArray) {
      throw new RenderError(
        "Can not render reviews section. Data received from Users-API is empty or invalid."
      );
    }

    const newObjectKey = "time";
    reviewsArray.map((game) => {
      game[newObjectKey] = randomTime();
    });

    let sortedArray = reviewsArray.sort(compareValues("time"));

    // Renders the reviews section.
    sortedArray.map((game) => {
      const { title, image, id, time } = game;
      const reviewElement = reviewsSliderTemplate(title, image, id, time);
      reviewsSliderContainer.appendChild(reviewElement);
    });
    // Patches to add user names
    const name = document.querySelectorAll(".user-name");
    for (let i = 0; i < name.length; i++) {
      name[i].textContent = usersArray[i].username;
    }
  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`RenderError: ${error.message}`);
    } else {
      console.error("An unknown error occurred rendering reviews section.");
    }
  }
}

async function renderMainSliderResponsive() {
  try {
    const gamesArray = await data();

    if (!gamesArray) {
      throw new RenderError(
        "Can not render responsive main slider . Data received from API is empty or invalid."
      );
    }

    const favoriteGames = gamesArray.filter((game) => game.favorite === true);

    favoriteGames.map((game) => {
      const { title, image, id } = game;
      const favoriteGameElement = mainSliderResponsiveTemplate(
        title,
        image,
        id
      );
      responsiveMainSliderContainer.appendChild(favoriteGameElement);
    });
  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`RenderError: ${error.message}`);
    } else {
      console.error(
        "An unknown error occurred rendering responsive main slider."
      );
    }
  }
}

async function renderReviewsSliderResponsive() {
  try {
    const gamesArray = await data();

    if (!gamesArray) {
      throw new RenderError(
        "Can not render responsive reviews section. Data received from API is empty or invalid."
      );
    }

    const reviewsArray = gamesArray.slice(4, 9);

    const newObjectKey = "time";
    reviewsArray.map((game) => {
      game[newObjectKey] = randomTime();
    });

    let sortedArray = reviewsArray.sort(compareValues("time"));

    sortedArray.map((game) => {
      const { title, image, id, time } = game;
      const reviewElement = responsiveReviewsSliderTemplate(
        title,
        image,
        id,
        time
      );
      responsiveReviewsSlideContainer.appendChild(reviewElement);
    });
  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`RenderError: ${error.message}`);
    } else {
      console.error(
        "An unknown error occurred rendering responsive reviews section."
      );
    }
  }
}

function filterByPlatform() {
  const filterPC = document.querySelector(".filter-pc");
  filterPC.href = "./search/index.html?platform=steam";
  const filterPlaystation = document.querySelector(".filter-playstation");
  filterPlaystation.href = "./search/index.html?platform=playstation";
  const filterXbox = document.querySelector(".filter-xbox");
  filterXbox.href = "./search/index.html?platform=xbox";
  const filterNintendo = document.querySelector(".filter-nintendo");
  filterNintendo.href = "./search/index.html?platform=nintendo";
  const filterXboxResponsive = document.querySelector(
    ".filter-xbox-responsive"
  );
  filterXboxResponsive.href = "./search/index.html?platform=xbox";
  const filterPlaystationResponsive = document.querySelector(
    ".filter-playstation-responsive"
  );
  filterPlaystationResponsive.href = "./search/index.html?platform=playstation";
  const filterPCResponsive = document.querySelector(".filter-pc-responsive");
  filterPCResponsive.href = "./search/index.html?platform=steam";
  const filterNintendoResponsive = document.querySelector(
    ".filter-nintendo-responsive"
  );
  filterNintendoResponsive.href = "./search/index.html?platform=nintendo";
}

function main() {
  renderMainSlider();
  renderBestseller();
  renderNewReleases();
  renderReviews();
  renderMainSliderResponsive();
  renderReviewsSliderResponsive();
  filterByPlatform();
  renderSearchBar();
}

main();
