import assert from 'assert';
import { normalizeAngle } from '../../src/math';

describe('lidar', function() {
  describe('#normalizeAngle', function() {
    it('should return an angle between 0 and 359', function() {
      const expected = 359;
      const actual = normalizeAngle(-1);

      assert.strictEqual(actual, expected);
    });

    it('should return an angle between 0 and 359', function() {
      const expected = 180;
      const actual = normalizeAngle(180);

      assert.strictEqual(actual, expected);
    });

    it('should return an angle between 0 and 359', function() {
      const expected = 10;
      const actual = normalizeAngle(370);

      assert.strictEqual(actual, expected);
    });
  });
});
