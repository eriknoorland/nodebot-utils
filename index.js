module.exports = {
  utils: {
    constrain: require('./src/utils/constrain'),
    countdown: require('./src/utils/countdown'),
    debounce: require('./src/utils/debounce'),
    logger: require('./src/utils/logger'),
    pause: require('./src/utils/pause'),

    math: {
      calculateDistance: require('./src/utils/math/calculateDistance'),
      calculateHeading: require('./src/utils/math/calculateHeading'),
      deg2rad: require('./src/utils/math/deg2rad'),
      fixedDecimals: require('./src/utils/math/fixedDecimals'),
      getHeadingFromPoseToCoordinate: require('./src/utils/math/getHeadingFromPoseToCoordinate'),
      getRelativeAngleDifference: require('./src/utils/math/getRelativeAngleDifference'),
      numberToByteArray: require('./src/utils/math/numberToByteArray'),
      numberToHex: require('./src/utils/math/numberToHex'),
      parseDecToBinary: require('./src/utils/math/parseDecToBinary'),
      rad2deg: require('./src/utils/math/rad2deg'),
      speedToTickSpeed: require('./src/utils/math/speedToTickSpeed'),
      tickSpeedToSpeed: require('./src/utils/math/tickSpeedToSpeed'),
    },

    sensor: {
      lidar: {
        averageMeasurements: require('./src/utils/sensor/lidar/averageMeasurements'),
        getAngleDistance: require('./src/utils/sensor/lidar/getAngleDistance'),
        getLongestDistance: require('./src/utils/sensor/lidar/getLongestDistance'),
        getShortestDistance: require('./src/utils/sensor/lidar/getShortestDistance'),
        isWithinDistance: require('./src/utils/sensor/lidar/isWithinDistance'),
        normalizeAngle: require('./src/utils/sensor/lidar/normalizeAngle'),
        scan: require('./src/utils/sensor/lidar/scan'),
        scanObject2Array: require('./src/utils/sensor/lidar/scanObject2Array'),
      },
    },

    usb: {
      getUSBDevicePorts: require('./src/utils/usb/getUSBDevicePorts'),
    },
  },
};
