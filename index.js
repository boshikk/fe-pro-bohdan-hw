class SuperMath {
  check(obj) {
    if (this.isValidOperator(obj.znak)) {
      if (this.confirmOperation(obj)) {
        const result = this[obj.znak](obj.x, obj.y);
        console.log(`Result: ${result}`);
      }
    } else {
      console.log(
        "Invalid operator. Please enter a valid mathematical operator (+, -, /, *, %)."
      );
      this.input();
    }
  }

  confirmOperation(obj) {
    const userResponse = confirm(
      `Do you want to perform ${obj.znak} with ${obj.x} and ${obj.y}?`
    );

    if (!userResponse) {
      this.input();
    }
    return userResponse;
  }

  input() {
    const newX = parseFloat(prompt("Enter a new value for x:"));
    const newY = parseFloat(prompt("Enter a new value for y:"));
    const newOperator = prompt(
      "Enter a mathematical operator (+, -, /, *, %):"
    );

    this.check({ x: newX, y: newY, znak: newOperator });
  }

  isValidOperator(operator) {
    const validOperators = ["+", "-", "/", "*", "%"];
    return validOperators.includes(operator);
  }

  "+"(x, y) {
    return x + y;
  }

  "-"(x, y) {
    return x - y;
  }

  "/"(x, y) {
    return x / y;
  }

  "*"(x, y) {
    return x * y;
  }

  "%"(x, y) {
    return x % y;
  }
}

const mathCalculator = new SuperMath();
const mathObject = { x: 12, y: 3, znak: "/" };

mathCalculator.check(mathObject);
