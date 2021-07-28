const burguerBtn = document.querySelector('.burguer');
const closeBtn = document.querySelector('.close-btn');

const mobileMenu = document.querySelector('.mobile-menu')
const mobileLinks = document.querySelector('.mobile-links');
const heroImg = document.querySelector('.hero');
const navBar = document.querySelector('.nav-bar');
const barName = document.querySelector('.bar-name');
const navBox = document.querySelector('.nav-box');
const main = document.getElementsByTagName('main')[0];
const footer = document.getElementsByTagName('footer')[0];

burguerBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
    navBar.style.display = 'none'
    barName.style.display = 'none';
    mobileLinks.style.display = 'block';
    heroImg.style.display = 'none';
    navBox.style.display = 'none';
    main.style.display = 'none';
    footer.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    navBar.style.display = 'flex'
    barName.style.display = 'block';
    mobileLinks.style.display = 'none';
    heroImg.style.display = 'block';
    navBox.style.display = 'block';
    main.style.display = 'block';
    footer.style.display = 'flex';
})