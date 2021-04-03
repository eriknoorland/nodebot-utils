import getAngleDistance from './sensor/lidar/getAngleDistance';

const getInitialPosition = () => new Promise((resolve) => {
  const lidarData;
  const x = getAngleDistance(lidarData, 180);
  const y = getAngleDistance(lidarData, 270);

  resolve({ x, y });
});

module.exports = getInitialPosition;
