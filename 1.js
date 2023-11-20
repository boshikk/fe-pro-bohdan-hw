const myArray = [5, 4, "apple", true, 1, NaN];

const calculateAverageNumber = (array) => {
  const numbersArray = array.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );
  const sumNumbers = numbersArray.reduce((sum, cur) => sum + cur, 0);
  return sumNumbers / numbersArray.length;
};

console.log(calculateAverageNumber(myArray));
