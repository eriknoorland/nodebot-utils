import assert from 'assert';
import { parseDecToBinary } from '../../src/math';

describe('math', function() {
  describe('#parseDecToBinary', function() {
    it('should return a string', function() {
      const expected = 'string';
      const actual = typeof(parseDecToBinary(0));

      assert.strictEqual(actual, expected);
    });

    it('should return an 8 character string', function() {
      const expected = 8;
      const actual = parseDecToBinary(200).length;

      assert.strictEqual(actual, expected);
    });

    it('should return a binary string of 00000001 for the decimal 1', function() {
      const expected = '00000001';
      const actual = parseDecToBinary(1);

      assert.strictEqual(actual, expected);
    });

    it('should return a binary string of 11111111 for the decimal 255', function() {
      const expected = '11111111';
      const actual = parseDecToBinary(255);

      assert.strictEqual(actual, expected);
    });
  });
});
