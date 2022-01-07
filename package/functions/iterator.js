// formula for the operation.
let formula = {
  multiple: function (a, b) {
    return a * b;
  },
  range: function (a, b) {
    return a - 1 + b;
  },
  subtract: function (a, b) {
    return Math.abs(a - b);
  },
  divide: function (a, b) {
    return b != 0 && a / b;
  },
  modulus: function (a, b) {
    return b != 0 && a % b;
  },
  power: function (a, b) {
    return a ** b;
  },
  add: function (a, b) {
    return a + b;
  },
};

/**
 *
 * @param {Number} min starting value
 * @param {Number} max end value
 * @param {String} type type of operation
 * @param {Number} step step in operation
 * @returns
 */
function iterator(min, max, type, step) {
  let n = min;
  return {
    next() {
      if (n <= max) {
        return {
          value: formula[type] && formula[type](n++, step),
          done: false,
        };
      }
      return {
        value: undefined,
        done: true,
      };
    },
  };
}
/**
 *
 *  const Iterator = iterator(0, 20, "range", 1);
    let result = Iterator.next();
    while (!result.done) {
    console.log(result.value);
    result = Iterator.next();
} 
 */
module.exports = iterator;
