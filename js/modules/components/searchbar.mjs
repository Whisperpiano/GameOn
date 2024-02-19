import { data } from "../services/api-fetch.mjs";

export async function renderSearchBar() {
  const searchBar = document.querySelector(".search-bar");
  const searchInput = document.querySelector(".search-input");

  try {
    const gamesArray = await data();

    if (searchBar === null) {
      return;
    }

    searchInput.addEventListener("input", (e) => {
      const searchValue = e.target.value.toLowerCase();

      const filteredGames = gamesArray.filter((game) => {
        return game.title.toLowerCase().includes(searchValue);
      });

      renderGames(filteredGames);
    });
  } catch (error) {
    console.log(error);
  }
}
