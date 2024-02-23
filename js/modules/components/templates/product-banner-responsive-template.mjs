import { getPercentage } from '../../utils/calculate-percentage.mjs';
import { capitalizeFirstLetter } from '../capitalize-first-letter.mjs';

export function productBannerResponsiveTemplate({ title, price, discountedPrice, image, platforms }) {
    createResponsiveMainPicture(image, title);
    createResponsiveProductName(title);
    createResponsivePlatformsOptions(platforms);
    createResponsivePrices(price, discountedPrice);
}

function createResponsiveMainPicture(image, title) {
    const responsiveMainPicture = document.querySelector('#responsive-main-picture');
    responsiveMainPicture.src = image;
    responsiveMainPicture.alt = `${title} cover image`;
    return responsiveMainPicture;
}

function createResponsiveProductName(title) {
    const responsiveProductName = document.querySelector('#responsive-name');
    responsiveProductName.textContent = title;
    return responsiveProductName;
}

function createResponsivePlatformsOptions(platforms) {
    const selectPlatform = document.querySelector('#responsive-platforms-select');
    const platformsArray = Object.entries(platforms);
    const options = platformsArray.map(([platform, available]) => {
        if (available) {
            const option = document.createElement('option');
            option.value = platform;
            option.textContent = capitalizeFirstLetter(platform);
            selectPlatform.append(option);
            return option;
        }
    });
    
    return selectPlatform;
}

function createResponsivePrices(price, discountedPrice) {
    const responsivePriceBefore = document.querySelector('#responsive-price-before');
    const responsiveDiscount = document.querySelector('#responsive-price-discount');
    const responsivePriceAfter = document.querySelector('#responsive-price-after');
    const percentage = getPercentage(price, discountedPrice);

    responsivePriceBefore.textContent = price;
    responsiveDiscount.textContent = `-${percentage}%`;
    responsivePriceAfter.textContent = discountedPrice;
    if (price === discountedPrice) {
        responsivePriceBefore.style.display = 'none';
        responsiveDiscount.style.display = 'none';
    }
    return responsivePriceAfter;
}