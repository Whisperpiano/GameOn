export const responsiveMainSliderContainer = document.querySelector('.res-slider__container');

export function mainSliderResponsiveTemplate(title, image, id) {
    const responsiveSliderFigure = createFigure();
    const imageContainer = createImageContainer();
    const imageLink = createImageLink();
    const imageElement = createImage(title, image);
    const titleElement = createTitle(title);

    imageLink.appendChild(imageElement);

    imageContainer.append(imageLink, titleElement);
    responsiveSliderFigure.appendChild(imageContainer)
    return responsiveSliderFigure;
}

function createFigure() {
    const responsiveSliderFigure = document.createElement('figure');
    responsiveSliderFigure.classList.add('res-slider__card');
    return responsiveSliderFigure;
}

function createImageContainer() {
    const createDiv = document.createElement('div');
    return createDiv;
}

function createImageLink(){
    const imageLink = document.createElement('a');
    imageLink.href = `./product/index.html`
    return imageLink;
}

function createImage(title, image) {
    const imageElement = document.createElement('img');
    imageElement.src = image;
    imageElement.alt = title;
    return imageElement;
}

function createTitle(title) {
    const titleElement = document.createElement('h5');
    titleElement.textContent = title;
    return titleElement;
}