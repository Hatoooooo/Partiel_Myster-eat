var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper_button_next",
    prevEl: ".swiper_button_prev",
  },
});

console.log("bonsoir");
