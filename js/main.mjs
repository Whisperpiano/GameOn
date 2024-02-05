console.log('Hello World')


const url = 'https://api.noroff.dev/api/v1/gamehub';

// Get array of API data
const gamesArray = async function getGamesData() {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
        return data;
    }

    throw new Error('ERROR');
}


async function example(){
    const games = await gamesArray();
    
    for(let i = 0; i < games.length; i++){
        const gameData = games[i];
        createSlide(gameData, i);
    }
}

// function createSlide(gameData, index){
//     const names = document.querySelectorAll('.name');
//     const images = document.querySelectorAll('.slide-img');
//     const prices = document.querySelectorAll('.price'); // Add this line

//     if (names[index]) {
//         names[index].textContent = gameData.title;
//     }

//     if (images[index]) {
//         images[index].style.backgroundImage = `url(${gameData.image})`;
//     }
    
//     if (prices[index]) { // Update this line
//         prices[index].textContent = gameData.price;
//     }
// }

// example()

function createSlide(gameData, index){
    const slider = document.querySelector('.main-slider');
    const names = slider.querySelectorAll('.name');
    const images = slider.querySelectorAll('.slide-img');
    const priceAfter = slider.querySelectorAll('.price');
    const priceAfterDiscount = slider.querySelectorAll('.subprice');
    const onSale = slider.querySelectorAll('.onsale');

    if (names[index]) {
        names[index].textContent = gameData.title;
    }

    if (images[index]) {
        images[index].style.backgroundImage = `url(${gameData.image})`;
    }
    
    if (priceAfter[index]) {
        if (gameData.price - gameData.discountedPrice <= 0) {
            priceAfter[index].textContent = gameData.price;
            if (priceAfterDiscount[index]) {
                priceAfterDiscount[index].remove();
                onSale[index].remove();
            }
        } else {
            priceAfter[index].textContent = gameData.price - gameData.discountedPrice;
            if (priceAfterDiscount[index]) {
                priceAfterDiscount[index].textContent = gameData.price;
            }
        }
    }
}



example()