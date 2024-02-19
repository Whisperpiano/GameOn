import { randomNumber } from "../../utils/random-numbers.mjs";
import { increment } from "../cart-functions.mjs";

export const mainSliderContainer = document.querySelector(".slider-header");

export function mainSliderTemplate(
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

  const slide = createSlide(id);
  const slideImage = createSlideImage(image, title, id);
  const slideContent = createSlideContent();
  const slideContentTop = createSlideContentTop();
  const onSaleSpan = createOnSaleSpan();
  const platformsContainer = createPlatformsContainer(
    platformsArray,
    platformsArrayLength
  );

  const gameInfo = createGameInfo();
  const nameAndPriceContainer = createNameAndPriceContainer();
  const gameName = createGameName();
  const gameNameLink = createGameNameLink(title, id);
  const priceSpan = createPriceSpan(discountedPrice);
  const starsAndPriceBeforeContainer = createStarsAndPriceBeforeContainer();
  const starsContainer = createStarsContainer();
  const starsLink = createStarsLink(title, id);
  const priceBefore = createPriceBefore(price);
  const gameDescription = createGameDescription(description);
  const slideButtonsContainer = createSlideButtonsContainer();
  const slideAddToCartButton = createSlideAddToCartButton(id);
  const slideAddToWishButton = createSlideAddToWishButton();

  slideContentTop.append(onSaleSpan, platformsContainer);
  gameName.appendChild(gameNameLink);
  nameAndPriceContainer.append(gameName, priceSpan);
  starsAndPriceBeforeContainer.append(starsContainer, priceBefore);
  starsContainer.appendChild(starsLink);
  slideButtonsContainer.append(slideAddToCartButton, slideAddToWishButton);
  gameInfo.append(
    nameAndPriceContainer,
    starsAndPriceBeforeContainer,
    gameDescription,
    slideButtonsContainer
  );
  slideContent.append(slideContentTop, gameInfo);
  slide.append(slideImage, slideContent);

  return slide;
}

function createSlide(id) {
  const slide = document.createElement("article");
  slide.classList.add("flex");
  slide.id = id;
  return slide;
}

function createSlideImage(image, title, id) {
  const slideImage = document.createElement("a");
  const titleWithoutSpaces = title.split(" ").join("-");
  slideImage.href = `./product/index.html?product=${titleWithoutSpaces}&id=${id}`;
  slideImage.classList.add("slide-img");
  slideImage.style.backgroundImage = `url(${image})`;
  slideImage.style.backgroundPositionY = "30%";
  return slideImage;
}

function createSlideContent() {
  const slideContent = document.createElement("div");
  slideContent.classList.add("slide-info", "flex", "pd-40");
  return slideContent;
}

function createSlideContentTop() {
  const slideContentTop = document.createElement("div");
  slideContentTop.classList.add("slide-info__top", "flex", "justify-sb");
  return slideContentTop;
}
function createOnSaleSpan() {
  const onSaleSpan = document.createElement("span");
  onSaleSpan.classList.add("onsale", "btn-3", "uppercase");
  onSaleSpan.textContent = "On Sale";
  return onSaleSpan;
}

function createPlatformsContainer(array, length) {
  const platformsContainer = document.createElement("div");
  platformsContainer.classList.add("flex", "gap-15");

  for (let i = 0; i < length; i++) {
    if (array[i][1] === true) {
      const span = createPlatformsSpan(array[i][0]);
      platformsContainer.appendChild(span);
    }
  }
  return platformsContainer;
}

function createPlatformsSpan(platformType) {
  const genreSpan = document.createElement("span");
  genreSpan.classList.add(`${platformType}`);
  return genreSpan;
}

function createGameInfo() {
  const gameInfo = document.createElement("div");
  gameInfo.classList.add("flex", "justify-sb", "gap-20");
  return gameInfo;
}

function createNameAndPriceContainer() {
  const nameAndPriceContainer = document.createElement("div");
  nameAndPriceContainer.classList.add(
    "name-price",
    "flex",
    "row",
    "justify-sb"
  );
  return nameAndPriceContainer;
}

function createGameName() {
  const gameName = document.createElement("h3");
  gameName.classList.add("name-hover");
  return gameName;
}

function createGameNameLink(title, id) {
  const gameNameLink = document.createElement("a");
  const titleWithoutSpaces = title.split(" ").join("-");
  gameNameLink.href = `./product/index.html?product=${titleWithoutSpaces}&id=${id}`;
  gameNameLink.classList.add("name");
  gameNameLink.textContent = title;
  return gameNameLink;
}

function createPriceSpan(discountedPrice) {
  const priceSpan = document.createElement("span");
  priceSpan.classList.add("price");
  priceSpan.textContent = `$${discountedPrice}`;
  return priceSpan;
}

function createStarsAndPriceBeforeContainer() {
  const starsAndPriceBefore = document.createElement("div");
  starsAndPriceBefore.classList.add(
    "stars-subprice",
    "flex",
    "row",
    "justify-sb"
  );
  return starsAndPriceBefore;
}

export function createStarsContainer() {
  const starsContainer = document.createElement("div");
  starsContainer.classList.add("stars", "name-hover");
  return starsContainer;
}

export function createStarsLink(title, id) {
  const starsLink = document.createElement("a");
  const titleWithoutSpaces = title.split(" ").join("-");
  starsLink.href = `./product/index.html?product=${titleWithoutSpaces}&id=${id}`;

  const halfStar = document.createElement("i");
  halfStar.classList.add("fa-sharp", "fa-solid", "fa-star-half-stroke");
  const numStars = randomNumber();

  for (let i = 0; i < numStars; i++) {
    const star = createRandomStars();
    starsLink.appendChild(star);
  }

  starsLink.appendChild(halfStar);

  return starsLink;
}

export function createRandomStars() {
  const stars = document.createElement("i");
  stars.classList.add("fa-sharp", "fa-solid", "fa-star");
  return stars;
}

function createPriceBefore(price) {
  const priceBefore = document.createElement("span");
  priceBefore.classList.add("subprice");
  priceBefore.textContent = `$${price}`;
  return priceBefore;
}

function createGameDescription(description) {
  const gameDescription = document.createElement("p");
  gameDescription.style.minHeight = "100px";
  gameDescription.classList.add("pd-20-0");
  gameDescription.textContent = description;
  return gameDescription;
}

export function createSlideButtonsContainer() {
  const slideButtonsContainer = document.createElement("div");
  slideButtonsContainer.classList.add("flex", "justify-sb", "gap-30");
  return slideButtonsContainer;
}

export function createSlideAddToCartButton(id) {
  const slideAddToCartButton = document.createElement("button");
  slideAddToCartButton.type = "button";
  slideAddToCartButton.name = "addToCartBtn";
  slideAddToCartButton.classList.add(
    "btn",
    "btn-1",
    "width-100",
    "uppercase",
    "shopping-icon"
  );
  slideAddToCartButton.textContent = "Add to cart";
  slideAddToCartButton.addEventListener("click", (event) => {
    increment(id);
  });

  return slideAddToCartButton;
}

export function createSlideAddToWishButton() {
  const slideAddToWishButton = document.createElement("button");
  slideAddToWishButton.type = "button";
  slideAddToWishButton.name = "addToFavBtn";
  slideAddToWishButton.classList.add("btn", "btn-2", "width-100", "heart-icon");
  slideAddToWishButton.textContent = "Add to wishlist";
  return slideAddToWishButton;
}
