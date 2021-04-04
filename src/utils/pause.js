/**
 * Pauses execution for given duration in miliseconds
 * @param {int} duration
 * @return {Promise}
 */
const pause = (duration = 1000) => new Promise((resolve) => {
  setTimeout(resolve, duration);
});

module.exports = pause;
