

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

const swiper = new Swiper('.swiper', {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');
const menuNav = document.getElementById('menuNav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-[#c2cca6]/70', 'backdrop-blur-md');
        logo.classList.add('text-[#2E361C]');
        menuNav.classList.add('text-[#2E361C]');
    } else {
        navbar.classList.remove('bg-[#c2cca6]/70', 'backdrop-blur-md');
        logo.classList.remove('text-[#2E361C]');
        menuNav.classList.remove('text-[#2E361C]');
    }
});