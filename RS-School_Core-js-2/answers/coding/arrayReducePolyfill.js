/**
 * Array.reduce implement polyfill
 * @param {Function} callback
 * @param {any} initial
 * @returns {any}
 */
Array.prototype.myReduce = function (callback, initial) {
  console.log(this);
  let accum = initial;
  for (let i = 0; i < this.length; i += 1) {
    accum = callback(accum, this[i], i, this);
  }
  return accum;
};

const arrToReduce = [1, 2, 3];

console.log(arrToReduce.myReduce((a, x) => a * x, 1));

const anotherArrToReduce = [2, 4, 6, 8];
console.log(
  anotherArrToReduce.myReduce((a, x, idx) => ({ ...a, [x]: idx }), {}),
);
