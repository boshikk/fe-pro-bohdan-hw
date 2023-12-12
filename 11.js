const episode11 = [
  { char: "死猪不怕开水烫", pinYin: "sǐzhū bùpà kāishuǐ tàng" },
  { char: "诬赖", pinYin: "wūlài" },
  {
    char: "无精打采",
    pinYin: "wújīng dǎcǎi",
  },
  { char: "遮掩", pinYin: "zhēyǎn" },
  { char: "折磨", pinYin: "zhémó" },
  { char: "打抱不平", pinYin: "dǎ bàobùpíng" },
  { char: "满城风雨", pinYin: "mǎnchéng fēngyǔ" },
  { char: "欢喜冤家", pinYin: "huān xǐ yuān jiā" },
];

const randomChar = episode11[Math.floor(Math.random() * episode11.length + 1)];
console.log(randomChar.char, randomChar.pinYin);
