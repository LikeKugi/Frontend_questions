/**
 * five(plus(seven(minus(three())))) -> 9. How to implement?
 */

const one = (val) => (val ? 1 + val : 1);
const two = (val) => (val ? 2 + val : 2);
const three = (val) => (val ? 3 + val : 3);
const four = (val) => (val ? 4 + val : 4);
const five = (val) => (val ? 5 + val : 5);
const six = (val) => (val ? 6 + val : 6);
const seven = (val) => (val ? 7 + val : 7);
const eight = (val) => (val ? 8 + val : 8);
const nine = (val) => (val ? 9 + val : 9);
const zero = (val) => (val ? 0 + val : 0);
const plus = (val) => val;
const minus = (val) => -1 * val;

console.log(five(plus(seven(minus(three())))));
