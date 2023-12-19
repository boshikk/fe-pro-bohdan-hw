const episodeChars = [
  { char: "要紧事", pinYin: "yàojǐnshi" },
  { char: "隐形", pinYin: "yǐnxíng" },
  { char: "千万", pinYin: "qiānwàn" },
  { char: "奋不顾身", pinYin: "fèn bù gù shēn" },
  { char: "隔三差五", pinYin: "gé sān chà wǔ" },
  { char: "不咸不淡", pinYin: "bùxián bù dàn" },
  { char: "灭亡", pinYin: "mièwáng" },
  { char: "麻利儿", pinYin: "málìr" },
  { char: "搭把手", pinYin: "dābǎshǒu" },
  { char: "打啵", pinYin: "dǎbō" },
  { char: "死灰复燃", pinYin: "sǐhuīfùrán" },
  { char: "半毛钱", pinYin: "bànmáoqián" },
  { char: "发小", pinYin: "fàxiǎo" },
  { char: "醒酒", pinYin: "xǐngjiǔ" },
  { char: "先见之明", pinYin: "xiānjiànzhīmíng" },
  { char: "流氓", pinYin: "liúmáng" },
  { char: "趁人之危", pinYin: "chèn rén zhī wēi" },
  { char: "恩将仇报", pinYin: "ēn jiāng chóu bào" },
  { char: "补偿", pinYin: "bǔcháng" },
  { char: "大摇大摆", pinYin: "dàyáo dàbǎi" },
  { char: "形同虚设", pinYin: "xíng tóng xūshè" },
  { char: "歧视", pinYin: "qíshì" },
  { char: "找遍", pinYin: "zhǎobiàn" },
  { char: "身手矫健", pinYin: "shēnshǒu jiǎojiàn" },
  { char: "冒犯", pinYin: "màofàn" },
  { char: "挤兑", pinYin: "jǐduì" },
  { char: "猴年马月", pinYin: "hóunián mǎyuè" },
  { char: "卖乖", pinYin: "màiguāi" },
  { char: "按兵不动", pinYin: "ànbīng bùdòng" },
  { char: "自食其果", pinYin: "zì shí qí guǒ" },
  { char: "糖衣炮弹", pinYin: "tángyī pàodàn" },
  { char: "大头针", pinYin: "dàtóuzhēn" },
  { char: "回避", pinYin: "huíbì" },
  { char: "一别两宽，各生欢喜", pinYin: "yībiéliǎngkuān gèshēnghuānxǐ" },
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
