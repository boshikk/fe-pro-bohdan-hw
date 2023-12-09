const episode7 = [
  { char: "自作多情", pinYin: "zìzuò duōqíng" },
  { char: "吃相", pinYin: "chīxiàng" },
  { char: "上梁不正下梁歪", pinYin: "shàngliáng bùzhèng xiàliáng wāi" },
  { char: "解闷", pinYin: "jiěmèn" },
  { char: "萍水相逢", pinYin: "píngshuǐ xiāngféng" },
  { char: "鸿门宴", pinYin: "hóngményàn" },
  { char: "失忆", pinYin: "shīyì" },
  { char: "天经地义", pinYin: "tiānjīng dìyì" },
  { char: "怜香惜玉", pinYin: "liánxiāng xīyù" },
];

const randomChar = episode7[Math.floor(Math.random() * episode7.length + 1)];
console.log(randomChar.char, randomChar.pinYin);
