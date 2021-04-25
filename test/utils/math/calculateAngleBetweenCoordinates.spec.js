const assert = require('assert');
const deg2rad = require('../../../src/utils/math/deg2rad');
const rad2deg = require('../../../src/utils/math/rad2deg');
const calculateAngleBetweenCoordinates = require('../../../src/utils/math/calculateAngleBetweenCoordinates');

describe('utils/math', function() {
  describe('#calculateAngleBetweenCoordinates', function() {
    const coordinate1 = {
      x: 100,
      y: 100,
    };

    it('should return the radians equivalent of 0° when both coordinates are identical', function() {
      const expected = 0;
      const actual = calculateAngleBetweenCoordinates(coordinate1, coordinate1);

      assert.strictEqual(actual, expected);
    });

    it('should return the radians equivalent of 0° when the second coordinates x-axis value is higher', function() {
      const expected = 0;
      const actual = calculateAngleBetweenCoordinates(coordinate1, { x: 200, y: 100 });

      assert.strictEqual(actual, expected);
    });

    it('should return the radians equivalent of -90° when the second coordinates y-axis value is lower', function() {
      const expected = -90;
      const actual = rad2deg(calculateAngleBetweenCoordinates(coordinate1, { x: 100, y: 50 }));

      assert.strictEqual(actual, expected);
    });

    it('should return the radians equivalent of -45° when the second coordinates x-axis value is higher and y-axis value is lower equally', function() {
      const expected = -45;
      const actual = rad2deg(calculateAngleBetweenCoordinates(coordinate1, { x: 150, y: 50 }));

      assert.strictEqual(actual, expected);
    });

    it('should return the radians equivalent of 180° when the second coordinates x-axis value is lower', function() {
      const expected = 180;
      const actual = rad2deg(calculateAngleBetweenCoordinates(coordinate1, { x: 50, y: 100 }));

      assert.strictEqual(actual, expected);
    });

    it('should return a value in radians', function() {
      const expected = Math.PI;
      const actual = calculateAngleBetweenCoordinates(coordinate1, { x: 50, y: 100 });

      assert.strictEqual(actual, expected);
    });

    it('should return a value between -π and π', function() {
      const expected = -Math.PI / 2;
      const actual = calculateAngleBetweenCoordinates(coordinate1, { x: 100, y: 50 });

      assert.strictEqual(actual, expected);
    });
  });
});
