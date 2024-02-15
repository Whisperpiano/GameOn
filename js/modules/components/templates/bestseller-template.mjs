import { getPercentage } from "../../utils/calculate-percentage.mjs";
import { increment } from "../buttons.mjs";

export const bestsellerContainer = document.querySelector(
  ".bestseller__container"
);

export function gameTemplate(
  name,
  imageURL,
  id,
  price,
  discountedPrice,
  platforms
) {
  const platformsArray = Object.entries(platforms);
  const platformsArrayLength = platformsArray.length;

  const gameContainer = createGameContainer();
  const topContainer = createTopContainer();
  const link = createLink(name, id);
  const picture = createPicture(imageURL, name);
  const platformsContainer = createPlatformsContainer(
    platformsArray,
    platformsArrayLength
  );
  const discountContainer = createDiscountContainer(price, discountedPrice);
  const overlayContainer = createOverlayContainer();
  const overlayButtonsContainer = createOverlayButtonsContainer();
  const addToCartLink = createAddToCartLink();
  const addToCartBtn = createAddToCartButton(id);
  const viewLink = createViewLink(name, id);
  const viewBtn = createViewButton();
  const bottomContainer = createBottomContainer();
  const bottomLink = createBottomLink(name, id);
  const itemTitle = createItemTitle(name);
  const itemPrice = createItemPrice(discountedPrice);

  addToCartLink.appendChild(addToCartBtn);
  viewLink.appendChild(viewBtn);
  overlayButtonsContainer.append(addToCartLink, viewLink);
  overlayContainer.appendChild(overlayButtonsContainer);
  link.append(picture, platformsContainer, discountContainer, overlayContainer);
  topContainer.appendChild(link);
  bottomLink.appendChild(itemTitle);
  bottomContainer.append(bottomLink, itemPrice);
  gameContainer.append(topContainer, bottomContainer);

  return gameContainer;
}

function createGameContainer() {
  const gameContainer = document.createElement("div");
  gameContainer.classList.add("item");
  return gameContainer;
}

function createTopContainer() {
  const topContainer = document.createElement("div");
  topContainer.classList.add("relative");
  return topContainer;
}

function createLink(title, id) {
  const link = document.createElement("a");
  const titleWithoutSpaces = title.split(" ").join("-");
  link.href = `./product/index.html?product=${titleWithoutSpaces}&id=${id}`;
  return link;
}

function createPicture(imageURL, name) {
  const picture = document.createElement("picture");
  const image = document.createElement("img");
  image.classList.add("item-img");
  image.src = imageURL;
  image.alt = name;
  picture.appendChild(image);
  return picture;
}

function createPlatformsContainer(platformsArray, platformsArrayLength) {
  const platformsContainer = document.createElement("div");
  platformsContainer.classList.add("item-platforms", "flex");
  for (let i = 0; i < platformsArrayLength; i++) {
    if (platformsArray[i][1] === true) {
      const span = createPlatformsSpan(platformsArray[i][0]);
      platformsContainer.appendChild(span);
    }
  }

  return platformsContainer;
}

function createPlatformsSpan(platformType) {
  const platformSpan = document.createElement("span");
  platformSpan.classList.add(`${platformType}`);
  return platformSpan;
}

function createDiscountContainer(price, discountedPrice) {
  const discountContainer = document.createElement("div");
  discountContainer.classList.add("item-discount", "btn", "btn-3");
  const discountSpan = document.createElement("span");
  discountSpan.classList.add("discounted-price");
  discountContainer.appendChild(discountSpan);

  if (price - discountedPrice <= 0) {
    discountContainer.style.visibility = "hidden";
  } else {
    discountSpan.textContent = `-${getPercentage(price, discountedPrice)}%`;
  }

  return discountContainer;
}

function createOverlayContainer() {
  const overlayContainer = document.createElement("div");
  overlayContainer.classList.add("item-overlay");
  return overlayContainer;
}

function createOverlayButtonsContainer() {
  const overlayButtonsContainer = document.createElement("div");
  overlayButtonsContainer.classList.add("item-overlay__buttons");
  return overlayButtonsContainer;
}

function createAddToCartLink() {
  const addToCartLink = document.createElement("a");
  addToCartLink.href = 'javascript:void(0)';
  return addToCartLink;
}

function createAddToCartButton(id) {
  const addToCartBtn = document.createElement("button");
  addToCartBtn.type = "button";
  addToCartBtn.classList.add("btn", "btn-1", "btn-overlay", "uppercase");
  addToCartBtn.textContent = `Add`;
  const addToCartIcon = document.createElement("i");
  addToCartIcon.classList.add("fa-solid", "fa-cart-shopping");
  addToCartBtn.appendChild(addToCartIcon);
  addToCartBtn.addEventListener("click", (event) => {
    increment(id);
  });
  return addToCartBtn;
}

function createViewLink(title, id) {
  const viewLink = document.createElement("a");
  const titleWithoutSpaces = title.split(" ").join("-");
  viewLink.href = `./product/index.html?product=${titleWithoutSpaces}&id=${id}`;
  return viewLink;
}

function createViewButton() {
  const viewBtn = document.createElement("button");
  viewBtn.type = "button";
  viewBtn.classList.add("btn", "btn-2", "btn-overlay", "uppercase");
  viewBtn.textContent = "View";
  const viewIcon = document.createElement("i");
  viewIcon.classList.add("fa-solid", "fa-up-right-from-square");
  viewBtn.appendChild(viewIcon);
  return viewBtn;
}

function createBottomContainer() {
  const bottomContainer = document.createElement("div");
  bottomContainer.classList.add("flex", "justify-sb");
  return bottomContainer;
}

function createBottomLink(title, id) {
  const bottomLink = document.createElement("a");
  const titleWithoutSpaces = title.split(" ").join("-");
  bottomLink.href = `./product/index.html?product=${titleWithoutSpaces}&id=${id}`;
  bottomLink.classList.add("name-hover");
  return bottomLink;
}

function createItemTitle(name) {
  const itemTitle = document.createElement("h6");
  itemTitle.classList.add("item-name");
  itemTitle.textContent = name;
  return itemTitle;
}

function createItemPrice(discountedPrice) {
  const itemPrice = document.createElement("span");
  itemPrice.textContent = `$${discountedPrice}`;
  itemPrice.classList.add("item-price");
  return itemPrice;
}
