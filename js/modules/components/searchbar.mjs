import { data } from "../services/api-fetch.mjs";

export async function renderSearchBar() {
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
  if (window.location.href.includes("home/index.html")) {
    window.location.href = `./search/index.html?platform=${searchValue.toLowerCase()}`;
  }
  if (
    window.location.href.includes("product/index.html") ||
    window.location.href.includes("cart/index.html")
  ) {
    window.location.href = `../search/index.html?platform=${searchValue.toLowerCase()}`;
  }
  if (
    window.location.href.includes("checkout/confirmation.html") ||
    window.location.href.includes("checkout/index.html")
  ) {
    window.location.href = `../../search/index.html?platform=${searchValue.toLowerCase()}`;
  }
  if (window.location.href.includes("search/index.html")) {
    window.location.href = `./index.html?platform=${searchValue.toLowerCase()}`;
  }
}

renderSearchBar();
