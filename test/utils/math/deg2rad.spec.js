const assert = require('assert');
const deg2rad = require('../../../src/utils/math/deg2rad');

describe('utils/math', function() {
  describe('#deg2rad', function() {
    it('should return 0.017453292519943295 radians for an angle of 1 degrees', function() {
      const expected = 0.017453292519943295;
      const actual = deg2rad(1);

      assert.strictEqual(actual, expected);
    });
  });
});
