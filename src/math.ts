import { Point, Pose } from './interfaces';

export const constrain = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const deg2rad = (deg: number) => deg / (180 / Math.PI);

export const rad2deg = (rad: number) => rad * (180 / Math.PI);

export const byteArrayToNumber = (bytes: number[]) => {
  const binary = bytes.reduce((acc, byte) => `${acc}${parseDecToBinary(byte)}`, '');

  return parseInt(binary, 10);
};

export const calculateAngleBetweenCoordinates = (p1: Point, p2: Point) => {
  const { x: x1, y: y1 } = p1;
  const { x: x2, y: y2 } = p2;
  
  return Math.atan2(y2 - y1, x2 - x1);
};

export const calculateDistance = (p1: Point, p2: Point) => {
  const { x: x1, y: y1 } = p1;
  const { x: x2, y: y2 } = p2;

  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

export const fixedDecimals = (value: number, numDecimals: number) => {
  return Number(value.toFixed(numDecimals));
};

// returns a heading in radians between the given pose and the target coordinate
export const getHeadingFromPoseToCoordinate = (pose: Pose, targetCoordinate: Point) => {
  const angleBetweenCoordinates = calculateAngleBetweenCoordinates(pose, targetCoordinate);
  const result = angleBetweenCoordinates - pose.phi;

  if (result > Math.PI) {
    return Number((((2 * Math.PI) - result) * -1).toFixed(4));
  }

  if (result < -Math.PI) {
    return Number((((2 * -Math.PI) - result) * -1).toFixed(4));
  }

  return Number(result.toFixed(4));
};

// returns a signed difference between the given angles
export const getRelativeAngleDifference = (target: number, current: number) => (
  // ((target - current + (360 + 180)) % 360) - 180
  ((target - current + ((Math.PI * 2) + Math.PI)) % (Math.PI * 2)) - Math.PI
);

export const map = (number: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

export const numberInRange = (value: number, min: number, max: number) => {
  return value >= min && value <= max;
};

// converts a number to an array of bytes for serial communication
export const numberToByteArray = (number: number, numBytes: number) => {
  const byteArray = new Array(numBytes);
  let numberCopy = number;

  for (let i = byteArray.length - 1; i >= 0; i -= 1) {
    const byte = numberCopy & 0xff;

    byteArray[i] = byte;
    numberCopy = (numberCopy - byte) / 256;
  }

  return byteArray;
};

export const numberToHex = (value: number) => {
  return `0x${(`00${value.toString(16)}`).substr(-2).toUpperCase()}`;
};

export const parseDecToBinary = (dec: number) => {
  return (`000000000${dec.toString(2)}`).substr(-8);
};

export const speedToTickSpeed = (speed: number, distancePerTick: number, loopTime: number) => {
  const ticksPerSecond = speed / distancePerTick;
  const ticksPerLoopTime = ticksPerSecond / (1000 / loopTime);

  return ticksPerLoopTime;
};

export const tickSpeedToSpeed = (tickSpeed: number, distancePerTick: number, loopTime: number) => {
  const ticksPerSecond = tickSpeed * (1000 / loopTime);
  const speedPerSecond = ticksPerSecond * distancePerTick;

  return speedPerSecond;
};