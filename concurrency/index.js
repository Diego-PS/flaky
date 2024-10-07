async function concurrency() {
  let x = 0;

  function add() {
    x = x + 1;
  }

  function multiply() {
    x = x*2;
  }

  async function asyncAdd() {
    return new Promise((resolve) => {
      setTimeout(function () {
        add();
        resolve();
      }, 2)
    })
  }

  async function asyncMultiply() {
    return new Promise((resolve) => {
      setTimeout(function () {
        multiply();
        resolve();
      }, 0)
    })
  }

  await Promise.all([asyncAdd(), asyncMultiply()])

  console.log(x);
  return x;
}

concurrency();

export default concurrency;