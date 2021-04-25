const assert = require('assert');
const numberToHex = require('../../../src/utils/math/numberToHex');

describe('utils/math', function() {
  describe('#numberToHex', function() {
    it('should return 0x01 for the decimal number 1', function() {
      const expected = '0x01';
      const actual = numberToHex(1);

      assert.strictEqual(actual, expected);
    });

    it('should return 0xFF for the decimal number 255', function() {
      const expected = '0xFF';
      const actual = numberToHex(255);

      assert.strictEqual(actual, expected);
    });

    it('should return 0x80 for the decimal number 128', function() {
      const expected = '0x80';
      const actual = numberToHex(128);

      assert.strictEqual(actual, expected);
    });
  });
});
