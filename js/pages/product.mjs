import { dataById } from "../modules/services/api-fetch.mjs";
import { RenderError } from "../modules/utils/errorHandling.mjs";
import { productPanelTemplate } from "../modules/components/templates/product-banner-template.mjs";
import { productBannerResponsiveTemplate } from "../modules/components/templates/product-banner-responsive-template.mjs";

async function renderProductBannerTemplate() {
    const productBannerContainer = document.querySelector('.product-panel');

    try {
        const urlString = window.location.search;
        const productID = new URLSearchParams(urlString).get('id');
        const game = await dataById(productID);

        if(!game) {
            throw new RenderError("Can not render product panel. Data received from API is empty or invalid.");
        }

        const { id, title, description, genre, released, ageRating, price, discountedPrice, onSale, image } = game;

        const renderGame = productPanelTemplate(id, title, description, genre, released, ageRating, price, discountedPrice, onSale, image)

        productBannerContainer.append(renderGame)

    
        
        
    } catch (error) {
        if(error instanceof RenderError) {
            console.error(`RenderError: ${error.message}`);
        } else {
            console.error('An unknown error occurred rendering product panel.');
        }
    }
}

async function renderProductBannerResponsiveTemplate() {
    const productBannerResponsiveContainer = document.querySelector('.responsive-product-panel');

    try {
        const urlString = window.location.search;
        const productID = new URLSearchParams(urlString).get('id');
        const game = await dataById(productID);

        if(!game) {
            throw new RenderError("Can not render responsive product panel. Data received from API is empty or invalid.");
        }

        const { id, title, description, genre, released, ageRating, price, discountedPrice, onSale, image } = game;

        const renderGame = productBannerResponsiveTemplate(id, title, description, genre, released, ageRating, price, discountedPrice, onSale, image);

        productBannerResponsiveContainer.append(renderGame);

    } catch (error) {
        if(error instanceof RenderError) {
            console.error(`RenderError: ${error.message}`);
        } else {
            console.error('An unknown error occurred rendering responsive product panel.');
        }
    }
}

function main () {
    renderProductBannerTemplate();
    renderProductBannerResponsiveTemplate();
}

main()