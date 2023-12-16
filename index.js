const images = document.querySelectorAll(".slider-image");
let currentImageIndex = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const showImage = (index) => {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
};

const prevSlide = () => {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    showImage(currentImageIndex);
  }

  prevBtn.style.display = currentImageIndex === 0 ? "none" : "block";
  nextBtn.style.display = "block";
};

const nextSlide = () => {
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
    showImage(currentImageIndex);
  }

  nextBtn.style.display =
    currentImageIndex === images.length - 1 ? "none" : "block";
  prevBtn.style.display = "block"; // Always show prevBtn after Next is clicked
};

prevBtn.style.display = "none";

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

showImage(currentImageIndex);
