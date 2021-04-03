/**
 * Returns the calculated tick speed based on the given metric speed in mm/s
 * @param {Number} speed
 * @param {Number} distancePerTick
 * @param {Number} loopTime
 * @return {Number}
 */
const speedToTickSpeed = (speed, distancePerTick, loopTime) => {
  const ticksPerSecond = speed / distancePerTick;
  const ticksPerLoopTime = ticksPerSecond / (1000 / loopTime);

  return parseInt(ticksPerLoopTime, 10);
};
