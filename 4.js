const inputString = prompt("Enter the string:");
const charsToRemove = prompt("Enter characters to remove: ");

const removeElements = (string, elements) => {
  const charsArray = elements.split("");

  const resultString = charsArray.reduce(
    (acc, char) => acc.replace(char, ""),
    string
  );

  return resultString;
};

console.log(removeElements(inputString, charsToRemove));
