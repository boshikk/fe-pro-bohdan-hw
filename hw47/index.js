////////////////////////////1/////////////////////////
const maxTime = 7000;
const minTime = 3000;
const getRandomDelay = () =>
  Math.trunc(Math.random() * (maxTime - minTime) + minTime);

const a = (cb) => {
  const delay = getRandomDelay();
  setTimeout(() => cb(delay), delay);
};
const b = (cb) => {
  const delay = getRandomDelay();
  setTimeout(() => cb(delay), delay);
};
const c = (cb) => {
  const delay = getRandomDelay();
  setTimeout(() => cb(delay), delay);
};

a(() => console.log("hello"));
b(() => console.log("my"));
c(() => console.log("friend"));

////////////////////////////2/////////////////////////

const waitForAll = () => {
  let sum = 0;
  let count = 0;

  const checkAndPrintSum = () => {
    if (count === 3) {
      console.log("Sum:", sum);
    }
  };

  a((delayFromA) => {
    sum += delayFromA;
    count++;
    checkAndPrintSum();
  });

  b((delayFromB) => {
    sum += delayFromB;
    count++;
    checkAndPrintSum();
  });

  c((delayFromC) => {
    sum += delayFromC;
    count++;
    checkAndPrintSum();
  });
};

waitForAll();
