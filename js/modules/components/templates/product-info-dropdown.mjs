export function informationDropDown() {
    const button = document.querySelector('.product-accordion__label');
    const bkn = document.querySelector('.bkn');
    button.addEventListener('click', (e) => {
        if (bkn.style.background === 'none') {
            bkn.style.background = 'linear-gradient(0deg, rgba(20, 21, 27, 1) 0%, transparent 100%)';
            button.textContent = 'Show more'
            const span = createSpan();
            const icon = createIcon();
            icon.classList.add('fas', 'fa-chevron-down');
            button.appendChild(span);
            span.appendChild(icon);
        } else {
            bkn.style.background = 'none';
            button.textContent = 'Show less'
            const span = createSpan();
            const icon = createIcon();
            icon.classList.add('fas', 'fa-chevron-up');
            button.appendChild(span);
            span.appendChild(icon);
        }
    })
}

function createSpan() {
    const span = document.createElement('span');
    return span;
}

function createIcon() {
    const icon = document.createElement('i');
    return icon;
}