const assert = require('assert');
const numberToByteArray = require('../../../src/utils/math/numberToByteArray');

describe('utils/math', function() {
  describe('#numberToByteArray', function() {
    it('should return [1, 0] for the decimal number 256', function() {
      const expected = [1, 0];
      const actual = numberToByteArray(256, 2);

      assert.deepEqual(actual, expected);
    });
  });
});
