let sum = 0;
let total = 100;

function firstOutput() {
  return new Promise((resolve, reject) => {
    for (let i; i < 100; i++) {
      sum = sum + 1;
    }
    resolve({ sum });
  });
}

function secondOutput() {
  return new Promise((resolve, reject) => {
    for (let i; i < 200; i++) {
      total = total + 1;
    }
    resolve({ total });
  });
}

firstOutput()
  .then((res) => {
    console.log(res);
  })
  .then(secondOutput)
  .then((res) => {
    console.log(res);
  });

// expected result sum: sum of 1 to 100, total: sum of 1 to 200
// result sum: 0 , total: 0
