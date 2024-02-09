import { createStarsContainer, createStarsLink, createRandomStars } from "./main-slider-template.mjs";
import { randomTime } from "../../utils/random-time.mjs";

export const responsiveReviewsSlideContainer = document.querySelector('.res-reviews__container');

export function responsiveReviewsSliderTemplate(title, image, id, time) {
    const reviewContainer = createReviewContainer();
    const imageContainer = createImageContainer();
    const imageLink = createImageLink();
    const imageElement = createImage(title, image);
    const reviewInfoContainer = createReviewInfoContainer();
    const starsContainer = createStarsContainer();
    const starsLink = createStarsLink();
    const comment = createComment();
    const timeSpan = createTimeSpan(time);


    imageLink.appendChild(imageElement);
    imageContainer.appendChild(imageLink);
    starsContainer.appendChild(starsLink);
    reviewInfoContainer.append(starsContainer, comment, timeSpan);
    reviewContainer.append(imageContainer, reviewInfoContainer);
    return reviewContainer;
}

function createReviewContainer(){
    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('res-reviews__card', "text-center");
    return reviewContainer;
}

function createImageContainer() {
    const imageContainer = document.createElement('div');
    return imageContainer;
}

function createImageLink() {
    const imageLink = document.createElement('a');
    imageLink.href = `./product/index.html`;
    imageLink.classList.add('name-hover');
    return imageLink;
}

function createImage(title, image) {
    const imageElement = document.createElement('img');
    imageElement.src = image;
    imageElement.alt = `${title} cover image`;
    return imageElement;
}

function createReviewInfoContainer(){
    const reviewInfoContainer = document.createElement('div');
    reviewInfoContainer.classList.add('grey-section',"pd-20","flex","center","gap-10");
    return reviewInfoContainer;
}

function createComment() {
    const comment = document.createElement('p');
    comment.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.";
    return comment;
}

function createTimeSpan(time) {
    const timeSpan = document.createElement('span');
    timeSpan.textContent = `${time} minutes ago`;
    return timeSpan;
}