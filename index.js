class SuperMath {
  check(obj) {
    if (this.isValidOperator(obj.znak)) {
      const userResponse = prompt(
        `Do you want to perform ${obj.znak} with ${obj.X} and ${obj.Y}? (yes/no)`
      );

      if (userResponse.toLowerCase() === "yes") {
        const result = this[obj.znak](obj.X, obj.Y);
        console.log(`Result: ${result}`);
      } else {
        this.input();
      }
    } else {
      console.log(
        "Invalid operator. Please enter a valid mathematical operator (+, -, /, *, %)."
      );
      this.input();
    }
  }

  input() {
    const newX = parseFloat(prompt("Enter a new value for X:"));
    const newY = parseFloat(prompt("Enter a new value for Y:"));
    const newOperator = prompt(
      "Enter a mathematical operator (+, -, /, *, %):"
    );

    this.check({ X: newX, Y: newY, znak: newOperator });
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
const mathObject = { X: 12, Y: 3, znak: "/" };

mathCalculator.check(mathObject);
