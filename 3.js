function fillArray(rows, cols, value) {
  let resultArray = [];
  for (let i = 0; i < rows; i++) {
    let innerArray = [];
    for (let j = 0; j < cols; j++) {
      innerArray.push(value);
    }
    resultArray.push(innerArray);
  }
  return resultArray;
}

const rows = parseInt(prompt("Enter the number of rows:"));
const cols = parseInt(prompt("Enter the number of columns:"));
const value = prompt("Enter the value to fill the array:");

const userArray = fillArray(rows, cols, value);

console.log(userArray);
