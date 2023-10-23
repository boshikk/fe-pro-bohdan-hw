// PART 1
// function concateMessage() {
//   const message1 = prompt("Type smth in here :)");
//   const message2 = prompt("Type smth else in here :)");
//   const message3 = prompt("Type another message :)");
//   const finalMessage = message1 + message2 + message3;
//   return alert(finalMessage);
// }
// concateMessage();

const message1 = prompt("Type a string in here :)");
const message2 = prompt("Type one more :)");
const message3 = prompt("And the last one :)");
const finalMessage = message1 + message2 + message3;
alert(finalMessage);

// PART 2

// function sliceNumber(num) {
//   return num.toString().split("").join(" ");
// }

// console.log(sliceNumber(23456));

const num = 12345;
// const slicedNum = num.toString().split("").join(" ");
const string = num.toString();

// console.log(slicedNum);
console.log(`${string[0]} ${string[1]} ${string[2]} ${string[3]} ${string[4]}`);
