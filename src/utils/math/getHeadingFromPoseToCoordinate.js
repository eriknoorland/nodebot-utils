const calculateHeading = require('./calculateHeading');

/**
 * Returns a heading in radians between the given pose and the target coordinate
 * @param {Object} pose
 * @param {Object} targetCoordinate
 * @return {Number}
 */
 const getHeadingFromPoseToCoordinate = (pose, targetCoordinate) => {
  return calculateHeading(pose, targetCoordinate) - pose.phi;
};

module.exports = getHeadingFromPoseToCoordinate;