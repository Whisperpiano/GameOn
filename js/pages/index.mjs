import { data } from "../modules/services/api-fetch.mjs";
import { gameTemplate, bestsellerContainer } from "../modules/components/templates/bestseller-template.mjs";
import { mainSliderTemplate, mainSliderContainer } from "../modules/components/templates/main-slider-template.mjs";
import { reviewsSliderTemplate, reviewsSliderContainer } from "../modules/components/templates/reviews-template.mjs";
import { RenderError } from "../modules/utils/errorHandling.mjs";
import { users } from "../modules/services/users-fetch.mjs";
import { randomTime } from "../modules/utils/random-time.mjs";

async function renderMainSlider() {
    try {
        const gamesArray = await data();

        if(!gamesArray) {
            throw new RenderError("Can not render main slider. Data received from API is empty or invalid.");
        }

        const favoriteGames = gamesArray.filter((game) => game.favorite === true);
    
        favoriteGames.map((game)=> {
            const { title, image, genre, description, price, discountedPrice, onSale, id} = game;
            const favoriteGameElement = mainSliderTemplate(title, description, image, genre, price, discountedPrice, onSale, id);
            mainSliderContainer.appendChild(favoriteGameElement); 
        })
        
    } catch (error) {
        if(error instanceof RenderError) {
            console.error(`RenderError: ${error.message}`);
        } else {
            console.error('An unknown error occurred rendering main slider.');
        }
    }
}
async function renderBestseller() {
    try {
        const gamesArray = await data();

        if(!gamesArray) {
            throw new RenderError("Can not render bestseller section. Data received from API is empty or invalid.");
        }

        const bestsellerArray = gamesArray.slice(0, 6);

        bestsellerArray.map((game)=> {
            const gameElement = gameTemplate(game.title, game.image, game.genre, game.price, game.discountedPrice);
            bestsellerContainer.appendChild(gameElement);
        })
        
    } catch (error) {
        if(error instanceof RenderError) {
            console.error(`RenderError: ${error.message}`);
        } else {
            console.error('An unknown error occurred rendering bestseller section.');
        }
    }
}

async function renderNewReleases() {
    const newReleasesContainer = document.querySelector('.newreleases__container');
    try {
        const gamesArray = await data();

        if(!gamesArray) {
            throw new RenderError("Can not render new releases section. Data received from API is empty or invalid.");
        }

        const newReleasesArray = gamesArray.slice(4, 10);

        newReleasesArray.map((game)=> {
            const gameElement = gameTemplate(game.title, game.image, game.genre, game.price, game.discountedPrice);
            newReleasesContainer.appendChild(gameElement);
        })
        
    } catch (error) {
        if(error instanceof RenderError) {
            console.error(`RenderError: ${error.message}`);
        } else {
            console.error('An unknown error occurred rendering new releases section.');
        }
    }
}

async function renderReviews() {
    try {
        const gamesArray = await data();

        if(!gamesArray) {
            throw new RenderError("Can not render reviews section. Data received from API is empty or invalid.");
        }

        const reviewsArray = gamesArray.slice(6, 9);

        const usersArray = await users();

        if(!usersArray) {
            throw new RenderError("Can not render reviews section. Data received from Users-API is empty or invalid.");
        }
        // Renders the reviews section.
        reviewsArray.map((game)=> {
            const { title, image, id } = game;
            const reviewElement = reviewsSliderTemplate(title, image, id);
            reviewsSliderContainer.appendChild(reviewElement);
        })
        // Patches to add user names and random time to reviews
        const name = document.querySelectorAll('.user-name');
        for (let i = 0; i < name.length; i++) { 
            name[i].textContent = usersArray[i].username; 
        }

        const commentTime = document.querySelectorAll('.comment-time');

        for (let i = 0; i < commentTime.length; i++) { 
            commentTime[i].textContent = randomTime(); 
        }

     
    } catch (error) {
        if(error instanceof RenderError) {
            console.error(`RenderError: ${error.message}`);
        } else {
            console.error('An unknown error occurred rendering reviews section.');
        }
    }
}

function main () {
    renderMainSlider();
    renderBestseller();
    renderNewReleases();
    renderReviews();
}

main()





