import assert from 'assert';
import { numberToByteArray } from '../../src/math';

describe('math', function() {
  describe('#numberToByteArray', function() {
    it('should return [1, 0] for the decimal number 256', function() {
      const expected = [1, 0];
      const actual = numberToByteArray(256, 2);

      assert.deepEqual(actual, expected);
    });
  });
});
