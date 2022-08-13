const menu = document.getElementsByClassName('menu-btn'); // return a collection of elements.
// const menu = document.querySelector('.menu-btn'); --> return the first elements that matches a css selector.

let menuOpen = false;

menu[0].addEventListener('click',() => {
    menuOpen ? menu[0].classList.add('open') : menu[0].classList.remove('open');
    menuOpen = !menuOpen;
});

