const array = [431, 523, "Dan", "Bohdan", 1996];

const removeElementArray = function (array, item) {
  return array.splice(array.indexOf(item), 1);
};

removeElementArray(array, 1996);
console.log(array);
