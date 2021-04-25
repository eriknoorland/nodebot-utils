const calculateAngleBetweenCoordinates = require('./calculateAngleBetweenCoordinates');

/**
 * Returns a heading in radians between the given pose and the target coordinate
 * @param {Object} pose
 * @param {Object} targetCoordinate
 * @return {Number}
 */
 const getHeadingFromPoseToCoordinate = (pose, targetCoordinate) => {
  return calculateAngleBetweenCoordinates(pose, targetCoordinate) - pose.phi;
};

module.exports = getHeadingFromPoseToCoordinate;