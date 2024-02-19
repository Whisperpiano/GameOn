import { getPercentage } from "../../utils/calculate-percentage.mjs";
import { capitalizeFirstLetter } from "../capitalize-first-letter.mjs";
import { increment } from "../cart-functions.mjs";

export function productPanelTemplate(
  id,
  title,
  description,
  genre,
  released,
  ageRating,
  price,
  discountedPrice,
  onSale,
  image,
  platforms
) {
  const mainPicture = createMainPicture(image, title);
  const productName = createProductName(title);
  const selectPlatform = createPlatformsOptions(platforms);
  const updatedPrice = updatePrices(price, discountedPrice);
  const smallPicture1 = updateSmallPicture1(image, title);
  addToCartBtn(id);
  addToCartBtnResponsive(id);
}

function createMainPicture(image, title) {
  const mainPicture = document.querySelector("#main-picture");
  mainPicture.src = image;
  mainPicture.alt = `${title} cover image`;
  return mainPicture;
}

function createProductName(title) {
  const productName = document.querySelector(".product-name");
  productName.textContent = title;
  return productName;
}

function createPlatformsOptions(platforms) {
  const selectPlatform = document.querySelector("#platforms-select");
  const platformsArray = Object.entries(platforms);
  const options = platformsArray.map(([platform, available]) => {
    if (available) {
      const option = document.createElement("option");
      option.value = platform;
      option.textContent = capitalizeFirstLetter(platform);
      selectPlatform.append(option);
      return option;
    }
  });

  return selectPlatform;
}

function updatePrices(price, discountedPrice) {
  const productPriceBefore = document.querySelector(".price-before");
  const productDiscount = document.querySelector(".price-discount");
  const productPriceAfter = document.querySelector(".price-after");
  const percentage = getPercentage(price, discountedPrice);

  productPriceBefore.textContent = price;
  productDiscount.textContent = `-${percentage}%`;
  productPriceAfter.textContent = discountedPrice;
  if (price === discountedPrice) {
    productPriceBefore.style.display = "none";
    productDiscount.style.display = "none";
  }
  return productPriceAfter;
}

function updateSmallPicture1(image, title) {
  const smallPicture1 = document.querySelector("#small-picture-1");
  smallPicture1.src = image;
  smallPicture1.alt = `${title} cover image`;
  return smallPicture1;
}

function addToCartBtn(id) {
  const addToCartBtn = document.querySelector(`.add-to-cart`);
  addToCartBtn.addEventListener("click", () => {
    increment(id);
  });
  return addToCartBtn;
}

function addToCartBtnResponsive(id) {
  const addToCartBtn = document.querySelector(`.add-to-cart-responsive`);
  addToCartBtn.addEventListener("click", () => {
    increment(id);
  });
  return addToCartBtn;
}

//* Slider

function createProductPageSlider() {
  const mainImage = document.querySelector("#main-picture");
  const images = document.querySelectorAll(
    "#small-picture-1, #small-picture-2, #small-picture-3, #small-picture-4"
  );

  images.forEach((image) => {
    image.addEventListener("click", () => {
      mainImage.src = image.src;
      mainImage.alt = image.alt;
    });
  });
}

createProductPageSlider();

function nextButton() {
  const nextButton = document.querySelector("#next-btn");
  const mainImage = document.querySelector("#main-picture");
  const images = document.querySelectorAll(
    "#small-picture-1, #small-picture-2, #small-picture-3, #small-picture-4"
  );
}

nextButton();
