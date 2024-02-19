import { getPercentage } from "../../utils/calculate-percentage.mjs";
import {
  cart,
  increment,
  decrement,
  updateCart,
  calculateTotal,
  removeItemFromCart,
} from "../cart-functions.mjs";
import { renderCart, renderSummaryCart } from "../../../pages/cart.mjs";
import { hideLoader, showLoader } from "../loader.mjs";

export function cartTemplate(findGame, product) {
  const cartContainer = document.querySelector(".cart-items");
  const article = createArticle();
  const divContainer = createDivContainer();
  const leftContainer = createLeftContainer();
  const imageContainer = createImageContainer();
  const imageLink = createImageLink();
  const image = createImage(findGame.image, findGame.title);
  const infoContainer = createInfoContainer();
  const titleContainer = createTitleContainer();
  const titleLink = createTitleLink();
  const title = createTitle(findGame.title);
  const platformSpan = createPlatformSpan();
  const zoneSpan = createZoneSpan();
  const quantityResponsiveContainer = createQuantityResponsiveContainer();
  const minusResponsiveContainer = createMinusContainer();
  const minusResponsiveButton = createMinusButton(product.productID);
  const quantityResponsiveMarkContainer = createQuantityMarkContainer();
  const quantityResponsiveMark = createQuantityMark(product.quantity);
  const plusResponsiveContainer = createPlusContainer();
  const plusResponsiveButton = createPlusButton(
    product.productID,
    product.quantity,
    product
  );
  const midContainer = createMidContainer();
  const minusContainer = createMinusContainer();
  const minusButton = createMinusButton(product.productID);
  const quantityMarkContainer = createQuantityMarkContainer();
  const quantityMark = createQuantityMark(product.quantity);
  const plusContainer = createPlusContainer();
  const plusButton = createPlusButton(
    product.productID,
    product.quantity,
    product
  );
  const rightContainer = createRightContainer();
  const priceBeforeSpan = createPriceBeforeSpan(
    findGame.price,
    findGame.discountedPrice,
    product.quantity
  );
  const discountSpan = createDiscountSpan(
    findGame.price,
    findGame.discountedPrice
  );
  const actualPrice = createActualPrice(
    findGame.discountedPrice,
    product.quantity
  );
  const removeButton = createRemoveButton(product.productID);

  cartContainer.append(article);
  article.appendChild(divContainer);
  divContainer.append(
    leftContainer,
    midContainer,
    rightContainer,
    removeButton
  );
  leftContainer.append(
    imageContainer,
    infoContainer,
    quantityResponsiveContainer
  );
  imageContainer.appendChild(imageLink);
  imageLink.appendChild(image);
  infoContainer.append(titleContainer);
  titleContainer.append(titleLink, platformSpan, zoneSpan);
  titleLink.appendChild(title);
  quantityResponsiveContainer.append(
    minusResponsiveContainer,
    quantityResponsiveMarkContainer,
    plusResponsiveContainer
  );
  minusResponsiveContainer.appendChild(minusResponsiveButton);
  quantityResponsiveMarkContainer.appendChild(quantityResponsiveMark);
  plusResponsiveContainer.appendChild(plusResponsiveButton);
  midContainer.append(minusContainer, quantityMarkContainer, plusContainer);
  minusContainer.appendChild(minusButton);
  quantityMarkContainer.appendChild(quantityMark);
  plusContainer.appendChild(plusButton);
  rightContainer.append(priceBeforeSpan, discountSpan, actualPrice);
}

// First, remove the empty cart message.

export function removeEmptyCart() {
  const emptyCart = document.querySelector(".empty-cart");
  emptyCart.style.display = "none";
}

// Next, create the item cart template.
// prettier-ignore

function createArticle() {
  const createArticle = document.createElement("article");
  createArticle.classList.add("item-cart", "relative");
  return createArticle;
}

function createDivContainer() {
  const createDivContainer = document.createElement("div");
  createDivContainer.classList.add(
    "flex",
    "justify-sb",
    "align-items-center",
    "pd-15",
    "grey-section",
    "gap-20"
  );
  return createDivContainer;
}

function createLeftContainer() {
  const createLeftContainer = document.createElement("div");
  createLeftContainer.classList.add(
    "item-cart__left",
    "flex",
    "align-items-center",
    "gap-20"
  );
  return createLeftContainer;
}

function createImageContainer() {
  const createImageContainer = document.createElement("div");
  createImageContainer.classList.add("item-cart__image");
  return createImageContainer;
}

function createImageLink() {
  const createImageLink = document.createElement("a");
  createImageLink.classList.add("name-hover");
  createImageLink.href = "#"; //! ADD LINK
  return createImageLink;
}

function createImage(image, title) {
  const createImage = document.createElement("img");
  createImage.src = image;
  createImage.alt = `${title} game cover`;
  return createImage;
}

function createInfoContainer() {
  const createInfoContainer = document.createElement("div");
  createInfoContainer.classList.add("item-cart__info-res");
  return createInfoContainer;
}

