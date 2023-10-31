// 1
let arr = [];
const step = 0.5;
for (let i = 20; i < 31; i++) {
  arr.push(i, i + step);
}
console.log(arr.toString().replaceAll(",", " "));

// 2
const hryvnyaInDollar = 27;
for (let i = 10; i < 101; i++) {
  if (i % 10 === 0) {
    console.log(`$${i} equals ${hryvnyaInDollar * i} hrv`);
  }
}

// 3

const num = 81;
for (let i = 1; i < 101; i++) {
  if (i ** 2 <= num) {
    console.log(i);
  }
}

// 4

const num2 = 17;
let arr2 = [];
for (let i = 2; i < num2; i++) {
  if (num2 % i === 0) {
    arr2.push(i);
  }
}

console.log(
  `${
    arr2.length >= 1
      ? `${num2} is not prime number`
      : `${num2} is a prime number`
  }`
);

// 5
const num3 = 27;
const givenNumber = 3;
let isTrue;
for (let i = 1; i <= 10; i++) {
  if (num3 === givenNumber ** i) {
    isTrue = true;
  }
}

console.log(`${isTrue ? "Yes, we can!" : "No, we can't"}`);
