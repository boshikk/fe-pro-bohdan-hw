const episodeChars = [
  { char: "耍无赖", pinYin: "shuǎ wúlài" },
  { char: "十万火急", pinYin: "shí wàn huǒ jí" },
  { char: "卧底", pinYin: "wòdǐ" },
  { char: "上刀山下火海", pinYin: "shàng dāoshān xià huǒhǎi" },
  { char: "没门", pinYin: "méimén" },
  { char: "阴阳怪气", pinYin: "yīnyáng guàiqì" },
  { char: "奢侈", pinYin: "shēchǐ" },
  { char: "扭扭捏捏", pinYin: "niǔniǔ niēniē" },
  { char: "护身符", pinYin: "hùshēnfú" },
  { char: "集思广益", pinYin: "jísī guǎngyì" },
  { char: "隆重", pinYin: "lóngzhòng" },
  { char: "偷瞄", pinYin: "tōumiáo" },
  { char: "劫色", pinYin: "jiésè" },
  { char: "耿耿于怀", pinYin: "gěnggěng yú huái" },
  { char: "失陪", pinYin: "shīpéi" },
  { char: "拭目以待", pinYin: "shì mù yǐ dài" },
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
