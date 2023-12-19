const episodeChars = [
  { char: "可是", pinYin: "kěshì" },
  { char: "教训", pinYin: "jiàoxun" },
  { char: "臭小子", pinYin: "chòuxiǎozi" },
  { char: "横穿", pinYin: "héngchuān" },
  { char: "劈腿", pinYin: "pǐtuǐ" },
  { char: "补胎", pinYin: "bǔtāi" },
  { char: "冤家路窄", pinYin: "yuān jiā lù zhǎi" },
  { char: "耳朵聋", pinYin: "ěrduolóng" },
  { char: "长记性", pinYin: "zhǎng jìxìng" },
  { char: "撞枪口上", pinYin: "zhuàng qiāngkǒu shàng" },
  { char: "扯平", pinYin: "chěpíng" },
  { char: "饿坏", pinYin: "èhuài" },
  { char: "定制", pinYin: "dìngzhì" },
  { char: "无礼", pinYin: "wúlǐ" },
  { char: "没教养", pinYin: "méijiàoyǎng" },
  { char: "不肯", pinYin: "bùkěn" },
  { char: "自以为是", pinYin: "zì yǐwéi shì" },
  { char: "头头是道", pinYin: "tóutóu shìdào" },
  { char: "理直气壮", pinYin: "lǐzhí qìzhuàng" },
  { char: "假模假式", pinYin: "jiǎ mo jiǎ shì" },
  { char: "难免", pinYin: "nánmiǎn" },
  { char: "派头", pinYin: "pàitóu" },
  { char: "如鱼得水", pinYin: "rú yú dé shuǐ " },
  { char: "八卦", pinYin: "bāguà" },
  { char: "不瞒你说", pinYin: "bù mán nǐ shuō" },
  { char: "留意", pinYin: "liúyì" },
  { char: "最佳时机", pinYin: "zuìjiā shíjī" },
  { char: "勉强", pinYin: "miǎnqiǎng" },
  { char: "蛮不讲理", pinYin: "mán bù jiǎnglǐ" },
  { char: "欠人情", pinYin: "qiàn rénqíng" },
  { char: "大度", pinYin: "dàdù" },
  { char: "一般见识", pinYin: "yībān jiànshi" },
  { char: "长幼有序", pinYin: "zhǎngyòuyǒuxù" },
  { char: "打马虎眼", pinYin: "dǎ mǎhuyǎn" },
  { char: "万事俱备", pinYin: "wànshì jùbèi" },
  { char: "鬼迷心窍", pinYin: "guǐ mí xīn qiào" },
  { char: "眼里容不得沙子", pinYin: "yǎnli róngbudé shāzi" },
  ,
  { char: "喜从天降", pinYin: "xǐ cóng tiān jiàng" },
  ,
  { char: "无动于衷", pinYin: "wúdòng yúzhōng" },
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
