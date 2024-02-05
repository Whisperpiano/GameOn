// const url = 'https://api.noroff.dev/api/v1/gamehub';


// async function getGames() {
//     const response = await fetch(url);
//     const data = await response.json();
    
//     if (response.ok) {
//         return data;
//     }

//     throw new Error(data.errors[0].message);
// }

// // Retrieves a single game by ID
// async function getGame(id) {
//     const response = await fetch(`${url}/${id}`);
//     const data = await response.json();
    
//     if (response.ok) {
//         return data;
//     }

//     // There can be multiple errors, but usually there is only one
//     throw new Error(data.errors[0].message);
// }

// function renderGame(gameData, parent) {
//     // your selected render method
//     parent.append(gameItem);
// }

// async function setup() {
//     try {
//         const games = await getGames();
//         games.forEach(game => renderGame(game, document.body));
//         return "Ready!"
//     } catch (err) {
//         alert(err);
//         return "Error!"
//     }
// }

// setup().then(console.log)