import { renderSearchBar } from "../modules/components/searchbar.mjs";

function updateNumberOrderSpan() {
  const orderNumberSpan = document.querySelector(".order-number");
  orderNumberSpan.textContent = Math.floor(Math.random() * 1000000000);
}

function filterByPlatform() {
  const filterPC = document.querySelector(".filter-pc");
  filterPC.href = "../../search/index.html?platform=steam";
  const filterPlaystation = document.querySelector(".filter-playstation");
  filterPlaystation.href = "../../search/index.html?platform=playstation";
  const filterXbox = document.querySelector(".filter-xbox");
  filterXbox.href = "../../search/index.html?platform=xbox";
  const filterNintendo = document.querySelector(".filter-nintendo");
  filterNintendo.href = "../../search/index.html?platform=nintendo";
}

function main() {
  updateNumberOrderSpan();
  filterByPlatform();
  renderSearchBar();
}

main();
