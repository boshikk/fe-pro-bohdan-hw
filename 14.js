const episodeChars = [
  { char: "潜力股", pinYin: "qiánlì gǔ" },
  { char: "一言难尽", pinYin: "yī yán nán jìn" },
  {
    char: "随叫随到",
    pinYin: "suí jiào suí dào",
  },
  { char: "奇迹", pinYin: "qíjì" },
  { char: "无亲无故", pinYin: "wúqīn wúgù" },
  { char: "天荒地老", pinYin: "tiān huāng dì lǎo" },
  { char: "情不自禁", pinYin: "qíng bù zì jìn" },
  { char: "半途而废", pinYin: "bàntú ér fèi" },
  { char: "聪明反被聪明误", pinYin: "cōngmíng fǎn bèi cōngmíng wù" },
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
