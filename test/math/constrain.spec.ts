import assert from 'assert';
import { constrain } from '../../src/math';

describe('math', function() {
  describe('#constrain', function() {
    it('should return the given value when the value is within the given constraints', function() {
      const expected = 128;
      const actual = constrain(128, 0, 255);

      assert.strictEqual(actual, expected);
    });

    it('should return the maximum constraint value when the value is higher than the max constraint', function() {
      const expected = 255;
      const actual = constrain(256, 0, 255);

      assert.strictEqual(actual, expected);
    });

    it('should return the minimal constraint value when the value is lower than the min constraint', function() {
      const expected = 10;
      const actual = constrain(9, 10, 100);

      assert.strictEqual(actual, expected);
    });
  });
});
