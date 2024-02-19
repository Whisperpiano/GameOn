import {
  createPlatformsContainer,
  createDiscountContainer,
  createOverlayContainer,
  createOverlayButtonsContainer,
  createAddToCartLink,
  createAddToCartButton,
  createViewButton,
  createItemTitle,
  createItemPrice,
} from "./bestseller-template.mjs";

export function searchPageTemplate(
  title,
  description,
  image,
  genre,
  price,
  discountedPrice,
  onSale,
  id,
  platforms
) {
  const platformsArray = Object.entries(platforms);
  const platformsArrayLength = platformsArray.length;
  const searchContainer = document.querySelector(".search-page__container");
  const itemContainer = createItemContainer();
  const topContainer = createTopContainer();
  const topLink = createTopLink(title, id);
  const pictureContainer = createPictureContainer();
  const img = createImg(title, image);
  const platformsContainer = createPlatformsContainer(
    platformsArray,
    platformsArrayLength
  );
  const discountContainer = createDiscountContainer(price, discountedPrice);
  const overlayContainer = createOverlayContainer();
  const overlayButtonsContainer = createOverlayButtonsContainer();
  const addToCartLink = createAddToCartLink();
  const addToCartBtn = createAddToCartButton(id);
  const viewLink = createViewLink(title, id);
  const viewBtn = createViewButton();
  const bottomContainer = createBottomContainer();
  const bottomLink = createBottomLink(title, id);
  const itemTitle = createItemTitle(title);
  const itemPrice = createItemPrice(discountedPrice);

  pictureContainer.append(img);

  overlayContainer.append(overlayButtonsContainer);
  overlayButtonsContainer.append(addToCartLink, viewLink);
  addToCartLink.append(addToCartBtn);
  viewLink.append(viewBtn);
  topLink.append(
    pictureContainer,
    platformsContainer,
    discountContainer,
    overlayContainer
  );

  bottomContainer.append(bottomLink, itemPrice);
  bottomLink.append(itemTitle);

  topContainer.append(topLink);

  itemContainer.append(topContainer, bottomContainer);

  searchContainer.append(itemContainer);
}

function createItemContainer() {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item");
  return itemContainer;
}

function createTopContainer() {
  const topContainer = document.createElement("div");
  topContainer.classList.add("relative");
  return topContainer;
}

function createTopLink(title, id) {
  const topLink = document.createElement("a");
  const titleWithoutSpaces = title.split(" ").join("-");
  topLink.href = `../product/index.html?product=${titleWithoutSpaces}&id=${id}`;
  return topLink;
}

function createPictureContainer() {
  const pictureContainer = document.createElement("picture");
  return pictureContainer;
}
function createImg(title, image) {
  const img = document.createElement("img");
  img.classList.add("item-img");
  img.src = image;
  img.alt = `${title} cover art.`;
  return img;
}

function createViewLink(title, id) {
  const viewLink = document.createElement("a");
  const titleWithoutSpaces = title.split(" ").join("-");
  viewLink.href = `../product/index.html?product=${titleWithoutSpaces}&id=${id}`;
  return viewLink;
}

function createBottomContainer() {
  const bottomContainer = document.createElement("div");
  bottomContainer.classList.add("flex", "justify-sb");
  return bottomContainer;
}

function createBottomLink(title, id) {
  const bottomLink = document.createElement("a");
  bottomLink.classList.add("name-hover");
  const titleWithoutSpaces = title.split(" ").join("-");
  bottomLink.href = `../product/index.html?product=${titleWithoutSpaces}&id=${id}`;
  return bottomLink;
}
