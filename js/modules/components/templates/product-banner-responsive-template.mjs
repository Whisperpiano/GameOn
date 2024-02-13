import { createProductMetadataContainer } from "./product-banner-template.mjs";

export function productBannerResponsiveTemplate(id, title, description, genre, released, ageRating, price, discountedPrice, onSale, image) {
    const bannerResponsiveContainer = createBannerResponsiveContainer();
    const topBannerContainer = createTopBannerContainer();
    const bottomBannerContainer = createBottomBannerContainer();
    const nameContainer = createNameContainer();
    const goBackLink = createGoBackLink();
    const goBackIcon = createGoBackIcon();
    const productName = createProductName(title);
    const shareLink = createShareLink();
    const shareIcon = createShareIcon();
    const imageContainer = createImageContainer();
    const productImage = createImage(image, title);
    const metadataContainer = createProductMetadataContainer();

    metadataContainer.classList.remove('justify-sb');
    metadataContainer.classList.add('center','gap-50');

    imageContainer.append(productImage);


    goBackLink.append(goBackIcon);
    shareLink.append(shareIcon);
    nameContainer.append(goBackLink, productName, shareLink);

    topBannerContainer.append(nameContainer, imageContainer, metadataContainer);

    bannerResponsiveContainer.append(topBannerContainer, bottomBannerContainer);

    return bannerResponsiveContainer;
    
}

function createBannerResponsiveContainer() {
    const createBannerResponsiveContainer = document.createElement('figure');
    return createBannerResponsiveContainer;
}

//* Top container

function createTopBannerContainer(){
    const topBannerContainer = document.createElement('div');
    topBannerContainer.classList.add('product-panel-responsive','border-bottom');
    return topBannerContainer;
}

function createNameContainer() {
    const nameContainer = document.createElement('div');
    nameContainer.classList.add('pp-responsive-top','flex','justify-sb');
    return nameContainer;
}

function createGoBackLink() {
    const goBackButton = document.createElement('a');
    goBackButton.href = '../index.html';
    return goBackButton;
}

function createGoBackIcon() {
    const goBackIcon = document.createElement('i');
    goBackIcon.classList.add('fa-solid','fa-chevron-left');
    return goBackIcon;
}

function createProductName(title) {
    const productName = document.createElement('h2');
    productName.classList.add('headline');
    productName.textContent = title;
    return productName;
}

function createShareLink() {
    const shareLink = document.createElement('a');
    shareLink.href = '#';
    return shareLink;
}

function createShareIcon() {
    const shareIcon = document.createElement('i');
    shareIcon.classList.add('fa-solid','fa-share-nodes');
    return shareIcon;
}

function createImageContainer() {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('pp-responsive-mid','flex','center');
    return imageContainer;
}

function createImage(image, title) {
    const productImage = document.createElement('img');
    productImage.src = image;
    productImage.alt = title;
    return productImage;
}


//* Bottom container

function createBottomBannerContainer() {
    const bottomBannerContainer = document.createElement('div');
    bottomBannerContainer.classList.add('pp-responsive-bottom','flex','column','justify-sb','text-center');
    return bottomBannerContainer;
}

