

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
        navbar.classList.add('bg-[#152238]/70', 'backdrop-blur-md');
        logo.classList.add('text-[#fadbb9]');
        menuNav.classList.add('text-[#fadbb9]');
    } else {
        navbar.classList.remove('bg-[#152238]/70', 'backdrop-blur-md');
        logo.classList.remove('text-[#fadbb9]');
        menuNav.classList.remove('text-[#fadbb9]');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "-translate-x-12");
        } else {
            entry.target.classList.remove("opacity-100", "translate-x-0");
            entry.target.classList.add("opacity-0", "-translate-x-12");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".box").forEach((el) => observer.observe(el));


const popup = document.getElementById("popup");
const popupKey = "popupTimestamp";
const delay = 6000; // 6 detik testing

window.addEventListener("load", () => {
    const lastShown = localStorage.getItem(popupKey);
    const now = Date.now();

    if (!lastShown || now - lastShown > delay) {
        popup.classList.remove("hidden");
    }
});

function closePopup() {
    popup.classList.add("hidden");
    localStorage.setItem(popupKey, Date.now());
}

emailjs.init({
    publicKey: "9XSsAWXxrBmxP6F2Y"
});

const form = document.getElementById("myForm");
const loading = document.getElementById("loading");
const thankyou = document.getElementById("thankyou");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // sembunyiin form, munculin loading
    form.classList.add("hidden");
    loading.classList.remove("hidden");

    emailjs.sendForm("service_tl26hnu", "template_7h90fbb", this)
        .then(() => {
            loading.classList.add("hidden");
            thankyou.classList.remove("hidden");
        })
        .catch(err => {
            loading.classList.add("hidden");
            form.classList.remove("hidden");
            alert("Error: " + JSON.stringify(err));
        });
});