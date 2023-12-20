const kebabCaseToCamelCase = (string) => {
  return string.replace(/-./g, (m) => m.toUpperCase()[1]);
};

console.log(kebabCaseToCamelCase("my-class")); // 'myClass'
console.log(kebabCaseToCamelCase("get-element-by-id")); // 'getElementById'
console.log(kebabCaseToCamelCase("class")); // 'class'
