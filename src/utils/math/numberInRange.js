/**
 * Returns whether the given number falls within the goven range
 * @param {Number} value
 * @param {Number} min
 * @param {Number} max
 * @returns {Boolean}
 */
const numberInRange = (value, min, max) => value >= min && value <= max;

module.exports = numberInRange;