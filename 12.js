const episode12 = [
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

const randomChar = episode12[Math.floor(Math.random() * episode12.length + 1)];
console.log(randomChar.char, randomChar.pinYin);
