var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 1,
  spaceBetween: 70,
});

const headerElement = document.getElementById("header");
const text = headerElement.textContent;
headerElement.textContent = ""; // Clear the original text
