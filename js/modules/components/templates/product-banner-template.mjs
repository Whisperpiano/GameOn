import { getPercentage } from '../../utils/calculate-percentage.mjs';
import { createSlideButtonsContainer, createSlideAddToCartButton, createSlideAddToWishButton } from './main-slider-template.mjs';
import { updateImageBanner } from './../update-image-banner.mjs';


export function productPanelTemplate(id, title, description, genre, released, ageRating, price, discountedPrice, onSale, image ) {
    const gamePanel = createArticle();
    const gamePanelContainer = createGamePanelContainer();
    const pictureContainer = createMainPictureContainer();
    const mainPicture = createMainPicture(image, title);
    const gamePanelInfo = createGamePanelInfo();
    const productName = createProductName(title);
    const selectContainer = createSelectContainer();
    const selectPlatform = createSelectPlatform();
    const selectVersion = createSelectVersion();
    const priceContainer = createPriceContainer();
    const productPriceBefore = createProductPriceBefore(price);
    const productDiscount = createProductDiscount(price, discountedPrice);
    const productPriceAfter = createProductPriceAfter(discountedPrice);
    const buttonsContainer = createSlideButtonsContainer();
    const addToCartButton = createSlideAddToCartButton();
    const addToWishButton = createSlideAddToWishButton();
    const metadataContainer = createProductMetadataContainer();
    const metadataTypeContainer = createMetadataTypeContainer();
    const metadataVersionContainer = createMetadataVersionContainer();
    const metadataActivationContainer = createMetadataActivationContainer();
    const metadataTypeImg = createMetadataTypeImg();
    const metadataVersionImg = createMetadataVersionImg();
    const metadataVerifiedImg = createMetadataVerifiedImg();
    const metadataTypeSpanContainer = createMetadataTypeSpanContainer();
    const metadataVersionSpanContainer = createMetadataVersionSpanContainer();
    const metadataVerifiedSpanContainer = createMetadataVerifiedSpanContainer();
    const metadataTypeSpan = createTypeFirstSpan();
    const metadataTypeSpan2 = createTypeSecondSpan();
    const metadataVersionSpan = createVersionFirstSpan();
    const metadataVersionSpan2 = createVersionSecondSpan();
    const metadataVerifiedSpan = createVerifiedFirstSpan();
    const metadataVerifiedSpan2 = createVerifiedSecondSpan();
    const smallPictureContainer1 = createSmallPictureContainer1();
    const previousButton = createPreviousButton();
    const previusIcon = createPreviusIcon();
    const smallPicture1 = createSmallPicture1(image);
    const smallPictureContainer2 = createSmallPictureContainer2();
    const smallPicture2 = createSmallPicture2();
    const smallPictureContainer3 = createSmallPictureContainer3();
    const smallPicture3 = createSmallPicture3();
    const smallPictureContainer4 = createSmallPictureContainer4();
    const nextButton = createNextButton();
    const nextIcon = createNextIcon();
    const smallPicture4 = createSmallPicture4();

    smallPictureContainer4.append(nextButton, smallPicture4);
    nextButton.append(nextIcon);



    smallPictureContainer3.append(smallPicture3);
    smallPictureContainer2.append(smallPicture2);

    smallPictureContainer1.append(previousButton, smallPicture1);
    previousButton.append(previusIcon);

    metadataTypeContainer.append(metadataTypeImg, metadataTypeSpanContainer);
    metadataVersionContainer.append(metadataVersionImg, metadataVersionSpanContainer);
    metadataActivationContainer.append(metadataVerifiedImg, metadataVerifiedSpanContainer);
    metadataTypeSpanContainer.append(metadataTypeSpan, metadataTypeSpan2);
    metadataVersionSpanContainer.append(metadataVersionSpan, metadataVersionSpan2);
    metadataVerifiedSpanContainer.append(metadataVerifiedSpan, metadataVerifiedSpan2);



    metadataContainer.append(metadataTypeContainer, metadataVersionContainer, metadataActivationContainer);
  

    buttonsContainer.append(addToCartButton, addToWishButton)

    if (price === discountedPrice) {
        productPriceBefore.style.display = 'none';
        productDiscount.style.display = 'none';
    }

    priceContainer.append(productPriceBefore, productDiscount, productPriceAfter);

    selectContainer.append(selectPlatform, selectVersion)
    gamePanelInfo.append(productName, selectContainer, priceContainer, buttonsContainer, metadataContainer);

    pictureContainer.append(mainPicture);

    gamePanelContainer.append(pictureContainer, gamePanelInfo, smallPictureContainer1, smallPictureContainer2, smallPictureContainer3, smallPictureContainer4);

    gamePanel.append(gamePanelContainer);

    return gamePanel;
    
}

