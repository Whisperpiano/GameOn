export function cartEmptyTemplate() {
    removeAside();
    removeH2();
}

function removeAside() {
    const aside = document.querySelector('.cart-page');
    aside.style.display = "none";
}

function removeH2() {
    const h2 = document.querySelector('.headline');
    h2.style.display = "none";
}


