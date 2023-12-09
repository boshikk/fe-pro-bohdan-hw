const episode6 = [
  { char: "袖手旁观", pinYin: "xiùshǒu pángguān" },
  { char: "不辞而别", pinYin: "bù cí ér bié" },
  { char: "不愧", pinYin: "bùkuì" },
  { char: "骑虎难下", pinYin: "qíhǔ nánxià" },
  { char: "活宝", pinYin: "huóbǎo" },
  { char: "善待", pinYin: "shàndài" },
  { char: "无事生非", pinYin: "wú shì shēng fēi" },
  { char: "整容", pinYin: "zhěngróng" },
  { char: "揪着不放", pinYin: "jiūzhebùfàng" },
  { char: "英俊潇洒", pinYin: "yīngjùn xiāosǎ" },
  { char: "把柄", pinYin: "bǎbǐng" },
  { char: "事无巨细", pinYin: "shì wú jù xì" },
  { char: "高估", pinYin: "gāogū" },
  { char: "自杀未遂", pinYin: "zìshā wèisuì" },
  { char: "幸灾乐祸", pinYin: "xìngzāi lèhuò" },
  { char: "别有用心", pinYin: "bié yǒu yòngxīn" },
  { char: "因祸得福", pinYin: "yīn huò dé fú" },
  { char: "下不为例", pinYin: "xià bù wéi lì" },
];

const randomChar = episode6[Math.floor(Math.random() * episode6.length + 1)];
console.log(randomChar.char, randomChar.pinYin);
