import { setFilterLinks } from "../modules/components/filter-by-platform.mjs";
import { renderSearchBar } from "../modules/components/searchbar.mjs";

function main() {
    setFilterLinks("../search/index.html");
    renderSearchBar();
}
main()