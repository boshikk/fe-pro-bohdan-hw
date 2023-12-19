const episodeChars = [
  { char: "死猪不怕开水烫", pinYin: "sǐzhū bùpà kāishuǐ tàng" },
  { char: "诬赖", pinYin: "wūlài" },
  {
    char: "无精打采",
    pinYin: "wújīng dǎcǎi",
  },
  { char: "遮掩", pinYin: "zhēyǎn" },
  { char: "折磨", pinYin: "zhémó" },
  { char: "打抱不平", pinYin: "dǎ bàobùpíng" },
  { char: "满城风雨", pinYin: "mǎnchéng fēngyǔ" },
  { char: "欢喜冤家", pinYin: "huān xǐ yuān jiā" },
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
