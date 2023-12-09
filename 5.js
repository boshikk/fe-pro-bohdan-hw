const episode5 = [
  { char: "耍无赖", pinYin: "shuǎ wúlài" },
  { char: "十万火急", pinYin: "shí wàn huǒ jí" },
  { char: "卧底", pinYin: "wòdǐ" },
  { char: "上刀山下火海", pinYin: "shàng dāoshān xià huǒhǎi" },
  { char: "没门", pinYin: "méimén" },
  { char: "阴阳怪气", pinYin: "yīnyáng guàiqì" },
  { char: "奢侈", pinYin: "shēchǐ" },
  { char: "扭扭捏捏", pinYin: "niǔniǔ niēniē" },
  { char: "护身符", pinYin: "hùshēnfú" },
  { char: "集思广益", pinYin: "jísī guǎngyì" },
  { char: "隆重", pinYin: "lóngzhòng" },
  { char: "偷瞄", pinYin: "tōumiáo" },
  { char: "劫色", pinYin: "jiésè" },
  { char: "耿耿于怀", pinYin: "gěnggěng yú huái" },
  { char: "失陪", pinYin: "shīpéi" },
  { char: "拭目以待", pinYin: "shì mù yǐ dài" },
];

const randomChar = episode5[Math.floor(Math.random() * episode5.length + 1)];
console.log(randomChar.char, randomChar.pinYin);
