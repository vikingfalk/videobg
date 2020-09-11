//DOM objects
const html = document.querySelector('html');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const navCont = document.querySelector('.nav-container');
const tglBtn = document.querySelector('.toggle-button');
const tglMenu = document.querySelector('.toggle-menu');
const overlay = document.querySelector('.overlay');
const brand = document.querySelector('.brand');
const scrlIcon = document.querySelector('.scroll-icon');
const beansContainers = document.querySelectorAll('.beans-container');
const matchContent = document.querySelector('.match-content');
const matchContainer = document.querySelector('.match-container');
const aboutContent = document.querySelector('.about-content');
const aboutContainer = document.querySelector('.about-container');
const matchMkr = document.querySelector('.matchmaker-container');


//menu button
const menuTgls = [tglBtn, tglMenu, overlay];

tglBtn.addEventListener('click', () => {
    menuTgls.forEach(e => e.classList.toggle('active'))
    html.classList.toggle('no-scroll');
    body.classList.toggle('no-scroll');
    
    //position the menu button in fixed position without position: fixed
    tglBtn.style.left = Math.floor(body.getBoundingClientRect().right - tglBtn.getBoundingClientRect().right - 46) + "px";
    tglBtn.style.top = Math.floor(46 - tglBtn.getBoundingClientRect().top) + "px";
});

overlay.addEventListener('click', () => {
    menuTgls.forEach(e => e.classList.remove('active'))
    html.classList.remove('no-scroll');
    body.classList.remove('no-scroll');

    tglBtn.style.left = Math.floor(body.getBoundingClientRect().right - tglBtn.getBoundingClientRect().right - 46) + "px";
    tglBtn.style.top = Math.floor(46 - tglBtn.getBoundingClientRect().top) + "px";
});

window.addEventListener('resize', () => {
    let mq = window.matchMedia('(min-width:992px)');

    if(mq.matches) {
        menuTgls.forEach(e => e.classList.remove('active'))
        html.classList.remove('no-scroll');
        body.classList.remove('no-scroll');
    }
});


//shrinking navbar
document.addEventListener('scroll', () => {
    if(html.scrollTop > 50) {
        brand.style.transform = 'scale(0.8) translateX(-10%)'
        navbar.style.backgroundColor = 'rgba(20,20,20,1)';
        navbar.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.6)';
        navCont.style.padding = '5px 0';
        scrlIcon.style.display = 'none';
    }
    else {
        brand.style.transform = ''
        navbar.style.backgroundColor = '';
        navbar.style.boxShadow = 'none';
        navCont.style.padding = '30px 0';
        scrlIcon.style.display = 'initial';
    }
});


//matchmaker
beansContainers.forEach(beanContainer => {
    const beans = beanContainer.children;

    for(i = 0; i < beans.length; i++) {
        const bean = beans[i];
        const j = i;

        beans[i].addEventListener('mouseover', () => {
            let temp = bean;

            while(temp.previousElementSibling) {
                temp.previousElementSibling.classList.add('active');
                temp = temp.previousElementSibling;
            }
        });
        beans[i].addEventListener('mouseout', () => {
            let temp = bean;

            while(temp.previousElementSibling) {
                temp.previousElementSibling.classList.remove('active');
                temp = temp.previousElementSibling;
            }
        });
        beans[i].addEventListener('click', () => {
            let temp = bean;
            
            for(i = j+1; i < beans.length; i++) {
                temp.parentElement.children[i].classList.remove('selected');
            }

            temp.classList.add('selected');
            while(temp.previousElementSibling) {
                temp.previousElementSibling.classList.add('selected');
                temp = temp.previousElementSibling;
            }
        });
    }
    
});

//slide in effects
document.addEventListener('scroll', () => {

    if(html.scrollTop > 300) {
        matchContent.classList.add('slide');
    }

    if(html.scrollTop > 450) {
        setTimeout(() => {matchMkr.classList.add('slide')}, 300);
    }

    if(html.scrollTop > 2000) {
        aboutContent.classList.add('slide');
    }
});