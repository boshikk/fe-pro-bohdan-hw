const episodeChars = [
  { char: "难缠", pinYin: "nánchán" },
  { char: "打包票", pinYin: "dǎ bāopiào" },
  {
    char: "寻开心",
    pinYin: "xún kāixīn",
  },
  { char: "无业游民", pinYin: "wúyè yóumín" },
  { char: "天衣无缝", pinYin: "tiānyī wúfèng" },
  { char: "血口喷人", pinYin: "xuèkǒu pēnrén" },
  { char: "无伤大雅", pinYin: "wúshāng dàyǎ" },
  { char: "话不投机", pinYin: "huà bù tóujī" },
  { char: "盛气凌人", pinYin: "shèng qì líng rén" },
  { char: "刻薄", pinYin: "kèbó" },
  { char: "指责", pinYin: "zhǐzé" },
  { char: "追随", pinYin: "zhuīsuí" },
  { char: "落伍", pinYin: "luòwǔ" },
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
