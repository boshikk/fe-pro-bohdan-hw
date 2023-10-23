function mathOperations() {
  const num1 = Number(prompt("Please type the first number ;)"));
  const num2 = Number(prompt("Please type the second number ;)"));

  return alert(`${num1} + ${num2} = ${num1 + num2}
${num1} - ${num2} = ${num1 - num2}
${num1} * ${num2} = ${num1 * num2}
${num1} / ${num2} = ${num1 / num2}`);
}

mathOperations();
