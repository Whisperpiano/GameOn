export function showLoader() {
    const preloader = document.querySelector('#preloader')
    preloader.classList.remove('hidden');
}

export function hideLoader() {
    const preloader = document.querySelector('#preloader')
    preloader.classList.add('hidden');
}