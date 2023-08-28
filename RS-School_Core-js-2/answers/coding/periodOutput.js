/**
 *periodOutput(period) method should output in the console once per every period how much
 time has passed since the first function call.
 Example: periodOutput(100) -> 100(after 100 ms), 200(after 100 ms), 300(after 100 ms), ...
 * @param {number} period
 */
function periodOutput(period) {
  for (let i = 1; i < 10; i += 1) {
    setTimeout(() => console.log(period * i), period * i);
  }
}

periodOutput(100);
