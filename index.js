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

const randomIndex = Math.floor(Math.random() * imageFileNames.length);

const randomImageFileName = imageFileNames[randomIndex];
console.log(randomImageFileName);

const randomImage = document.getElementById("random-image");
randomImage.src = `images/${randomImageFileName}`;
