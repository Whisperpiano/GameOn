import { createStarsContainer, createStarsLink } from "./main-slider-template.mjs";


export function responsiveReviewsSliderTemplate({ title, image, id, time }) {
  const reviewContainer = createReviewContainer();
  const imageContainer = createImageContainer();
  const imageLink = createImageLink(title, id);
  const imageElement = createImage(title, image);
  const reviewInfoContainer = createReviewInfoContainer();
  const starsContainer = createStarsContainer();
  const starsLink = createStarsLink(title, id);
  const comment = createComment();
  const timeSpan = createTimeSpan(time);

  imageLink.appendChild(imageElement);
  imageContainer.appendChild(imageLink);
  starsContainer.appendChild(starsLink);
  reviewInfoContainer.append(starsContainer, comment, timeSpan);
  reviewContainer.append(imageContainer, reviewInfoContainer);

  return reviewContainer;
}

function createReviewContainer() {
  const reviewContainer = document.createElement("div");
  reviewContainer.classList.add("res-reviews__card", "text-center");
  return reviewContainer;
}

function createImageContainer() {
  const imageContainer = document.createElement("div");
  return imageContainer;
}

function createImageLink(title, id) {
  const imageLink = document.createElement("a");
  const titleWithoutSpaces = title.split(" ").join("-");
  imageLink.href = `./product/index.html?product=${titleWithoutSpaces}&id=${id}`;
  imageLink.classList.add("name-hover");
  return imageLink;
}

function createImage(title, image) {
  const imageElement = document.createElement("img");
  imageElement.src = image;
  imageElement.alt = `${title} cover image`;
  return imageElement;
}

function createReviewInfoContainer() {
  const reviewInfoContainer = document.createElement("div");
  reviewInfoContainer.classList.add(
    "grey-section",
    "pd-20",
    "flex",
    "center",
    "gap-10"
  );
  return reviewInfoContainer;
}

function createComment() {
  const comment = document.createElement("p");
  comment.classList.add("res-reviews__comment");
  comment.style.overflow = "hidden";
  comment.style.textOverflow = "ellipsis";
  comment.style.whiteSpace = "nowrap";
  return comment;
}

function createTimeSpan(time) {
  const timeSpan = document.createElement("span");
  timeSpan.textContent = `${time} minutes ago`;
  return timeSpan;
}