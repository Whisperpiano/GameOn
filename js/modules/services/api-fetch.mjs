import { FetchError, DataError } from "../utils/errorHandling.mjs";

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

