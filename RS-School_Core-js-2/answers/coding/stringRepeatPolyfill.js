/**
 * 'hello world'.repeating(3) -> 'hello world hello world hello world'. How to implement?
 * @param {number} times
 * @param {string} separator
 * @returns {string}
 */
String.prototype.myRepeat = function (times, separator = ' ') {
  const outArr = [...new Array(times)].fill(this);

  return outArr.join(separator);
};

console.log('hello world'.myRepeat(3));
