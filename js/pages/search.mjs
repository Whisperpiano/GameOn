import { data } from "../modules/services/api-fetch.mjs";
import { searchPageTemplate } from "../modules/components/templates/search-page-template.mjs";
import { renderSearchBar } from "../modules/components/searchbar.mjs";

export async function renderSearchPage() {
  try {
    const urlString = window.location.search;
    const searchPlatform = new URLSearchParams(urlString).get("platform");
    const headline = document.querySelector(".headline-search-span");
    headline.textContent = `${searchPlatform}`;
    const gamesArray = await data();

    const filteredGames = gamesArray.filter((game) => {
      return (
        game.platforms[searchPlatform] === true ||
        game.title.toLowerCase().includes(searchPlatform.toLowerCase()) ||
        game.genre.toLowerCase().includes(searchPlatform.toLowerCase())
      );
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

function filterByPlatform() {
  const filterPC = document.querySelector(".filter-pc");
  filterPC.href = "./index.html?platform=steam";
  const filterPlaystation = document.querySelector(".filter-playstation");
  filterPlaystation.href = "./index.html?platform=playstation";
  const filterXbox = document.querySelector(".filter-xbox");
  filterXbox.href = "./index.html?platform=xbox";
  const filterNintendo = document.querySelector(".filter-nintendo");
  filterNintendo.href = "./index.html?platform=nintendo";
  const filterXboxResponsive = document.querySelector(
    ".filter-xbox-responsive"
  );
}

function main() {
  renderSearchPage();
  filterByPlatform();
  renderSearchBar();
}

main();
