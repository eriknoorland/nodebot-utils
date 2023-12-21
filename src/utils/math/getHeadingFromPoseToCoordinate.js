const calculateAngleBetweenCoordinates = require('./calculateAngleBetweenCoordinates');

/**
 * Returns a heading in radians between the given pose and the target coordinate
 * @param {Object} pose
 * @param {Object} targetCoordinate
 * @return {Number}
 */
const getHeadingFromPoseToCoordinate = (pose, targetCoordinate) => {
  const angleBetweenCoordinates = calculateAngleBetweenCoordinates(pose, targetCoordinate);
  const result = angleBetweenCoordinates - pose.phi;

  if (result > Math.PI) {
    return Number((((2 * Math.PI) - result) * -1).toFixed(4));
  }

  if (result < -Math.PI) {
    return Number((((2 * -Math.PI) - result) * -1).toFixed(4));
  }

  return Number(result.toFixed(4));
};

module.exports = getHeadingFromPoseToCoordinate;
