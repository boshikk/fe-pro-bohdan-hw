const x = Number(prompt("Enter the number!"));
const znak = prompt("Enter the mathematical sign!");
const y = Number(prompt("Enter the second number!"));

const doMath = (x, znak, y) => {
  if (
    znak === "+" ||
    znak === "-" ||
    znak === "*" ||
    znak === "/" ||
    znak === "%" ||
    znak === "^"
  ) {
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
    }
  }
};

console.log(doMath(x, znak, y));
