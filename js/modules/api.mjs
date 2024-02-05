// Option 1 of fetching data from API

// let products = [];

// fetch('https://api.noroff.dev/api/v1/gamehub')
//     .then(response => {
//         if(!response.ok) {
//             throw Error("ERROR");
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     })

// Option 2 of fetching data from API

async function fetchData() {
    try {
        const response = await fetch('https://api.noroff.dev/api/v1/gamehub');
        const data = await response.json();

        if(!response.ok) {
            throw Error("ERROR");
        }

        updateItem(data);
        updateItemImg(data);

    } catch (error) {
        console.log(error);
    }
}

function updateItem(data) {
    const item = document.querySelector('.item');
    const itemName = item.querySelector ('.item-name');
    
    itemName.textContent = data[1].title;

    return item;
}

function updateItemImg(data) {
    const item = document.querySelector('.item');
    const itemImg = item.querySelector ('.item-img');
    
    itemImg.src = data[1].image;

    return item;
}









// const products = [];
// const productsData = (data) => {
//     data.forEach(product => {
//         products.push(product);
//     });
// }

// console.log(products[2].title);










// async function getProducts() {
//    try {
//     const products = await fetchData();
//    } catch (error) {
//        console.log(error);
//    }
// }

// getProducts();

