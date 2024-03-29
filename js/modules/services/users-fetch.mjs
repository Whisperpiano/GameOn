import { FetchError, DataError } from "../utils/errorHandling.mjs";

export async function users() {
  const url =
    "https://raw.githubusercontent.com/Whisperpiano/GameOn/js1_ca/data/users.json";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new FetchError(`Error making request to ${url}`, response.status);
    }

    const data = await response.json();

    if (!data) {
      throw new DataError("Data received from Users-API is empty or invalid.");
    }

    return data;
  } catch (error) {
    if (error instanceof FetchError) {
      console.error(`FetchError: ${error.message}, Status: ${error.status}`);
    } else if (error instanceof DataError) {
      console.error(`DataError: ${error.message}`);
    } else {
      console.error("An unknown error occurred.");
    }
  }
}
