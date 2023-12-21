const assert = require('assert');
const deg2rad = require('../../../src/utils/math/deg2rad');
const rad2deg = require('../../../src/utils/math/rad2deg');
const getHeadingFromPoseToCoordinate = require('../../../src/utils/math/getHeadingFromPoseToCoordinate');

describe('utils/math', function() {
  describe('#getHeadingFromPoseToCoordinate', function() {
    const currentPose = {
      x: 250,
      y: 250,
      phi: 0,
    };

    it('should return 0° when the current pose and target coordinate are identical when pose.phi is 0°', function() {
      const target = { ...currentPose };

      const expected = 0;
      const actual = getHeadingFromPoseToCoordinate(currentPose, target);

      assert.strictEqual(actual, expected);
    });

    it('should return -180° when the current pose and target coordinate are identical when pose.phi is 180°', function() {
      const pose = { ...currentPose, phi: Math.PI };
      const target = { ...currentPose };

      const expected = -Math.PI.toFixed(4);
      const actual = getHeadingFromPoseToCoordinate(pose, target);

      assert.strictEqual(actual, expected);
    });

    it('should return 180° when the target coordinate x is lower than pose.x when pose.phi is 0', function() {
      const target = {
        y: currentPose.y,
        x: currentPose.x - 100,
      };

      const expected = Number(Math.PI.toFixed(4));
      const actual = getHeadingFromPoseToCoordinate(currentPose, target);

      assert.strictEqual(actual, expected);
    });

    it('should return 90° when the target coordinate x is lower than pose.x when pose.phi is 90°', function() {
      const pose = { ...currentPose, phi: Math.PI / 2 };
      const target = {
        y: currentPose.y,
        x: currentPose.x - 100,
      };

      const expected = Number((Math.PI / 2).toFixed(4));
      const actual = getHeadingFromPoseToCoordinate(pose, target);

      assert.strictEqual(actual, expected);
    });

    it('should return -90° when the target coordinate x is lower than pose.x when pose.phi is -90°', function() {
      const pose = { ...currentPose, phi: -Math.PI / 2 };
      const target = {
        y: currentPose.y,
        x: currentPose.x - 100,
      };

      const expected = Number((-Math.PI / 2).toFixed(4));
      const actual = getHeadingFromPoseToCoordinate(pose, target);

      assert.strictEqual(actual, expected);
    });

    it('should return 135° when the target coordinate x is lower than pose.x when pose.phi is 45°', function() {
      const pose = { ...currentPose, phi: Math.PI / 4 };
      const target = {
        y: currentPose.y,
        x: currentPose.x - 100,
      };

      const expected = Number(((Math.PI / 4) * 3).toFixed(4));
      const actual = getHeadingFromPoseToCoordinate(pose, target);

      assert.strictEqual(actual, expected);
    });

    it('should return -180° when ...... when pose.phi is 45°', function() {
      const pose = { ...currentPose, phi: Math.PI / 4 };
      const target = {
        y: currentPose.y - 100,
        x: currentPose.x - 100,
      };

      const expected = Number((-Math.PI).toFixed(4));
      const actual = getHeadingFromPoseToCoordinate(pose, target);

      assert.strictEqual(actual, expected);
    });

    it('should return 157.5° when ...... when pose.phi is 45°', function() {
      const pose = { ...currentPose, phi: Math.PI / 4 };
      const target = {
        y: currentPose.y - 41.421358381437365,
        x: currentPose.x - 100,
      };

      const expected = 157.5;
      const actual = rad2deg(getHeadingFromPoseToCoordinate(pose, target));

      assert.strictEqual(Number(actual.toFixed(1)), expected);
    });
  });
});
