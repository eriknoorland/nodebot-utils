import { LidarMeasurement } from './interfaces';

// returns an object containing averaged measured angle distances
// export const averageMeasurements = (angleMeasurements: Object): Promise<Object> => {
//   return Promise.resolve(Object.keys(angleMeasurements)
//     .reduce((acc, angle) => {
//       const measurements = angleMeasurements[angle];
//       const total = measurements.reduce((acc: number, value: number) => (acc + value), 0);
//       const average = Math.floor(total / measurements.length);

//       acc[angle] = average;

//       return acc;
//     }, {}));
// };

// returns the smallest or longest distance measured for a given angle with a given opening range
// export const getAngleDistance = (data: Object, angle: number, range = 5, which = 'min'): number => {
//   const distances = Object.keys(data)
//     .filter((a) => a >= angle - range && a <= angle + range)
//     .map((a) => data[a]);

//   return Math[which](...distances);
// }

// Returns an object with the angle and distance for the longest measured distance
export const getLongestDistance = (measurements: Array<LidarMeasurement>): LidarMeasurement => measurements
  .reduce((max, m) => (m.distance > max.distance ? m : max), measurements[0]);

// Returns an object with the angle and distance for the shortest measured distance
export const getShortestDistance = (measurements: Array<LidarMeasurement>): LidarMeasurement => measurements
  .reduce((min, m) => (m.distance < min.distance ? m : min), measurements[0]);

// Resolves when for the given angle the allowed distance is reacher or passed
// export const isWithinDistance = (lidar: Lidar, allowedDistance: number, checkAngle: number): Promise<void> => new Promise(resolve => {
//   let count = 0;

//   const onLidarData = ({ quality, angle, distance }: LidarMeasurement) => {
//     if (quality > 10 && Math.floor(angle) === checkAngle) {
//       if (distance > 0 && distance <= allowedDistance) {
//         count += 1;

//         if (count % 2 === 0) {
//           lidar.off('data', onLidarData);
//           resolve();
//         }
//       }
//     }
//   };

//   lidar.on('data', onLidarData);
// });

// scan accumulates lidar data for a set amount of time
// export const scan = (lidar: Lidar, duration: number, offset = 0, acc = {}) => new Promise((resolve) => {
//   const onLidarData = ({ angle, distance }: LidarMeasurement) => {
//     if (distance) {
//       const index = normalizeAngle(Math.round(angle) + offset);

//       if (!acc[index]) {
//         acc[index] = [];
//       }

//       acc[index].push(distance);
//     }
//   };

//   const onScanComplete = () => {
//     lidar.off('data', onLidarData);
//     resolve(acc);
//   };

//   lidar.on('data', onLidarData);

//   setTimeout(onScanComplete, duration);
// });

// converts a scan object to an array of objects
// export const scanObject2Array = (measurements: Object) => {
//   return Object
//     .keys(measurements)
//     .map((a) => {
//       const angle = parseInt(a, 10);
//       const distance = measurements[angle];

//       return { angle, distance };
//     });
// };