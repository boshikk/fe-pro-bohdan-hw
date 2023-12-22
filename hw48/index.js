///////////////////////1///////////////////////
//////////////////////////////////////////////
const minDelay = 3000;
const maxDelay = 7000;
const getRandomDelay = () =>
  Math.trunc(Math.random() * (maxDelay - minDelay) + minDelay);

const delayCallback = (cb) => {
  const delay = getRandomDelay();
  return new Promise((resolve) => {
    setTimeout(() => {
      cb(delay);
      resolve();
    }, delay);
  });
};

const a = (cb) => delayCallback(cb);
const b = (cb) => delayCallback(cb);
const c = (cb) => delayCallback(cb);

a((delay) => console.log("a", delay));
b((delay) => console.log("b", delay));
c((delay) => console.log("c", delay));

///////////////////////2///////////////////////
//////////////////////////////////////////////

const waitForAll = () => {
  let delayFromA, delayFromB, delayFromC;

  const handleCallbackA = (delay) => {
    delayFromA = delay;
    checkAndPrintSum();
  };

  const handleCallbackB = (delay) => {
    delayFromB = delay;
    checkAndPrintSum();
  };

  const handleCallbackC = (delay) => {
    delayFromC = delay;
    checkAndPrintSum();
  };

  a(handleCallbackA);
  b(handleCallbackB);
  c(handleCallbackC);

  const checkAndPrintSum = () => {
    if (
      delayFromA !== undefined &&
      delayFromB !== undefined &&
      delayFromC !== undefined
    ) {
      const sum = delayFromA + delayFromB + delayFromC;
      console.log(sum);
    }
  };
};

waitForAll();
