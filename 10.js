const episode10 = [
  { char: "挨揍", pinYin: "áizòu" },
  { char: "大饱眼福", pinYin: "dàbǎo yǎnfú" },
  {
    char: "冤枉",
    pinYin: "yuānwang",
  },
  { char: "不切实际", pinYin: "bùqiè shíjì" },
  { char: "夸大其词", pinYin: "kuādà qící" },
  { char: "平白无故", pinYin: "píngbái wúgù" },
  { char: "陷害", pinYin: "xiànhài" },
  { char: "模棱两可", pinYin: "móléng liǎngkě" },
  { char: "不折不扣", pinYin: "bùzhé bùkòu" },
  { char: "吃香喝辣", pinYin: "chīxiāng hēlà" },
  { char: "吩咐", pinYin: "fēnfù" },
  { char: "火上浇油", pinYin: "huǒshàng jiāoyóu" },
  { char: "狡辩", pinYin: "jiǎobiàn" },
];

const randomChar = episode10[Math.floor(Math.random() * episode10.length + 1)];
console.log(randomChar.char, randomChar.pinYin);
