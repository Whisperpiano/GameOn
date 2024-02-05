const cartBtn = document.querySelector('#cart-btn');
const favoritesBtn = document.querySelector('#favorites-btn');
const cartSpan = document.querySelector('#cart-span');
const favoritesSpan = document.querySelector('#favorites-span');

const addToCartBtns = document.getElementsByName('addToCartBtn');
const addToFavBtns = document.getElementsByName('addToFavBtn');

addToCartBtns.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        cartSpan.textContent++;
    })
})

addToFavBtns.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        favoritesSpan.textContent++;
    })
})


