import { FetchError, DataError } from "../utils/errorHandling.mjs";
import { randomTime } from "../utils/random-time.mjs";


export const url = 'https://api.noroff.dev/api/v1/gamehub';

export const data = async function fetchData() {
    try {
        const response = await fetch('https://api.noroff.dev/api/v1/gamehub');

        if (!response.ok) {
            throw new FetchError(`Error making request to ${url}`, response.status); 
        }

        const data = await response.json();

        if(!data) {
            throw new DataError("Data received from API is empty or invalid.");
        }

        const newObjectKeyTime = 'time';
        const newObjectKeyPlatforms = 'platforms';

        data.map((game)=> {

            game[newObjectKeyTime] = randomTime();
            game[newObjectKeyPlatforms] = {
                'steam': true, 
                'playstation': true,
                'xbox': true, 
                'nintendo': true};

            if (data.indexOf(game) % 2 === 0) {
                game.platforms.nintendo = false;
                game.platforms.xbox = false;
            } else if (data.indexOf(game) % 3 === 0) {
                game.platforms.nintendo = false;
                game.platforms.playstation = false;
            } else if(data.indexOf(game) % 5 === 0) {
                game.platforms.steam = false;
            } else if(data.indexOf(game) === 1 || data.indexOf(game) === 7) {
                game.platforms.nintendo = false;
            }
        });
     
        return data;

    } catch (error) {
        if (error instanceof FetchError) {
            console.error(`FetchError: ${error.message}, Status: ${error.status}`);
        } else if (error instanceof DataError) {
            console.error(`DataError: ${error.message}`);
        } else {
            console.error('An unknown error occurred.');
        }
    }
}
