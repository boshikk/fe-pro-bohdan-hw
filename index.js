const array = [1, 2, 3, 4, 5];

// const sum = array.reduce((sum, cur) => sum + cur, 0);
// console.log(sum);

const myOwnReduce = (arr, cb, initialValue) => {
  let accumulator = initialValue;
  for (const element of arr) {
    accumulator = cb(accumulator, element);
  }
  return accumulator;
};
const myCallback = (sum, cur) => sum * cur;

console.log(myOwnReduce(array, myCallback, 1));
