import { FetchError, DataError } from "../utils/errorHandling.mjs";

export const users = async function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/users'

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new FetchError(`Error making request to ${url}`, response.status); 
        }

        const data = await response.json();

        if(!data) {
            throw new DataError("Data received from Users-API is empty or invalid.");
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

