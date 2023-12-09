const episode8 = [
  { char: "开门见山", pinYin: "kāimén jiànshān" },
  { char: "穷困潦倒", pinYin: "qióngkùn liáodǎo" },
  {
    char: "路遥知马力，日久见人心",
    pinYin: "lùyáo zhī mǎlì rìjiǔ jiàn rénxīn bùzhèng xiàliáng wāi",
  },
  { char: "丑闻", pinYin: "chǒuwén" },
  { char: "指鹿为马", pinYin: "zhǐ lù wéi mǎ" },
  { char: "乌烟瘴气", pinYin: "wūyān zhàngqì" },
  { char: "歇斯底里", pinYin: "xiēsīdǐlǐ" },
  { char: "诋毁", pinYin: "dǐhuǐ" },
  { char: "耍滑头", pinYin: "shuǎ huátóu" },
];

const randomChar = episode8[Math.floor(Math.random() * episode8.length + 1)];
console.log(randomChar.char, randomChar.pinYin);
