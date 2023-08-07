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

let index = 0;
const delay = 50; // Adjust this value to control the typing speed
function typeWriter() {
  if (index < text.length) {
    headerElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, delay);
  }
}

typeWriter();