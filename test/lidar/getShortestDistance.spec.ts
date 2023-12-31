import assert from 'assert';
import { getShortestDistance } from '../../src/lidar';

describe('lidar', function() {
  describe('#getShortestDistance', function() {
    it('should return the shortest distance in an array of distance objects', function() {
      const measurements = [
        { angle: 0, distance: 10, quality: 15 },
        { angle: 1, distance: 20, quality: 15 },
        { angle: 2, distance: 30, quality: 15 },
        { angle: 3, distance: 40, quality: 15 },
      ];
      const expected = { angle: 0, distance: 10, quality: 15 };
      const actual = getShortestDistance(measurements);

      assert.deepStrictEqual(actual, expected);
    });

    it('should return the shortest distance in an array of distance objects', function() {
      const measurements = [
        { angle: 0, distance: 20, quality: 15 },
        { angle: 1, distance: 30, quality: 15 },
        { angle: 2, distance: 40, quality: 15 },
        { angle: 3, distance: 10, quality: 15 },
        { angle: 4, distance: 20, quality: 15 },
        { angle: 5, distance: 30, quality: 15 },
        { angle: 6, distance: 10, quality: 15 },
      ];
      const expected = { angle: 3, distance: 10, quality: 15 };
      const actual = getShortestDistance(measurements);

      assert.deepStrictEqual(actual, expected);
    });
  });
});
