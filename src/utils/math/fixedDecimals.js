/**
 * Returns a number with x amount of decimals
 * @param {Number} value
 * @param {Number} numDecimals
 * @return {Number}
 */
 const fixedDecimals = (value, numDecimals) => Number(value.toFixed(numDecimals));

module.exports = fixedDecimals;