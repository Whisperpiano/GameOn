export function cartEmptyTemplate() {
    removeAside();
    removeH2();
    showEmptyCart();
}

function removeAside() {
    const aside = document.querySelector('.cart-page');
    aside.style.display = "none";
}

function removeH2() {
    const h2 = document.querySelector('.headline');
    h2.style.display = "none";
}

export function showEmptyCart() {
    const emptyCart = document.querySelector('.empty-cart');
    emptyCart.style.display = "flex";
   
}