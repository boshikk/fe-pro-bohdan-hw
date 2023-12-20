const camelCaseToKebabCase = (string) => {
  if (string != string.toLowerCase()) {
    string = string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  }
  return string;
};

console.log(camelCaseToKebabCase("myClass")); // 'my-class'
console.log(camelCaseToKebabCase("getElementById")); // 'get-element-by-id'
console.log(camelCaseToKebabCase("class")); // 'class'
