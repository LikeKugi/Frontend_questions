/**
 * extendedPeriodOutput(period) method should output in the console once per period
 * how much time has passed since the first function call and then increase the period.
 * Example: // extendedPeriodOutput(100) -> 100(after 100 ms), 200(after 200 ms), 300(after 300 ms)
 * @param {number} period
 */
function extendedPeriodOutput(period, modifier = 1) {
  if (modifier > 3) return;
  setTimeout(() => {
    console.log(period * modifier);
    extendedPeriodOutput(period, (modifier += 1));
  }, period * modifier + period * (modifier - 1));
}

extendedPeriodOutput(200);
