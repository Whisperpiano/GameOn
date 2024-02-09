
import { randomTime } from "../../utils/random-time.mjs";
import { createStarsContainer, createStarsLink, createRandomStars } from "./main-slider-template.mjs";

export const reviewsSliderContainer = document.querySelector('#reviews-slider');

export function reviewsSliderTemplate(title, image, id, time) {
    const reviewsSlider = reviewsArticle(id);
    const imageLink = createLinkAndImage();
    const reviewImg = createImg(title, image, id);
    const reviewInfo = createReviewInfoContainer();
    const nameContainer = createNameContainer();
    const nameLink = createNameLink(title);
    const starsContainer = createStarsContainer();
    const starsLink = createStarsLink();
    const comment = createComment();
    const metaDataContainer = createMetaDataContainer();
    const userAndTimeContainer = createUserAndTimeContainer();
    const userName = createUserSpan();
    const timeSpan = createCommentTimeSpan(time);
    const readReviewContainer = createReadReviewContainer();
    const readLink = createReadReviewLink();
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

function createLinkAndImage() {
    const link = document.createElement("a");
    link.href = `./product/index.html`;
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
    div.classList.add("rev-slide-info","flex","column","justify-sb","pd-30");
    return div;
}

function createNameContainer() {
    const h3 = document.createElement("h3");
    return h3;
}

function createNameLink(title) {
    const link = document.createElement("a");
    link.href = `./product/index.html`;
    link.textContent = title;
    return link;
}

function createComment() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    return paragraph;
}

function createMetaDataContainer() {
    const div = document.createElement("div");
    div.classList.add("metadata","flex","justify-sb","align-items-center");
    return div;
}

function createUserAndTimeContainer() {
    const div = document.createElement("div");
    div.classList.add("user-time","flex","column");
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
    timeSpan.classList.add("grey","comment-time");
    timeSpan.textContent = `${time} minutes ago`;
    return timeSpan;
}

function createReadReviewContainer() {
    const div = document.createElement("div");
    div.classList.add("read-review");
    return div;
}

function createReadReviewLink() {
    const readLink = document.createElement("a");
    readLink.classList.add("name-hover")
    readLink.href = `./product/index.html`;
    return readLink;
}

function createReadReviewSpan() {
    const readSpan = document.createElement("span")
    readSpan.classList.add("text-orange");
    readSpan.textContent = "Read review";
    return readSpan;
}




