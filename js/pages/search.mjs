import { data } from "../modules/services/api-fetch.mjs";
import { searchPageTemplate } from "../modules/components/templates/search-page-template.mjs";

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
  window.location.href = `./index.html?platform=${searchValue.toLowerCase()}`;
}

function main() {
  renderSearchPage();
  filterByPlatform();
  renderSearchBar();
}

main();
