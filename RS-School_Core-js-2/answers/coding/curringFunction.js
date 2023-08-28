/**
 * add(5)(9)(-4)(1) -> 11. How to implement?
 * @param {number} n
 * @returns
 */
function add(n) {
  const f = (el) => add(el + n);
  f.valueOf = () => n;
  return f;
}

console.log(+add(5)(9)(-4)(1));
