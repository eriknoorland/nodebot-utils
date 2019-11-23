// utils / general
const constrain = require('./src/utils/constrain');
const countdown = require('./src/utils/countdown');
const debounce = require('./src/utils/debounce');
const logger = require('./src/utils/logger');
const pause = require('./src/utils/pause');

// utils / math
const deg2rad = require('./src/utils/math/deg2rad');
const getRelativeAngleDifference = require('./src/utils/math/getRelativeAngleDifference');
const numberToByteArray = require('./src/utils/math/numberToByteArray');
const numberToHex = require('./src/utils/math/numberToHex');
const parseDecToBinary = require('./src/utils/math/parseDecToBinary');
const rad2deg = require('./src/utils/math/rad2deg');

// utils / sensor
const averageMeasurements = require('./src/utils/sensor/lidar/averageMeasurements');
const getAngleDistance = require('./src/utils/sensor/lidar/getAngleDistance');
const getLongestDistance = require('./src/utils/sensor/lidar/getLongestDistance');
const getShortestDistance = require('./src/utils/sensor/lidar/getShortestDistance');
const isWithinDistance = require('./src/utils/sensor/lidar/isWithinDistance');
const normalizeAngle = require('./src/utils/sensor/lidar/normalizeAngle');
const scan = require('./src/utils/sensor/lidar/scan');
const scanObject2Array = require('./src/utils/sensor/lidar/scanObject2Array');

module.exports = {
  utils: {
    constrain,
    countdown,
    debounce,
    logger,
    pause,
    math: {
      deg2rad,
      getRelativeAngleDifference,
      numberToByteArray,
      numberToHex,
      parseDecToBinary,
      rad2deg,
    },
    sensor: {
      lidar: {
        averageMeasurements,
        getAngleDistance,
        getLongestDistance,
        getShortestDistance,
        isWithinDistance,
        normalizeAngle,
        scan,
        scanObject2Array,
      },
    },
  },
};
