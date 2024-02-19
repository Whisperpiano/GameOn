import { data } from "../modules/services/api-fetch.mjs";
import { searchPageTemplate } from "../modules/components/templates/search-page-template.mjs";

async function renderSearchPage() {
  try {
    const urlString = window.location.search;
    const searchPlatform = new URLSearchParams(urlString).get("platform");
    const gamesArray = await data();

    const filteredGames = gamesArray.filter((game) => {
      return game.platforms[searchPlatform] === true;
    });

    const renderSearch = filteredGames.map((game) => {
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
      return searchPageTemplate(
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
    });
  } catch (error) {
    console.log(error);
  }
}

function main() {
  renderSearchPage();
}

main();
