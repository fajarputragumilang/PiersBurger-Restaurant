const navbar = document.querySelector("#navbar");
const navs = document.querySelector("#navs");
const hamburger = document.querySelector("#hamburger");
const hamburgerClose = document.querySelector("#hamburgerClose");
const btnLongText = document.querySelector("#btn-longText");
const longText = document.querySelector(".longText");
const up = document.querySelector("#up");
const down = document.querySelector("#down");
const readless = document.querySelector("#readless");
const readmore = document.querySelector("#readmore");


hamburger.addEventListener('click' , () => {
    hamburger.classList.add('hidden');
    hamburgerClose.classList.remove('hidden')
    hamburgerClose.addEventListener('click', () => {
    hamburger.classList.remove('hidden');
    hamburgerClose.classList.add('hidden')
  })
})

// 
// swiper 
var swiper = new Swiper(".swiper", {
  grabCursor : true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
// swipper 2
var swiper2 = new Swiper(".swiper2", {
  autoplay: {
    delay: 1000,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 500,
  preventClicks: true,
  slidesPerView : "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    click(event) {
      swiper2.slideTo(this.clickedIndex);
    },
  },
  pagination: {
    el:".swiper-pagination",
  },
  loop: true,
});

// read more read less
btnLongText.addEventListener('click', ()=> {
  longText.classList.toggle('show')
  up.classList.toggle('hidden');
  down.classList.toggle('hidden');
  readmore.classList.toggle('hidden');
  readless.classList.toggle('hidden');
})

// windows scroll
window.onscroll = function () {
  const navbar = document.querySelector("#navbar");
  const fixedNav = navbar.offsetTop;
  if (window.pageYOffset > fixedNav) {
    navbar.classList.add("navbar-fixed");

  } else {
    navbar.classList.remove("navbar-fixed");
  }
};

// upslide menu 
const box = document.querySelectorAll('.box');
const upbox = document.querySelectorAll('.upbox');


for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseenter", () => {
    upbox[i].classList.add('upslide') 
  });
  box[i].addEventListener("mouseleave", () => {
    upbox[i].classList.remove("upslide");
  });
}


const Bdown = document.querySelector("#Bdown");
const iconBlog = document.querySelector("#iconBlog");
const iconBlog2 = document.querySelector("#iconBlog2");
const boxdown = document.querySelectorAll(".boxdown");
for(let i = 0; i < boxdown.length; i++) {
  Bdown.addEventListener('click', () => {
    boxdown[i].classList.toggle('hidden');
    iconBlog.classList.add('hidden');
    iconBlog2.classList.remove('hidden');
  })
}

// GSAP



