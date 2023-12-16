const episodeChars = [
  { char: "金玉良言", pinYin: "jīn yù liáng yán" },
  { char: "后会有期", pinYin: "hòuhuì yǒuqī" },
  {
    char: "啰嗦",
    pinYin: "luōsuo",
  },
  { char: "滑稽", pinYin: "huájī" },
  { char: "显山露水", pinYin: " xiǎn shān lù shuǐ" },
  { char: "巴不得", pinYin: "bābudé" },
  { char: "多多益善", pinYin: "duō duō yì shàn" },
  { char: "半途而废", pinYin: "bàntú ér fèi" },
  { char: "花痴", pinYin: "huāchī" },
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
