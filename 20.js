const episodeChars = [
  { char: "一晃", pinYin: "yīhuàng" },
  { char: "忏悔", pinYin: "chànhuǐ" },
  {
    char: "心服口服",
    pinYin: "xīnfú kǒufú",
  },
  { char: "非礼", pinYin: "fēilǐ" },
  { char: "自作主张", pinYin: "zìzuò zhǔzhāng" },
  { char: "胡思乱想", pinYin: "húsī luànxiǎng" },
  { char: "疑神疑鬼", pinYin: "yíshén yíguǐ" },
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
