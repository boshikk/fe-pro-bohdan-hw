// const string = "Lorem ipsum";
const regExp1 = /[a-z]/; // \w any letter \d any number \s space symbol  \t tab  \n new line
regExp1.test(string);

/*
\w
\W
\d
\D
\s
\S
*/

/*  RANGE
/[a-z]/
/[1-4]/
*/

/*
/./ ANY SYMBOL
*/

/*
/[acf]/ набор (любая из этих букв)
/[^acf]/ всё кроме эти букв
/acf/  подстрочка (конкретная комбинация)
*/

/b{0, 9}/; //квантифікатор довжини ВІД і ДО
/b{5}/; //довжина квантифікатора
/b*/; // від нуля до бескінечності
/b+/; //від одного до бескінечності
/b?/; // ===  b{0,1} === b може бути, а може не бути
/^b/; // буде шукати b найпершим символом у строчці
/b$/; //буде шукати b останнім символом у строчці
/\.[tj]s$/; // \. чтобы сделать точку точкой а не любым символом
/\.(ts|js)$/; // тоже самое

/^[abd].{7}\.com$/;

const isFileTsOrJs = (string) => {
  const regExp2 = /\.(ts|js)$/;
  return regExp2.test(string);
};

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const files = ["a.txt", "b.js", "c.ts", "d.txt", "e.js", "f.js"];

const isFileEnding = (arr, fileFormat) => {
  const regExp = new RegExp(`\.${fileFormat}$`);
  return arr.filter((string) => regExp.test(string));
};

filterFileByEnding(files, "txt"); //a, d
filterFileByEnding(files, "js"); // b, e, f
filterFileByEnding(files, "ts"); // c

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

const string = "Slava Zubko, Tom Brady, Ewan Ingram, Julian Edelman";
string.split(", ").forEach((str) => {
  const regExp3 = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
  regExp3.test(str);
});

/^[\dA-F]{2}/;
