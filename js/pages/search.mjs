import { data } from "../modules/services/api-fetch.mjs";
import { searchPageTemplate } from "../modules/components/templates/search-page-template.mjs";
import { renderSearchBar } from "../modules/components/searchbar.mjs";
import { updateWishlist } from "../modules/components/wishlist-functions.mjs";
import { setFilterLinks } from "../modules/components/filter-by-platform.mjs";

export async function renderSearchPage() {
  try {
    // Get product ID from URL
    const urlString = window.location.search;
    const searchPlatform = new URLSearchParams(urlString).get("platform");
    const headline = document.querySelector(".headline-search-span");
    const gamesArray = await data();

    // Update headline
    headline.textContent = `${searchPlatform ? searchPlatform : ""}`;

    // Filter games by title, genre, or tags
    const filteredGames = gamesArray.filter((game) => {
      return (
        searchPlatform &&
        (game.platforms[searchPlatform] === true ||
          game.title.toLowerCase().includes(searchPlatform.toLowerCase()) ||
          game.genre.toLowerCase().includes(searchPlatform.toLowerCase()) ||
          game.tags[0].toLowerCase().includes(searchPlatform.toLowerCase()))
      );
    });
    
    // Render search page
    const renderSearch = filteredGames.forEach((game) => {
      return searchPageTemplate(game);
    });

  } catch (error) {
    if (error instanceof RenderError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error(error);
    }
  }
}

function main() {
  renderSearchPage();
  setFilterLinks("./index.html");
  renderSearchBar();
  updateWishlist();
}

main();
