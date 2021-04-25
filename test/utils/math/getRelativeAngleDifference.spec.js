const assert = require('assert');
const deg2rad = require('../../../src/utils/math/deg2rad');
const rad2deg = require('../../../src/utils/math/rad2deg');
const getRelativeAngleDifference = require('../../../src/utils/math/getRelativeAngleDifference');

describe('utils/math', function() {
  describe('#getRelativeAngleDifference', function() {
    it('should return 0 when the target and current angles are the same', function() {
      const expected = 0;
      const actual = getRelativeAngleDifference(0, 0);

      assert.strictEqual(actual, expected);
    });

    it('should return 2 when the target angle is larger by 2 than the current angle is', function() {
      const expected = 2;
      const actual = getRelativeAngleDifference(92, 90);

      assert.strictEqual(actual, expected);
    });

    it('should return -4 when the current angle is larger by 4 than the target angle is', function() {
      const expected = -4;
      const actual = Math.round(rad2deg(getRelativeAngleDifference(deg2rad(90), deg2rad(94))));

      assert.strictEqual(actual, expected);
    });

    it('should return -1 when the current angle is 0 and the target angle is 359', function() {
      const expected = -1;
      const actual = Math.round(rad2deg(getRelativeAngleDifference(deg2rad(359), 0)));

      assert.strictEqual(actual, expected);
    });

    it('should return 90 when the current angle is 179 and the target angle is 180', function() {
      const expected = Math.PI / 2;
      const actual = getRelativeAngleDifference(Math.PI, Math.PI / 2);

      assert.strictEqual(actual, expected);
    });
  });
});
