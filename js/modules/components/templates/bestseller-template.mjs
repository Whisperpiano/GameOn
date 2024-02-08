import { getPercentage } from '../../utils/calculate-percentage.mjs';

export const bestsellerContainer = document.querySelector('.bestseller__container');

// export function gameTemplate(name, imageURL, genre, price, discountedPrice) {
//     const gameContainer = document.createElement('div');
//     gameContainer.classList.add('item');

//     const topContainer = document.createElement('div');
//     topContainer.classList.add('relative');

//     const link = document.createElement('a');
//     link.href = './product/index.html';

//     const picture = document.createElement('picture');
//     const image = document.createElement('img');
//     image.classList.add('item-img');
//     image.src = imageURL;
//     image.alt = name;
//     picture.appendChild(image);

//     const platformsContainer = document.createElement('div');
//     platformsContainer.classList.add('item-platforms','flex');
//     const platformSpan = document.createElement('span');
//     platformSpan.classList.add('genre');
//     platformSpan.textContent = genre;
//     platformsContainer.appendChild(platformSpan);

//     const discountContainer = document.createElement('div');
//     discountContainer.classList.add('item-discount','btn','btn-3');
//     const discountSpan = document.createElement('span');
//     discountSpan.classList.add('discounted-price');
//     discountContainer.appendChild(discountSpan);

//     if (price - discountedPrice <= 0) {
//         discountContainer.style.visibility = 'hidden';
//     } else {
//     discountSpan.textContent = `${getPercentage(price, discountedPrice)}%`;}


//     const overlayContainer = document.createElement('div');
//     overlayContainer.classList.add('item-overlay');
//     const overlayButtonsContainer = document.createElement('div');
//     overlayButtonsContainer.classList.add('item-overlay__buttons');
    
//     const  addToCartLink = document.createElement('a');
//     addToCartLink.href = '#';
//     const addToCartBtn = document.createElement('button');
//     addToCartBtn.type = 'button';
//     addToCartBtn.classList.add('btn','btn-1','btn-overlay', 'uppercase');
//     addToCartBtn.textContent = 'Add';
//     const addToCartIcon = document.createElement('i');
//     addToCartIcon.classList.add('fa-solid','fa-cart-shopping');
//     addToCartBtn.appendChild(addToCartIcon);
//     addToCartLink.appendChild(addToCartBtn);

//     const  viewLink = document.createElement('a');
//     viewLink.href = '#';
//     const viewBtn = document.createElement('button');
//     viewBtn.type = 'button';
//     viewBtn.classList.add('btn','btn-2','btn-overlay', 'uppercase');
//     viewBtn.textContent = 'View';
//     const viewIcon = document.createElement('i');
//     viewIcon.classList.add('fa-solid','fa-up-right-from-square');
//     viewBtn.appendChild(viewIcon);
//     viewLink.appendChild(viewBtn);
//     overlayButtonsContainer.append(addToCartLink, viewLink);
//     overlayContainer.appendChild(overlayButtonsContainer);

//     link.append(picture, platformsContainer, discountContainer, overlayContainer);
//     topContainer.appendChild(link);

//     const bottomContainer = document.createElement('div');
//     bottomContainer.classList.add('flex','justify-sb');
//     const bottomLink = document.createElement('a');
//     bottomLink.href = './product/index.html';
//     bottomLink.classList.add('name-hover');
//     const itemTitle = document.createElement('h6');
//     itemTitle.classList.add('item-name');
//     itemTitle.textContent = name;
//     bottomLink.appendChild(itemTitle);
//     const itemPrice = document.createElement('span');
//     itemPrice.textContent = `$${discountedPrice}`;
//     itemPrice.classList.add('item-price');
//     bottomContainer.append(bottomLink, itemPrice);

//     gameContainer.append(topContainer, bottomContainer);
//     return gameContainer;
// }

