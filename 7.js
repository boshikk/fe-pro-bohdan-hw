const episodeChars = [
  { char: "自作多情", pinYin: "zìzuò duōqíng" },
  { char: "吃相", pinYin: "chīxiàng" },
  { char: "上梁不正下梁歪", pinYin: "shàngliáng bùzhèng xiàliáng wāi" },
  { char: "解闷", pinYin: "jiěmèn" },
  { char: "萍水相逢", pinYin: "píngshuǐ xiāngféng" },
  { char: "鸿门宴", pinYin: "hóngményàn" },
  { char: "失忆", pinYin: "shīyì" },
  { char: "天经地义", pinYin: "tiānjīng dìyì" },
  { char: "怜香惜玉", pinYin: "liánxiāng xīyù" },
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
