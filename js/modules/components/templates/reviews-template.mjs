import { createStarsContainer, createStarsLink } from "./main-slider-template.mjs";

export function reviewsSliderTemplate({ title, image, id, time }) {
  const reviewsSlider = reviewsArticle(id);
  const imageLink = createLinkAndImage(title, id);
  const reviewImg = createImg(title, image, id);
  const reviewInfo = createReviewInfoContainer();
  const nameContainer = createNameContainer();
  const nameLink = createNameLink(title, id);
  const starsContainer = createStarsContainer();
  const starsLink = createStarsLink(title, id);
  const comment = createComment();
  const metaDataContainer = createMetaDataContainer();
  const userAndTimeContainer = createUserAndTimeContainer();
  const userName = createUserSpan();
  const timeSpan = createCommentTimeSpan(time);
  const readReviewContainer = createReadReviewContainer();
  const readLink = createReadReviewLink(title, id);
  const readSpan = createReadReviewSpan();

  metaDataContainer.append(userAndTimeContainer, readReviewContainer);
  readReviewContainer.appendChild(readLink);
  readLink.appendChild(readSpan);
  userAndTimeContainer.append(userName, timeSpan);
  starsContainer.appendChild(starsLink);
  nameContainer.appendChild(nameLink);
  reviewInfo.append(nameContainer, starsContainer, comment, metaDataContainer);
  imageLink.appendChild(reviewImg);
  reviewsSlider.appendChild(imageLink);
  reviewsSlider.appendChild(reviewInfo);
  return reviewsSlider;
}

function reviewsArticle(id) {
  const reviewsArticle = document.createElement("article");
  reviewsArticle.id = id;
  reviewsArticle.classList.add("flex");
  return reviewsArticle;
}

function createLinkAndImage(title, id) {
  const link = document.createElement("a");
  const titleWithoutSpaces = title.split(" ").join("-");
  link.href = `./product/index.html?product=${titleWithoutSpaces}&id=${id}`;
  link.classList.add("review-img");
  return link;
}

function createImg(title, image, id) {
  const img = document.createElement("img");
  img.src = image;
  img.alt = title;
  img.id = id;
  return img;
}

function createReviewInfoContainer() {
  const div = document.createElement("div");
  div.classList.add("rev-slide-info", "flex", "column", "justify-sb", "pd-30");
  return div;
}

function createNameContainer() {
  const h3 = document.createElement("h3");
  return h3;
}

function createNameLink(title, id) {
  const link = document.createElement("a");
  const titleWithoutSpaces = title.split(" ").join("-");
  link.href = `./product/index.html?product=${titleWithoutSpaces}&id=${id}`;
  link.textContent = title;
  return link;
}

function createComment() {
  const paragraph = document.createElement("p");
  paragraph.classList.add("review-comment");
  return paragraph;
}

function createMetaDataContainer() {
  const div = document.createElement("div");
  div.classList.add("metadata", "flex", "justify-sb", "align-items-center");
  return div;
}

function createUserAndTimeContainer() {
  const div = document.createElement("div");
  div.classList.add("user-time", "flex", "column");
  return div;
}

function createUserSpan() {
  const userName = document.createElement("span");
  userName.classList.add("user-name");
  userName.textContent = "John Doe";
  return userName;
}

function createCommentTimeSpan(time) {
  const timeSpan = document.createElement("span");
  timeSpan.classList.add("grey", "comment-time");
  timeSpan.textContent = `${time} minutes ago`;
  return timeSpan;
}

function createReadReviewContainer() {
  const div = document.createElement("div");
  div.classList.add("read-review");
  return div;
}

function createReadReviewLink(title, id) {
  const readLink = document.createElement("a");
  const titleWithoutSpaces = title.split(" ").join("-");
  readLink.href = `./product/index.html?product=${titleWithoutSpaces}&id=${id}`;
  readLink.classList.add("name-hover");
  return readLink;
}

function createReadReviewSpan() {
  const readSpan = document.createElement("span");
  readSpan.classList.add("text-orange");
  readSpan.textContent = "Read review";
  return readSpan;
}
