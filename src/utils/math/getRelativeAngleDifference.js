/**
 * Returns a signed difference between the given angles
 * @param {Number} target
 * @param {Number} current
 * @return {Number}
 */
const getRelativeAngleDifference = (target, current) => (
  // ((target - current + (360 + 180)) % 360) - 180
  ((target - current + ((Math.PI * 2) + Math.PI)) % (Math.PI * 2)) - Math.PI
);

module.exports = getRelativeAngleDifference;