function createArticle() {
    const article = document.createElement('article');
    article.classList.add('mw-1340','flex')
    return article
}

function createGamePanelContainer() {
    const panelContainer = document.createElement('div');
    panelContainer.classList.add('image-grid','border-radius-2');
    return panelContainer;
}

function createMainPictureContainer() {
    const pictureContainer = document.createElement('picture');
    pictureContainer.classList.add('big', 'image-grid-col-4','image-grid-row-4')
    return pictureContainer;
}

function createMainPicture(image, title) {
    const mainPicture = document.createElement('img');
    mainPicture.classList.add('big');
    mainPicture.src = image;
    mainPicture.alt = `${title} cover image`;
    mainPicture.id = 'main-image';
    return mainPicture;
}

function createGamePanelInfo() {
    const gamePanelInfo = document.createElement('div');
    gamePanelInfo.classList.add('panel-right','image-grid-col-2','image-grid-row-5', 'flex','column','justify-sb', 'text-center','grey-section');
    return gamePanelInfo;
}

function createProductName(title) {
    const productName = document.createElement('h2');
    productName.classList.add('product-name');
    productName.textContent = title;
    return productName;
}

//* Selects container

function createSelectContainer() {
    const selectContainer = document.createElement('div');
    selectContainer.classList.add('select-container','flex','justify-sb');
    return selectContainer;
}

function createSelectPlatform(){
    const selectPlatform = document.createElement('select');
    selectPlatform.classList.add('btn-2');
    selectPlatform.name = 'Platform'
    selectPlatform.id = 'id'
    // Create options and append them to select
    const options = createPlatformOptions();
    selectPlatform.append(options);
    return selectPlatform;
}

function createPlatformOptions(){
    const option = document.createElement('option');
    const optionValue = option.value = 'Playstation'
    option.textContent = optionValue;
    return option;
}

function createSelectVersion() {
    const selectVersion = document.createElement('select');
    selectVersion.classList.add('btn-2');
    selectVersion.name = 'Edition';
    selectVersion.id = 'editions';
    // Create options and append them to select
    const options = createVersionOptions();
    selectVersion.append(options);
    return selectVersion;
}

function createVersionOptions() {
    const option = document.createElement('option');
    const optionValue = option.value = 'Standard';
    option.textContent = optionValue;
    return option;
}

//* Price container

function createPriceContainer() {
    const priceContainer = document.createElement('div');
    priceContainer.classList.add('product-price')
    return priceContainer;
}

function createProductPriceBefore(priceBefore) {
    const productPriceBefore = document.createElement('p');
    productPriceBefore.classList.add('price-before');
    productPriceBefore.textContent = priceBefore;
    return productPriceBefore;
}

function createProductDiscount(price, discountedPrice) {
    const productDiscount = document.createElement('p');
    const percentage = getPercentage(price, discountedPrice);
    productDiscount.classList.add('price-discount');
    productDiscount.textContent = `-${percentage}%`
    return productDiscount;
}

function createProductPriceAfter(discountedPrice) {
    const productPriceAfter = document.createElement('p');
    productPriceAfter.classList.add('price-after');
    productPriceAfter.textContent = discountedPrice;
    return productPriceAfter;
}

//* Metadata container

export function createProductMetadataContainer() {
    const productMetadataContainer = document.createElement('div');
    productMetadataContainer.classList.add('product-metadata','flex','justify-sb');
    return productMetadataContainer;
}

function createMetadataTypeContainer(){
    const metadataTypeContainer = document.createElement('div');
    metadataTypeContainer.classList.add('flex','align-items-center','gap-10');
    return metadataTypeContainer;
}

function createMetadataVersionContainer(){
    const metadataVersionContainer = document.createElement('div');
    metadataVersionContainer.classList.add('flex','align-items-center','gap-10');
    return metadataVersionContainer;
}

function createMetadataActivationContainer(){
    const metadataActivationContainer = document.createElement('div');
    metadataActivationContainer.classList.add('flex','align-items-center','gap-10');
    return metadataActivationContainer;
}

function createMetadataTypeImg() {
    const metadataTypeImg = document.createElement('img');
    metadataTypeImg.src = '../../images/key-icon.svg';
    metadataTypeImg.alt = 'Key icon';
    return metadataTypeImg;
}

function createMetadataVersionImg() {
    const metadataVersionImg = document.createElement('img');
    metadataVersionImg.src = '../../images/global-icon.svg';
    metadataVersionImg.alt = 'World icon';
    return metadataVersionImg;
}

