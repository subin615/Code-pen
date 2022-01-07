/**
 * fibonacci series with reset
 */
function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    let reset = yield current;
    //destructing and assigning values
    [current, next] = [next, next + current];
    if (reset) {
      current = 0;
      next = 1;
    }
  }
}

module.exports = fibonacci;
