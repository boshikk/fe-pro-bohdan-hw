// 1

const arrayLength = Number(prompt("Enter the array length:"));

const userArray = [];

if (isNaN(arrayLength) || arrayLength < 0) {
  alert("Please, enter the correct number that is over 0.");
} else {
  for (let i = 0; i < arrayLength; i++) {
    const element = prompt(`Enter the array element ${i + 1}: `);
    userArray.push(Number(element));
  }
}

console.log(userArray);

// 2
userArray.sort((a, b) => a - b);
console.log(userArray);

// 3

userArray.splice(2, 3);
console.log(userArray);
