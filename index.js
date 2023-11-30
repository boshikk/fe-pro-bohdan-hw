const autocompleteFunc = (arr, str) => {
  return arr.filter((el) => el.includes(str));
};

console.log(autocompleteFunc(["aaa", "bbb", "abb"], "aa"));
