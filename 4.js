const episodeChars = [
  { char: "君子动口不动手", pinYin: "jūnzǐ dòngkǒu bù dòngshǒu" },
  { char: "别扭", pinYin: "bièniu" },
  { char: "色诱", pinYin: "sèyòu" },
  { char: "重色轻友", pinYin: "zhòng sè qīng yǒu" },
  { char: "出言不逊", pinYin: "chūyánbùxùn" },
  { char: "𪨊包", pinYin: "sóngbāo" },
  { char: "扣屎盆子", pinYin: "kòu shǐpénzi" },
  { char: "福利院", pinYin: "fúlìyuàn" },
  { char: "护身符", pinYin: "hùshēnfú" },
  { char: "上头", pinYin: "shàngtou" },
  { char: "恐高", pinYin: "kǒnggāo" },
  { char: "遗书", pinYin: "yíshū" },
  { char: "异地恋", pinYin: "yìdìliàn" },
  { char: "眼前一亮", pinYin: "yǎnqián yī liàng" },
  { char: "甜言蜜语", pinYin: "tián yán mì yǔ" },
  { char: "使唤人", pinYin: "shǐhuanrén" },
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
