// Auto Types Js 
let MainBody = document.querySelector('body');
const button = document.getElementById('btn');
const moonDiv = document.getElementById('moon-icon');
const sunDiv = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon');
const sunIcon = document.getElementById('sun');
const Menu = document.getElementsByClassName('menu')

// Check the stored theme mode on page load
let themeMode = localStorage.getItem('themeMode');

// Apply the corresponding styles based on the theme mode
if (themeMode === 'dark') {
    MainBody.style.backgroundColor = '#1a202c';
    MainBody.style.color = 'white';
    moonDiv.style.visibility = 'hidden';
    sunDiv.style.visibility = 'visible';
} else {
    // Default to light mode
    MainBody.style.backgroundColor = 'white';
    MainBody.style.color = '#1a202c';
    sunDiv.style.visibility = 'hidden';
    moonDiv.style.visibility = 'visible';
}

moonIcon.addEventListener('click' , () => {
    // if (themeMode === 'light') {
        localStorage.setItem('themeMode' , 'dark');
        MainBody.style.backgroundColor ='#1a202c';
        MainBody.style.color = 'white';
        Menu.classList.add('dark-menu-btn');
        Menu.classList.remove('dark-menu-btn');
        moonDiv.style.visibility = 'hidden';
        sunDiv.style.visibility = 'visible';
    
});

sunIcon.addEventListener('click' , () => {
        localStorage.setItem('themeMode' , 'light');
        MainBody.style.backgroundColor = 'white';
        MainBody.style.color = '#1a202c';
        sunDiv.style.visibility = 'hidden';
        moonDiv.style.visibility = 'visible';
});
var typed = new Typed('.auto-typing', {
    strings: ["Full Stack Developer !" , "Mern Stack Developer !" , "Graphic Designer !" ,"UI UX Designer !" ,"Digital Marketor !"],
    typeSpeed: 50,
    backSpeed : 50, 
    loop : true
  });
var typed = new Typed('.auto-typing-2', {
    strings: ["Full Stack Developer !" , "Mern Stack Developer !" , "Graphic Designer !" ,"UI UX Designer !" ,"Digital Marketor !"],
    typeSpeed: 50,
    backSpeed : 50, 
    loop : true
  });

  // Initialize Swiper
  var swiper = new Swiper(".card-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop : true ,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     640: {
    //       slidesPerView: 2,
    //       spaceBetween: 20,
    //     },
    //     768: {
    //       slidesPerView: 4,
    //       spaceBetween: 40,
    //     },
    //     1024: {
    //       slidesPerView: 5,
    //       spaceBetween: 50,
    //     },
    //   },
  });
  