const episodeChars = [
  { char: "拉扯", pinYin: "lāche" },
  { char: "酸不拉唧", pinYin: "suānbùlājī" },
  {
    char: "记仇",
    pinYin: "jìchóu",
  },
  { char: "缺心眼", pinYin: "quē xīnyǎn" },
  { char: "瞎起哄", pinYin: "xiāqǐhòng" },
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
