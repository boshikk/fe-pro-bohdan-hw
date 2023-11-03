const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// 1
const sumOfNumbers = arr.reduce((acc, cur) => acc + cur);
const ammountOfPositiveNumbers = arr.filter((num) => num > 0).length;
console.log(sumOfNumbers, ammountOfPositiveNumbers);

// 2
let index = 0;
let value = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < value) {
    value = arr[i];
    index = i;
  }
}
console.log(value, index);

// 3
let index2 = 0;
let value2 = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > value) {
    value = arr[i];
    index = i;
  }
}
console.log(value, index);
// 4

const ammountOfNegativeNumbers = arr.filter((num) => num < 0).length;
console.log(ammountOfNegativeNumbers);

// 5

const ammountOfOddPositiveNumbers = arr.filter(
  (num) => num > 0 && num % 2 !== 0
).length;
console.log(ammountOfOddPositiveNumbers);

// 6
const ammountOfEvenPositiveNumbers = arr.filter(
  (num) => num > 0 && num % 2 === 0
).length;
console.log(ammountOfEvenPositiveNumbers);

// 7
const sumOfEvenPositiveNumbers = arr
  .filter((num) => num > 0 && num % 2 === 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(sumOfEvenPositiveNumbers);

// 8

const sumOfOddPositiveNumbers = arr
  .filter((num) => num > 0 && num % 2 !== 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(sumOfOddPositiveNumbers);

// 9

const productOfPositiveNumbers = arr
  .filter((num) => num > 0)
  .reduce((acc, cur) => acc * cur, 1);
console.log(productOfPositiveNumbers);

// 10
let maxValue = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxValue) {
    maxValue = arr[i];
  }
}

const nullifiedArr = arr.map((num) =>
  num !== maxValue ? (num = 0) : maxValue
);
console.log(maxValue, nullifiedArr);
