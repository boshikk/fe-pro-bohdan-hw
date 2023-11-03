const array = [431, 523, "Dan", "Bohdan", 1996];

const removeElementArray = function (array, item) {
  return array.filter((el) => el !== item);
};

removeElementArray(array, "Dan");
