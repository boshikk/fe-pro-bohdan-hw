const episodeChars = [
  { char: "挡箭牌", pinYin: "dǎngjiànpái" },
  { char: "自私", pinYin: "zìsī" },
  { char: "逃避", pinYin: "táobì" },
  { char: "自尊心", pinYin: "zìzūnxīn" },
  { char: "欢天喜地", pinYin: "huāntiān xǐdì" },
  { char: "感激不尽", pinYin: "gǎnjī bùjìn" },
  { char: "摆谱", pinYin: "bǎipǔ" },
  { char: "人善被人欺", pinYin: "rén shàn bèirén qī" },
  { char: "明知故问", pinYin: "míngzhīgùwèn" },
  { char: "推三推四", pinYin: "tuī sān tuī sì" },
  { char: "莫名其妙", pinYin: "mòmíng qímiào" },
  { char: "将心比心", pinYin: "jiāngxīn bǐxīn" },
  { char: "唱高调", pinYin: "chàng gāodiào" },
  { char: "拍马屁", pinYin: "pāimǎpì" },
  { char: "自投罗网", pinYin: "zì tóu luó wǎng" },
  { char: "穿小鞋", pinYin: "chuān xiǎoxié" },
  { char: "屈才", pinYin: "qūcái" },
  { char: "不闻不问", pinYin: "bùwén bùwèn" },
  { char: "手快有手慢无", pinYin: "shǒukuài yǒu shǒumàn wú" },
  { char: "两手空空", pinYin: "liǎngshǒu kōngkōng" },
  { char: "两码事", pinYin: "liǎngmǎshì" },
  { char: "相辅相成", pinYin: "xiāngfǔ xiāngchéng" },
  { char: "只许成功，不许失败", pinYin: "zhǎobiàn" },
  { char: "身手矫健", pinYin: "zhǐxǔ chénggōng bùxǔ shībài" },
  { char: "全力以赴", pinYin: "quánlì yǐ fù" },
  { char: "鞍前马后", pinYin: "ān qián mǎ hòu" },
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
