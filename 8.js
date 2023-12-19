const episodeChars = [
  { char: "开门见山", pinYin: "kāimén jiànshān" },
  { char: "穷困潦倒", pinYin: "qióngkùn liáodǎo" },
  {
    char: "路遥知马力，日久见人心",
    pinYin: "lùyáo zhī mǎlì rìjiǔ jiàn rénxīn bùzhèng xiàliáng wāi",
  },
  { char: "丑闻", pinYin: "chǒuwén" },
  { char: "指鹿为马", pinYin: "zhǐ lù wéi mǎ" },
  { char: "乌烟瘴气", pinYin: "wūyān zhàngqì" },
  { char: "歇斯底里", pinYin: "xiēsīdǐlǐ" },
  { char: "诋毁", pinYin: "dǐhuǐ" },
  { char: "耍滑头", pinYin: "shuǎ huátóu" },
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
