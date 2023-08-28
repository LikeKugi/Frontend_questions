/**
 *Array.flat implement polyfill
 * @param {Array<any>} arrs
 * @returns {Array<any>}
 */
function flatten(arrs) {
  const out = [];
  for (const el of arrs) {
    if (Array.isArray(el)) {
      out.push(...flatten(el));
    } else {
      out.push(el);
    }
  }
  return out;
}

const arr1 = [0, 1, 2, [3, 4]];
console.log(flatten(arr1));

const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(flatten(arr2));
