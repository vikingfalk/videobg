//DOM-objekt
const html = document.querySelector('html');
const body = document.querySelector('body');
const tglBtn = document.querySelector('.toggle-button');
const tglMenu = document.querySelector('.toggle-menu');
const overlay = document.querySelector('.overlay');


//menyknapp
const menuTgls = [tglBtn, tglMenu, overlay];
body.style = `margin-right: ${getScrollWidth()}px`;

tglBtn.addEventListener('click', () => {
    menuTgls.forEach(e => e.classList.toggle('active'))
    html.classList.toggle('no-scroll');
    body.classList.toggle('no-scroll');
});

overlay.addEventListener('click', () => {
    menuTgls.forEach(e => e.classList.remove('active'))
});

function getScrollWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}
