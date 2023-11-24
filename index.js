const array = [1, 2, 3, 4, 5];
// const doubledArray = array.map((el) => el * 2);
// console.log(doubledArray);

const mapFunc = (arr, cb) => {
  const result = [];
  for (const element of arr) {
    result.push(cb(element));
  }
  return result;
};

const callBack = (el) => el * 10;
const doubledArr = mapFunc(array, callBack);
console.log(doubledArr);
