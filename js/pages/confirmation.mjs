import { setFilterLinks } from "../modules/components/filter-by-platform.mjs";
import { renderSearchBar } from "../modules/components/searchbar.mjs";
import { updateWishlist } from "../modules/components/wishlist-functions.mjs";

function updateNumberOrderSpan() {
  const orderNumberSpan = document.querySelector(".order-number");
  orderNumberSpan.textContent = Math.floor(Math.random() * 1000000000);
}

function main() {
  updateNumberOrderSpan();
  setFilterLinks("../../search/index.html");
  renderSearchBar();
  updateWishlist();
}

main();
