const episodeChars = [
  { char: "无时无刻", pinYin: "wú shí wú kè" },
  { char: "驴肝肺", pinYin: "lǘgānfèi" },
  {
    char: "石膏",
    pinYin: "shígāo",
  },
  { char: "成", pinYin: "chéng" },
  { char: "无比", pinYin: "wúbǐ" },
  { char: "问东问西", pinYin: "wèn dōng wèn xī" },
];

const characterDiv = document.createElement("p");
characterDiv.classList.add("character");

const container = document.querySelector(".container");
const startMessage = document.querySelector(".start-message");

container.appendChild(characterDiv);

let usedChars = [];

const generateUniqueRandom = () => {
  const remainingChars = episodeChars.filter(
    (char) => !usedChars.includes(char)
  );
  if (remainingChars.length === 0) {
    console.log("No more characters available.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * remainingChars.length);
  const randomChar = remainingChars[randomIndex];

  usedChars.push(randomChar);

  startMessage.innerHTML = "";

  return (characterDiv.innerHTML = `${usedChars[usedChars.length - 1].char} ${
    usedChars[usedChars.length - 1].pinYin
  }`);
};

document.querySelector(".btn").addEventListener("click", generateUniqueRandom);
