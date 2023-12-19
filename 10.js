const episodeChars = [
  { char: "挨揍", pinYin: "áizòu" },
  { char: "大饱眼福", pinYin: "dàbǎo yǎnfú" },
  {
    char: "冤枉",
    pinYin: "yuānwang",
  },
  { char: "不切实际", pinYin: "bùqiè shíjì" },
  { char: "夸大其词", pinYin: "kuādà qící" },
  { char: "平白无故", pinYin: "píngbái wúgù" },
  { char: "陷害", pinYin: "xiànhài" },
  { char: "模棱两可", pinYin: "móléng liǎngkě" },
  { char: "不折不扣", pinYin: "bùzhé bùkòu" },
  { char: "吃香喝辣", pinYin: "chīxiāng hēlà" },
  { char: "吩咐", pinYin: "fēnfù" },
  { char: "火上浇油", pinYin: "huǒshàng jiāoyóu" },
  { char: "狡辩", pinYin: "jiǎobiàn" },
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
