const sum = (() => {
  let a = 0;
  return (number) => {
    a += number;
    return a;
  };
})();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
