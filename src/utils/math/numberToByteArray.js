/**
 * Converts a number to an array of bytes for serial comminication
 * @param {Number} number
 * @param {Number} numBytes
 * @return {Array}
 */
const numberToByteArray = (number, numBytes) => {
  const byteArray = new Array(numBytes);
  let numberCopy = number;

  for (let i = byteArray.length - 1; i >= 0; i -= 1) {
    const byte = numberCopy & 0xff; // eslint-disable-line no-bitwise

    byteArray[i] = byte;
    numberCopy = (numberCopy - byte) / 256;
  }

  return byteArray;
};

module.exports = numberToByteArray;
