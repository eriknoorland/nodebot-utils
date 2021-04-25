const assert = require('assert');
const rad2deg = require('../../../src/utils/math/rad2deg');

describe('utils/math', function() {
  describe('#rad2deg', function() {
    it('should return 1 degrees for an angle of 0.017453292519943295 radians', function() {
      const expected = 1;
      const actual = rad2deg(0.017453292519943295);

      assert.strictEqual(actual, expected);
    });
  });
});
