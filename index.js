// 1
let result = "";
for (let i = 10; i < 21; i++) {
  result += i;
  if (i < 20) {
    result += ", ";
  }
}
console.log(result);
// console.log(arr.toString());

// 2
for (let i = 10; i < 21; i++) {
  console.log(i ** 2);
}

// 3
for (let i = 7; i < 71; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}

// 4
let sum = 0;
for (let i = 1; i < 16; i++) {
  sum += i;
}
console.log(sum);

//5
let sum1 = 1;
for (let i = 15; i < 36; i++) {
  sum1 *= i;
}
console.log(sum1);

// 6
const numbersAmmount = 500;
let sum2 = 0;
for (let i = 1; i <= numbersAmmount; i++) {
  sum2 += i;
}
console.log(sum2 / numbersAmmount);

// 7
let sum3 = 0;
for (let i = 30; i < 81; i++) {
  if (i % 2 === 0) {
    sum3 += i;
  }
}
console.log(sum3);

// 8
for (let i = 100; i < 201; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// 9

const num4 = 99;
for (let i = 1; i <= num4; i++) {
  if (num4 % i === 0) {
    console.log(i);
  }
}

// 10
const num5 = 100;
let sum5 = 0;
for (let i = 1; i <= num5; i++) {
  if (num5 % i === 0 && i % 2 === 0) {
    sum5 += 1;
  }
}
console.log(sum5);

// 11
const num6 = 20;
let sum4 = 0;
for (let i = 1; i <= num6; i++) {
  if (num6 % i === 0 && i % 2 === 0) {
    sum4 += i;
  }
}
console.log(sum4);

// 12

for (let i = 1; i < 11; i++) {
  for (let y = 1; y < 11; y++) {
    console.log(i, y, i * y);
  }
}
