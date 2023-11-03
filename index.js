const arrayLength = Number(prompt("Enter the array length:"));
console.log(arrayLength);

const userArray = [];

if (isNaN(arrayLength) || arrayLength < 0) {
  alert("Please, enter the correct number that is over 0.");
} else {
  for (let i = 0; i < arrayLength; i++) {
    const element = prompt(`Enter the array element ${i + 1}: `);

    if (!isNaN(element)) {
      userArray.push(Number(element));
    } else {
      userArray.push(element);
    }
  }
}

console.log("Out array:", userArray);
