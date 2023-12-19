const episodeChars = [
  { char: "导火索", pinYin: "dǎohuǒsuǒ" },
  { char: "计较", pinYin: "jìjiào" },
  {
    char: "落井下石",
    pinYin: "luòjǐng xiàshí",
  },
  { char: "犯傻", pinYin: "fànshǎ" },
  { char: "食言", pinYin: "shíyán" },
  { char: "妥协", pinYin: "tuǒxié" },
  { char: "抛弃", pinYin: "pāoqì" },
  { char: "串通一气", pinYin: "chuàntōng yīqì" },
  { char: "兴师问罪", pinYin: "xīngshī wènzuì" },
  { char: "消消气", pinYin: "xiāoxiāoqì" },
  { char: "灌迷魂汤", pinYin: "guàn míhúntāng" },
  { char: "取经", pinYin: "qǔjīng" },
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
