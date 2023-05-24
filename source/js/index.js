let navDropdown = document.querySelector('.navigation');
let burgerButton = document.querySelector('.js-burger-trigger');
let burgerIconClose = document.querySelector('.burger__icon-close');
let burgerIconOpen = document.querySelector('.burger__icon-open');

burgerButton.addEventListener('click', function () {
    if (navDropdown.classList.contains('navigation--hidden')) {
        navDropdown.classList.remove('navigation--hidden');
        burgerIconClose.classList.add('burger__icon--hidden');
        burgerIconClose.classList.remove('burger__icon--active');
        burgerIconOpen.classList.add('burger__icon--active');
        burgerIconOpen.classList.remove('burger__icon--hidden');
    } else {
        navDropdown.classList.add('navigation--hidden');
        burgerIconOpen.classList.add('burger__icon--hidden');
        burgerIconOpen.classList.remove('burger__icon--active');
        burgerIconClose.classList.add('burger__icon--active');
        burgerIconClose.classList.remove('burger__icon--hidden');
    }
});