const episode4 = [
  { char: "君子动口不动手", pinYin: "jūnzǐ dòngkǒu bù dòngshǒu" },
  { char: "别扭", pinYin: "bièniu" },
  { char: "色诱", pinYin: "sèyòu" },
  { char: "重色轻友", pinYin: "zhòng sè qīng yǒu" },
  { char: "出言不逊", pinYin: "chūyánbùxùn" },
  { char: "𪨊包", pinYin: "sóngbāo" },
  { char: "扣屎盆子", pinYin: "kòu shǐpénzi" },
  { char: "福利院", pinYin: "fúlìyuàn" },
  { char: "护身符", pinYin: "hùshēnfú" },
  { char: "上头", pinYin: "shàngtou" },
  { char: "恐高", pinYin: "kǒnggāo" },
  { char: "遗书", pinYin: "yíshū" },
  { char: "异地恋", pinYin: "yìdìliàn" },
  { char: "眼前一亮", pinYin: "yǎnqián yī liàng" },
  { char: "甜言蜜语", pinYin: "tián yán mì yǔ" },
  { char: "使唤人", pinYin: "shǐhuanrén" },
];

const randomChar = episode4[Math.floor(Math.random() * episode4.length + 1)];
console.log(randomChar.char, randomChar.pinYin);
