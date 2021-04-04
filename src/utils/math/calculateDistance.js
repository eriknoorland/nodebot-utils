/**
 * Returns the distance between two coordinates
 * @param {Object} coordinate1
 * @param {Object} coordinate2
 * @return {Number}
 */
 const calculateDistance = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

module.exports = calculateDistance;