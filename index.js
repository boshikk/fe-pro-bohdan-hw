const images = document.querySelectorAll(".slider-image");
let currentImageIndex = 0;

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

const showImage = (index) => {
  images.forEach((image, i) => {
    image.style.display = i === index ? "block" : "none";
  });
};

const adjustButtonDisplay = () => {
  prevBtn.style.display = currentImageIndex === 0 ? "none" : "block";
  nextBtn.style.display =
    currentImageIndex === images.length - 1 ? "none" : "block";
};

const prevSlide = () => {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    showImage(currentImageIndex);
  }

  adjustButtonDisplay();
};

const nextSlide = () => {
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
    showImage(currentImageIndex);
  }

  adjustButtonDisplay();
};

prevBtn.style.display = "none";

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

showImage(currentImageIndex);
