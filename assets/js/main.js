const root = document.documentElement;
const themeButton = document.getElementById('theme-button');

const themes = {
  light: {
    '--primary-color': ' #9955e8', 
    '--secondary-color':' #7bffaf',
    '--second-text-color':' #7bffaf',
     '--dark-color':' #171023',
   '--light-dark-color':' #413a4f',
   '--light-color':' #f5f6f6',
    '--for-bg-section':' #E5D9F2',
    '--dark-for-dark':' #171023',
    '--primary-for-border':' #9954e8'
  },
  dark: {
    '--primary-color': ' #9955e8', 
    '--secondary-color':'rgb(58, 114, 81)',
    '--second-text-color':' #7bffaf',
     '--dark-color':' #f5f6f6',
   '--light-dark-color':' #413a4f',
   '--light-color':' #171023',
    '--for-bg-section':' #7bffaf1a',
    '--dark-for-dark':' #171023',
    '--primary-for-border':' #7bffaf'
  },
  // Add more themes here
};

let currentTheme = 'light'; 

themeButton.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light'; 

  const currentThemeVars = themes[currentTheme];
  for (const [key, value] of Object.entries(currentThemeVars)) {
    root.style.setProperty(key,value);
  }
});

/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    678: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// -----------------------------
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});