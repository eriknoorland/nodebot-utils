/**
 * Returns the heading in radians between two coordinates
 * @param {Object} coordinate1
 * @param {Object} coordinate2
 * @return {Number}
 */
 const calculateHeading = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
  return Math.atan2(y2 - y1, x2 - x1);
};

module.exports = calculateHeading;