function createMetadataVerifiedImg() {
    const metadataVerifiedImg = document.createElement('img');
    metadataVerifiedImg.src = '../../images/verified-icon.svg';
    metadataVerifiedImg.alt = 'Verified icon';
    return metadataVerifiedImg;
}

function createMetadataTypeSpanContainer() {
    const metadataTypeSpanContainer = document.createElement('div');
    metadataTypeSpanContainer.classList.add('flex','column');
    return metadataTypeSpanContainer;
}
function createMetadataVersionSpanContainer() {
    const metadataTypeSpanContainer = document.createElement('div');
    metadataTypeSpanContainer.classList.add('flex','column');
    return metadataTypeSpanContainer;
}
function createMetadataVerifiedSpanContainer() {
    const metadataTypeSpanContainer = document.createElement('div');
    metadataTypeSpanContainer.classList.add('flex','column');
    return metadataTypeSpanContainer;
}

function createTypeFirstSpan () {
    const metadataTypeSpan = document.createElement('span');
    metadataTypeSpan.classList.add('grey');
    metadataTypeSpan.textContent = 'Type';
    return metadataTypeSpan;
}

function createTypeSecondSpan() {
    const secondarySpan = document.createElement('span');
    secondarySpan.textContent = 'Key'
    return secondarySpan;
}

function createVersionFirstSpan() {
    const metadataVersionSpan = document.createElement('span');
    metadataVersionSpan.classList.add('grey');
    metadataVersionSpan.textContent = 'Version';
    return metadataVersionSpan;
}

function createVersionSecondSpan() {
    const secondarySpan = document.createElement('span');
    secondarySpan.textContent = 'Global'
    return secondarySpan;
}

function createVerifiedFirstSpan() {
    const metadataVerifiedSpan = document.createElement('span');
    metadataVerifiedSpan.classList.add('grey');
    metadataVerifiedSpan.textContent = 'Can activate in';
    return metadataVerifiedSpan;
}

function createVerifiedSecondSpan() {
    const secondarySpan = document.createElement('span');
    secondarySpan.textContent = 'Norway'
    return secondarySpan;
}

//* Small picture container

function createSmallPictureContainer1() {
    const pictureContainer = document.createElement('div');
    pictureContainer.classList.add('small','m-right-10','border-radius-2','relative')
    return pictureContainer;
}

function createPreviousButton() {
    const previousButton = document.createElement('a');
    previousButton.classList.add('prev-img');
    previousButton.style.cursor = 'pointer';
    return previousButton;
}

function createPreviusIcon() {
    const icon = document.createElement('i');
    icon.classList.add('fa-solid','fa-angle-left');
    return icon;
}

function createSmallPicture1(image) {
    const smallPicture = document.createElement('img');
    smallPicture.style.cursor = 'pointer'
    smallPicture.src = image;
    smallPicture.addEventListener('click', () => updateImageBanner(smallPicture.src));
    return smallPicture;
}

function createSmallPictureContainer2() {
    const pictureContainer = document.createElement('div');
    pictureContainer.classList.add('small','m-right-10','border-radius-2')
    return pictureContainer;
}

function createSmallPicture2() {
    const smallPicture = document.createElement('img');
    smallPicture.style.cursor = 'pointer'
    smallPicture.src = '../../images/product-4.jpg';
    const src = smallPicture.src;
    smallPicture.addEventListener('click', () => updateImageBanner(src));
    
    return smallPicture;
}

function createSmallPictureContainer3() {
    const pictureContainer = document.createElement('div');
    pictureContainer.classList.add('small','m-right-10','border-radius-2')
    return pictureContainer;
}

function createSmallPicture3() {
    const smallPicture = document.createElement('img');
    smallPicture.style.cursor = 'pointer'
    smallPicture.src = '../../images/product-2.jpg';
    const src = smallPicture.src;
    smallPicture.addEventListener('click', () => updateImageBanner(src));
    return smallPicture;
}

function createSmallPictureContainer4() {
    const pictureContainer = document.createElement('div');
    pictureContainer.classList.add('small','m-right-10','border-radius-2','relative')
    return pictureContainer;
}

function createNextButton() {
    const nextButton = document.createElement('a');
    nextButton.classList.add('next-img');
    nextButton.style.cursor = 'pointer';
    return nextButton;
}

function createNextIcon() {
    const icon = document.createElement('i');
    icon.classList.add('fa-solid','fa-angle-right');
    return icon;
}

function createSmallPicture4() {
    const smallPicture = document.createElement('img');
    smallPicture.style.cursor = 'pointer'
    smallPicture.src = '../../images/product-3.jpg';
    const src = smallPicture.src;
    smallPicture.addEventListener('click', () => updateImageBanner(src));
    return smallPicture;
}



