var music__swiper = new Swiper(".music__swiper", {
  slidesPerView: 4,
  centeredSlides: false,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1500,
  }
});

var poster__swiper = new Swiper(".poster__swiper", {
  slidesPerView: 4,
  centeredSlides: false,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})