const eepisodeChars = [
  { char: "拍案叫绝", pinYin: "pāi àn jiàojué" },
  { char: "趁热打铁", pinYin: "chènrè dǎtiě" },
  {
    char: "忙前忙后",
    pinYin: "máng qián máng hòu",
  },
  { char: "来日方长", pinYin: "láirì fāngcháng" },
  { char: "蝇头小利", pinYin: "yíngtóu xiǎolì" },
  { char: "谈拢", pinYin: "tánlǒng" },
  { char: "愧疚", pinYin: "kuìjiù" },
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
