var swiper = new Swiper(".mySwiper", {
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