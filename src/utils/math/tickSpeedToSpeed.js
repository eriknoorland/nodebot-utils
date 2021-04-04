/**
 * Returns the speed based on the given tick speed
 * @param {Number} tickSpeed
 * @param {Number} distancePerTick
 * @param {Number} loopTime
 * @return {Number}
 */
 const tickSpeedToSpeed = (tickSpeed, distancePerTick, loopTime) => {
  const ticksPerSecond = tickSpeed * (1000 / loopTime);
  const speedPerSecond = ticksPerSecond * distancePerTick;

  return parseInt(speedPerSecond, 10);
};

module.exports = tickSpeedToSpeed;