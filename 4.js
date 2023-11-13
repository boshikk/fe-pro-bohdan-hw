const inputString = prompt("Enter the string:");
const charsToRemove = prompt("Enter characters to remove: ");

const removeElements = (string, elements) => {
  const stringArray = string.split("");
  const charsArray = elements;

  const resultArray = stringArray.filter((char) => !charsArray.includes(char));

  return resultArray.join("");
};

console.log(removeElements(inputString, charsToRemove));
