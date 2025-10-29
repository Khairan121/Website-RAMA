

const btn=document.getElementById("menu-btn"),menu=document.getElementById("mobile-menu");btn.addEventListener("click",(()=>{menu.classList.toggle("max-h-0"),menu.classList.toggle("opacity-0"),menu.classList.toggle("scale-y-0"),menu.classList.toggle("max-h-[300px]"),menu.classList.toggle("opacity-100"),menu.classList.toggle("scale-y-100")}));const swiper=new Swiper(".swiper",{loop:!0,effect:"fade",autoplay:{delay:2500},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),navbar=document.getElementById("navbar"),logo=document.getElementById("logo"),menuNav=document.getElementById("menuNav"),logoBira=document.getElementById("logoBira");window.addEventListener("scroll",(()=>{window.scrollY>50?(navbar.classList.add("bg-[#152238]/70","backdrop-blur-md"),logo.classList.add("text-[#c9a883]"),menuNav.classList.add("text-[#c9a883]")):(navbar.classList.remove("bg-[#152238]/70","backdrop-blur-md"),logo.classList.remove("text-[#c9a883]"),menuNav.classList.remove("text-[#c9a883]"))}));const observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?(e.target.classList.add("opacity-100","translate-x-0"),e.target.classList.remove("opacity-0","-translate-x-12")):(e.target.classList.remove("opacity-100","translate-x-0"),e.target.classList.add("opacity-0","-translate-x-12"))}))}),{threshold:.3});document.querySelectorAll(".box").forEach((e=>observer.observe(e)));const popup=document.getElementById("popup"),popupKey="popupTimestamp",delay=18e5;function closePopup(){popup.classList.add("hidden"),localStorage.setItem(popupKey,Date.now())}window.addEventListener("load",(()=>{const e=localStorage.getItem(popupKey),t=Date.now();(!e||t-e>delay)&&popup.classList.remove("hidden")})),emailjs.init({publicKey:"9XSsAWXxrBmxP6F2Y"});const form=document.getElementById("myForm"),loading=document.getElementById("loading"),thankyou=document.getElementById("thankyou");form.addEventListener("submit",(function(e){e.preventDefault(),form.classList.add("hidden"),loading.classList.remove("hidden"),emailjs.sendForm("service_tl26hnu","template_7h90fbb",this).then((()=>{loading.classList.add("hidden"),thankyou.classList.remove("hidden")})).catch((e=>{loading.classList.add("hidden"),form.classList.remove("hidden"),alert("Error: "+JSON.stringify(e))}))}));

// if ("serviceWorker" in navigator) {
//             navigator.serviceWorker
//                 .register("/Website-RAMA/sw.js")
//                 .then(() => console.log("Service Worker aktif!"))
//                 .catch((err) => console.log("Gagal register SW:", err));
//         }


// function testLoader() {
//   const loading = document.getElementById('loading');
//   const thankyou = document.getElementById('thankyou');
//   const form = document.getElementById('myForm');

//   // tampilkan loader
//   form.classList.add('hidden');
//   loading.classList.remove('hidden');

//   // simulasi loading 2 detik
//   setTimeout(() => {
//     loading.classList.add('hidden');
//     thankyou.classList.remove('hidden');
//   }, 2000);
// }