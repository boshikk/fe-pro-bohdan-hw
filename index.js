const mathOperation = prompt("What do you want to do? add, sub, mult or div?");
const firstNum = Number(prompt("What's the first number?"));
const secondNum = Number(prompt("What's the second number?"));

if (mathOperation === "add") {
  alert(firstNum + secondNum);
} else if (mathOperation === "sub") {
  alert(firstNum - secondNum);
} else if (mathOperation === "mult") {
  alert(firstNum * secondNum);
} else if (mathOperation === "div") {
  alert(firstNum / secondNum);
}
