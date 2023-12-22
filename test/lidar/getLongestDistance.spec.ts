import assert from 'assert';
import { getLongestDistance } from '../../src/lidar';

describe('lidar', function() {
  describe('#getLongestDistance', function() {
    it('should return the longest distance in an array of distance objects', function() {
      const measurements = [
        { angle: 0, distance: 10, quality: 15 },
        { angle: 1, distance: 20, quality: 15 },
        { angle: 2, distance: 30, quality: 15 },
        { angle: 3, distance: 40, quality: 15 },
      ];
      const expected = { angle: 3, distance: 40, quality: 15 };
      const actual = getLongestDistance(measurements);

      assert.deepStrictEqual(actual, expected);
    });

    it('should return the longest distance in an array of distance objects', function() {
      const measurements = [
        { angle: 0, distance: 20, quality: 15 },
        { angle: 1, distance: 30, quality: 15 },
        { angle: 2, distance: 40, quality: 15 },
        { angle: 3, distance: 10, quality: 15 },
        { angle: 4, distance: 20, quality: 15 },
        { angle: 5, distance: 30, quality: 15 },
      ];
      const expected = { angle: 2, distance: 40, quality: 15 };
      const actual = getLongestDistance(measurements);

      assert.deepStrictEqual(actual, expected);
    });
  });
});
