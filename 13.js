const episode13 = [
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

const randomChar = episode13[Math.floor(Math.random() * episode13.length + 1)];
console.log(randomChar.char, randomChar.pinYin);
