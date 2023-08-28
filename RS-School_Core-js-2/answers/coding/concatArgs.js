/**
 * myFunc('!', 4, -10, 34, 0) -> '4!-10!34!0`. How to implement?
 * @param {string} separator
 * @param  {...number[]} args
 * @returns {string}
 */
const myFunc = (separator, ...args) => args.join(separator);

console.log(myFunc('!', 4, -10, 34, 0));
