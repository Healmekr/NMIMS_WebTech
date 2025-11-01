const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    loop: true,
    direction: "horizontal",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 400,
    spaceBetween: 100,
});

const swiper2 = new Swiper(".swiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 2,
  spaceBetween: 24,
  slidesPerGroup: 1,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  speed: 800,
  pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: true },
  breakpoints: { 0: { slidesPerView: 1, spaceBetween: 12 }, 640: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 2, spaceBetween: 24 } }
});
const swiper4 = new Swiper(".swiper4", {
  slidesPerView: 2,
  spaceBetween: 24,
  slidesPerGroup: 1,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  autoplay: { delay: 3500, disableOnInteraction: false },
  speed: 800,
  pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: true },
  breakpoints: { 0: { slidesPerView: 1, spaceBetween: 12 }, 640: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 2, spaceBetween: 24 } }
});

const swiper5 = new Swiper(".swiper5", {
    slidesPerView: 1,
    spaceBetween: 95,
    slidesPerGroup: 1,
    loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,

    autoplay: {
        delay: 5000,
    },

    speed: 400,

    breakpoints: {
        
        320: {
            slidesPerView: 1,
        },
       
        768: {
            slidesPerView: 1,
        },
       
        968: {
            slidesPerView: 1,
        },
    },
});