export function gameTemplate(name, imageURL, genre, price, discountedPrice) {
    const gameContainer = createGameContainer();
    const topContainer = createTopContainer();
    const link = createLink();
    const picture = createPicture(imageURL, name);
    const platformsContainer = createPlatformsContainer(genre);
    const discountContainer = createDiscountContainer(price, discountedPrice);
    const overlayContainer = createOverlayContainer();
    const overlayButtonsContainer = createOverlayButtonsContainer();
    const addToCartLink = createAddToCartLink();
    const addToCartBtn = createAddToCartButton();
    const viewLink = createViewLink();
    const viewBtn = createViewButton();
    const bottomContainer = createBottomContainer();
    const bottomLink = createBottomLink();
    const itemTitle = createItemTitle(name);
    const itemPrice = createItemPrice(discountedPrice);

    addToCartLink.appendChild(addToCartBtn);
    viewLink.appendChild(viewBtn);
    overlayButtonsContainer.append(addToCartLink, viewLink);
    overlayContainer.appendChild(overlayButtonsContainer);
    link.append(picture, platformsContainer, discountContainer, overlayContainer);
    topContainer.appendChild(link);
    bottomLink.appendChild(itemTitle);
    bottomContainer.append(bottomLink, itemPrice);
    gameContainer.append(topContainer, bottomContainer);

    return gameContainer;
}

function createGameContainer() {
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('item');
    return gameContainer;
}

function createTopContainer() {
    const topContainer = document.createElement('div');
    topContainer.classList.add('relative');
    return topContainer;
}

function createLink() {
    const link = document.createElement('a');
    link.href = './product/index.html';
    return link;
}

function createPicture(imageURL, name) {
    const picture = document.createElement('picture');
    const image = document.createElement('img');
    image.classList.add('item-img');
    image.src = imageURL;
    image.alt = name;
    picture.appendChild(image);
    return picture;
}

function createPlatformsContainer(genre) {
    const platformsContainer = document.createElement('div');
    platformsContainer.classList.add('item-platforms', 'flex');
    const platformSpan = document.createElement('span');
    platformSpan.classList.add('genre');
    platformSpan.textContent = genre;
    platformsContainer.appendChild(platformSpan);
    return platformsContainer;
}

function createDiscountContainer(price, discountedPrice) {
    const discountContainer = document.createElement('div');
    discountContainer.classList.add('item-discount', 'btn', 'btn-3');
    const discountSpan = document.createElement('span');
    discountSpan.classList.add('discounted-price');
    discountContainer.appendChild(discountSpan);

    if (price - discountedPrice <= 0) {
        discountContainer.style.visibility = 'hidden';
    } else {
        discountSpan.textContent = `-${getPercentage(price, discountedPrice)}%`;
    }

    return discountContainer;
}

function createOverlayContainer() {
    const overlayContainer = document.createElement('div');
    overlayContainer.classList.add('item-overlay');
    return overlayContainer;
}

function createOverlayButtonsContainer() {
    const overlayButtonsContainer = document.createElement('div');
    overlayButtonsContainer.classList.add('item-overlay__buttons');
    return overlayButtonsContainer;
}

function createAddToCartLink() {
    const addToCartLink = document.createElement('a');
    addToCartLink.href = '#';
    return addToCartLink;
}

function createAddToCartButton() {
    const addToCartBtn = document.createElement('button');
    addToCartBtn.type = 'button';
    addToCartBtn.classList.add('btn', 'btn-1', 'btn-overlay', 'uppercase');
    addToCartBtn.textContent = `Add`;
    const addToCartIcon = document.createElement('i');
    addToCartIcon.classList.add('fa-solid', 'fa-cart-shopping');
    addToCartBtn.appendChild(addToCartIcon);
    return addToCartBtn;
}

function createViewLink() {
    const viewLink = document.createElement('a');
    viewLink.href = '#';
    return viewLink;
}

function createViewButton() {
    const viewBtn = document.createElement('button');
    viewBtn.type = 'button';
    viewBtn.classList.add('btn', 'btn-2', 'btn-overlay', 'uppercase');
    viewBtn.textContent = 'View';
    const viewIcon = document.createElement('i');
    viewIcon.classList.add('fa-solid', 'fa-up-right-from-square');
    viewBtn.appendChild(viewIcon);
    return viewBtn;
}

function createBottomContainer() {
    const bottomContainer = document.createElement('div');
    bottomContainer.classList.add('flex', 'justify-sb');
    return bottomContainer;
}

function createBottomLink() {
    const bottomLink = document.createElement('a');
    bottomLink.href = './product/index.html';
    bottomLink.classList.add('name-hover');
    return bottomLink;
}

function createItemTitle(name) {
    const itemTitle = document.createElement('h6');
    itemTitle.classList.add('item-name');
    itemTitle.textContent = name;
    return itemTitle;
}

function createItemPrice(discountedPrice) {
    const itemPrice = document.createElement('span');
    itemPrice.textContent = `$${discountedPrice}`;
    itemPrice.classList.add('item-price');
    return itemPrice;
}

