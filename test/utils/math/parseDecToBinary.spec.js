const assert = require('assert');
const parseDecToBinary = require('../../../src/utils/math/parseDecToBinary');

describe('utils/math', function() {
  describe('#parseDecToBinary', function() {
    it('should return a string', function() {
      const expected = 'string';
      const actual = typeof(parseDecToBinary(0));

      assert.equal(actual, expected);
    });

    it('should return an 8 character string', function() {
      const expected = 8;
      const actual = parseDecToBinary(200).length;

      assert.equal(actual, expected);
    });

    it('should return a binary string of 00000001 for the decimal 1', function() {
      const expected = '00000001';
      const actual = parseDecToBinary(1);

      assert.equal(actual, expected);
    });

    it('should return a binary string of 11111111 for the decimal 255', function() {
      const expected = '11111111';
      const actual = parseDecToBinary(255);

      assert.equal(actual, expected);
    });
  });
});
