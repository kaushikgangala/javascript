const add = (...args) => {
  return parseInt(args[0][0]) + parseInt(args[0][1]);
};

const square = (a) => {
  return a * a;
};

const cube = (a) => {
  return a ** 3;
};

const composeAll =
  (...fns) =>
  (...values) =>
    fns.reduce((a, b) => b(a), values);

const amp = composeAll(add, square, cube);

console.log(amp(1, 1));
