const episode9 = [
  { char: "导火索", pinYin: "dǎohuǒsuǒ" },
  { char: "计较", pinYin: "jìjiào" },
  {
    char: "落井下石",
    pinYin: "luòjǐng xiàshí",
  },
  { char: "犯傻", pinYin: "fànshǎ" },
  { char: "食言", pinYin: "shíyán" },
  { char: "妥协", pinYin: "tuǒxié" },
  { char: "抛弃", pinYin: "pāoqì" },
  { char: "串通一气", pinYin: "chuàntōng yīqì" },
  { char: "兴师问罪", pinYin: "xīngshī wènzuì" },
  { char: "消消气", pinYin: "xiāoxiāoqì" },
  { char: "灌迷魂汤", pinYin: "guàn míhúntāng" },
  { char: "取经", pinYin: "qǔjīng" },
];

const randomChar = episode9[Math.floor(Math.random() * episode9.length + 1)];
console.log(randomChar.char, randomChar.pinYin);
