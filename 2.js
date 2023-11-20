const x = Number(prompt("Enter the number!"));
const znak = prompt("Enter the mathematical sign!");
const y = Number(prompt("Enter the second number!"));

const doMath = (x, znak, y) => {
  switch (znak) {
    case "+":
      return `${x} ${znak} ${y} = ${x + y}`;
    case "-":
      return `${x} ${znak} ${y} = ${x - y}`;
    case "*":
      return `${x} ${znak} ${y} = ${x * y}`;
    case "/":
      return `${x} ${znak} ${y} = ${x / y}`;
    case "%":
      return `${x} ${znak} ${y} = ${x % y}`;
    case "^":
      return `${x} ${znak} ${y} = ${x ^ y}`;
    default:
      return "Invalid mathematical sign!";
  }
};

console.log(doMath(x, znak, y));
