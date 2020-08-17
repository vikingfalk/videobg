//DOM-objekt
const tglBtn = document.querySelector('.toggle-button');
const tglMenu = document.querySelector('.toggle-menu');
const overlay = document.querySelector('.overlay');

//menyknapp
const menuTgls = [tglBtn, tglMenu, overlay]

tglBtn.addEventListener('click', () => {
    menuTgls.forEach(e => e.classList.toggle('active'))
});

overlay.addEventListener('click', () => {
    menuTgls.forEach(e => e.classList.remove('active'))
});