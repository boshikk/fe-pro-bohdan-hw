const episodeChars = [
  { char: "迟早", pinYin: "chízǎo" },
  { char: "自说自话", pinYin: "zìshuō zìhuà" },
  {
    char: "无所事事",
    pinYin: "wúsuǒshìshì",
  },
  { char: "暗恋", pinYin: "ànliàn" },
  { char: "分文不取", pinYin: "fēnwénbùqǔ" },
  { char: "理所当然", pinYin: "lǐsuǒ dāngrán" },
  { char: "铁石心肠", pinYin: "tiěshíxīncháng" },
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
