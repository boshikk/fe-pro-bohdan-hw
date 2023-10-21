// PART 1
// function concateMessage() {
//   const message1 = prompt("Type smth in here :)");
//   const message2 = prompt("Type smth else in here :)");
//   const message3 = prompt("Type another message :)");
//   const finalMessage = message1 + message2 + message3;
//   return finalMessage;
// }
// concateMessage();

const message1 = prompt("Type smth in here :)");
const message2 = prompt("Type smth else in here :)");
const message3 = prompt("Type another message :)");
const finalMessage = message1 + message2 + message3;
console.log(finalMessage);

// PART 2

// function sliceNumber(num) {
//   return num.toString().split("").join(" ");
// }

// sliceNumber(23456);

const num = 12345;
const slicedNum = num.toString().split("").join(" ");
console.log(slicedNum);
