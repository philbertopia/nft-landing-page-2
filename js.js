//Get elements from the DOM
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

//Toggle open/close menu
menu.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});