function createTitleContainer() {
  const createTitleContainer = document.createElement("div");
  createTitleContainer.classList.add(
    "item-cart__info",
    "flex",
    "column",
    "gap-20"
  );
  return createTitleContainer;
}

function createTitleLink() {
  const createTitleLink = document.createElement("a");
  createTitleLink.classList.add("name-hover");
  createTitleLink.href = "#"; //! ADD LINK
  return createTitleLink;
}

function createTitle(title) {
  const createTitle = document.createElement("h6");
  createTitle.textContent = title;
  return createTitle;
}
function createPlatformSpan() {
  const createPlatformSpan = document.createElement("span");
  createPlatformSpan.textContent = "Platform / Version ";
  return createPlatformSpan;
}

function createZoneSpan() {
  const createZoneSpan = document.createElement("span");
  createZoneSpan.textContent = "Europe & UK";
  return createZoneSpan;
}

function createQuantityResponsiveContainer() {
  const createQuantityContainer = document.createElement("div");
  createQuantityContainer.classList.add(
    "item-cart__quantity-res",
    "flex",
    "align-items-center",
    "text-center",
    "gap-10"
  );
  return createQuantityContainer;
}

function createMinusContainer() {
  const createMinusContainer = document.createElement("div");
  createMinusContainer.classList.add("wrap-icon");
  return createMinusContainer;
}

function createMinusButton(id) {
  const createMinusButton = document.createElement("a");
  createMinusButton.classList.add("circle", "minus");
  createMinusButton.style.cursor = "pointer";
  createMinusButton.addEventListener("click", () => {
    const cartitems = document.querySelector(".cart-items");
    decrement(id);
    cartitems.innerHTML = "";
    renderCart();
    renderSummaryCart();
  });
  return createMinusButton;
}

function createQuantityMarkContainer() {
  const createQuantity = document.createElement("div");
  return createQuantity;
}

function createQuantityMark(quantity) {
  const createQuantityMark = document.createElement("span");
  createQuantityMark.classList.add("qty-number", "border");
  createQuantityMark.textContent = quantity;
  return createQuantityMark;
}

function createPlusContainer() {
  const createPlusContainer = document.createElement("div");
  createPlusContainer.classList.add("wrap-icon");
  return createPlusContainer;
}

function createPlusButton(id, quantity, product) {
  const createPlusButton = document.createElement("a");
  createPlusButton.classList.add("circle", "plus");
  createPlusButton.id = "plus";
  createPlusButton.style.cursor = "pointer";
  createPlusButton.addEventListener("click", () => {
    const cartitems = document.querySelector(".cart-items");
    increment(id);
    cartitems.innerHTML = "";
    renderCart();
    renderSummaryCart();
  });
  return createPlusButton;
}

function createMidContainer() {
  const createMidContainer = document.createElement("div");
  createMidContainer.classList.add(
    "item-cart__quantity",
    "flex",
    "align-items-center",
    "text-center",
    "gap-10"
  );
  return createMidContainer;
}

function createRightContainer() {
  const createRightContainer = document.createElement("div");
  createRightContainer.classList.add(
    "item-cart__price",
    "flex",
    "column",
    "text-center",
    "gap-20"
  );
  return createRightContainer;
}

function createPriceBeforeSpan(price, discountedPrice, quantity) {
  const createPriceBeforeSpan = document.createElement("span");
  const finalPrice = price * quantity;
  createPriceBeforeSpan.classList.add("price-before");
  if (price - discountedPrice === 0) {
    createPriceBeforeSpan.style.display = "none";
  } else {
    createPriceBeforeSpan.textContent = `$${finalPrice.toFixed(2)}`;
  }
  return createPriceBeforeSpan;
}

function createDiscountSpan(price, discountedPrice) {
  const createDiscountSpan = document.createElement("span");
  createDiscountSpan.classList.add("discount");
  if (price - discountedPrice <= 0) {
    createDiscountSpan.style.display = "none";
  } else {
    createDiscountSpan.textContent = `-${getPercentage(
      price,
      discountedPrice
    )}%`;
  }
  return createDiscountSpan;
}

function createActualPrice(discountedPrice, quantity) {
  const createActualPrice = document.createElement("span");
  const finalDiscountedPrice = discountedPrice * quantity;
  createActualPrice.classList.add("actual-price");
  createActualPrice.textContent = `$${finalDiscountedPrice.toFixed(2)}`;
  return createActualPrice;
}

function createRemoveButton(id) {
  const createRemoveButton = document.createElement("button");
  createRemoveButton.classList.add("btn-remove", "trash");
  createRemoveButton.style.cursor = "pointer";
  createRemoveButton.addEventListener("click", () => {
    const cartitems = document.querySelector(".cart-items");
    removeItemFromCart(id);
    cartitems.innerHTML = "";
    renderCart();
    renderSummaryCart();
  });
  return createRemoveButton;
}
