///////////////////////////////////////////////
////////////////WITHOUT PROMISE////////////////
//////////////////////////////////////////////

let fulfilled = false;
let timerStarted = false;
const callbacks = [];

const checkTime = (cb) => {
  if (fulfilled) {
    cb();
    return;
  }

  if (!timerStarted) {
    setTimeout(() => {
      fulfilled = true;
      callbacks.forEach((cb) => cb());
    }, 5000);
  }
  callbacks.push(cb);
};

checkTime(() => {
  console.log("TELL TIME TO DADDY");
});

setTimeout(() => {
  checkTime(() => {
    console.log("TELL TIME TO MOMMY");
  });
  checkTime(() => {
    console.log("TELL TIME TO MOMMY");
  });
  checkTime(() => {
    console.log("TELL TIME TO MOMMY");
  });
}, 1000);

///////////////////////////////////////////////
/////////////////////PROMISE//////////////////
//////////////////////////////////////////////

const timerPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 5000);
});

timerPromise
  .then(() => {
    console.log("TELL TIME TO DADDY");
  })
  .then(() => {
    console.log("TELL TIME TO MOMMY");
  });

///////////////////////////////////////////////////
///////////////////////////////////////////////////

const goToMarketPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 5000);
});

const goToHospitalPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 7000);
});

///////////////////////////////////////////////////
///////////////////////////////////////////////////

Promise.all([goToMarketPromise, goToHospitalPromise]).then(() => {
  console.log("BOTH");
});

Promise.allSettled([goToMarketPromise, goToHospitalPromise]).then(() => {
  console.log("BOTH");
});

///////////////////////////////////////////////////
///////////////////////////////////////////////////

const buyBanana = new Promise((resolve, reject) => {
  const bananasInMarket = 0;
  setTimeout(() => {
    if (bananasInMarket > 0) {
      resolve(bananasInMarket);
    } else {
      reject(0);
    }
  }, 2000);
});

buyBanana
  .then((param) => {
    console.log(param);
  })
  .catch((e) => {
    console.log(e);
  });

///////////////////////////////////////////////////
///////////////////////////////////////////////////

// const timerQuest = (cb) => {
//   setTimeout(() => {
//     cb(150);
//   }, 2000);
// };

// const marketQuest = (cb) => {
//   setTimeout(() => {
//     cb(100);
//   }, 10000);
// };

// const hospitalQuest = (cb) => {
//   setTimeout(() => {
//     cb(100);
//   }, 10000);
// };

// const cleanRoomQuest = (cb) => {
//   setTimeout(() => {
//     cb(100);
//   }, 5000);
// };

// const homeWorkQuest = (cb) => {
//   setTimeout(() => {
//     cb(200);
//   }, 10000);
// };

// timerQuest((timerPayment) => {
//   marketQuest((marketPayment) => {
//     hospitalQuest((hospitalPayment) => {
//       cleanRoomQuest((cleanRoomPayment) => {
//         homeWorkQuest((homeWorkPayment) => {
//           const total =
//             timerPayment +
//             marketPayment +
//             hospitalPayment +
//             cleanRoomPayment +
//             homeWorkPayment;
//           console.log("JOB DONE");
//         });
//       });
//     });
//   });
// });

///////////////////////////////////////////////////
///////////////////////////////////////////////////

const hospitalQuest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 10000);
  });
};

const cleanRoomQuest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 10000);
  });
};

const homeWorkQuest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 10000);
  });
};

hospitalQuest()
  .then(() => cleanRoomQuest())
  .then(() => homeWorkQuest());

///////////////////////////////////////////////////
///////////////////////////////////////////////////

Promise.resolve().then(() => console.log(3));
