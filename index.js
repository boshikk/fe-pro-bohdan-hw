const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const imageFileNames = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

const randomIndex = getRandomNumber(0, imageFileNames.length - 1);

const randomImageFileName = imageFileNames[randomIndex];
console.log(randomImageFileName);

const randomImage = document.getElementById("random-image");
randomImage.src = `images/${randomImageFileName}`;
