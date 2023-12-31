/// <reference types="node" />
import EventEmitter from 'events';

interface Point {
    x: number;
    y: number;
}
interface Pose extends Point {
    phi: number;
}
interface Lidar {
    on: Function;
    off: Function;
}
interface LidarMeasurement {
    angle: number;
    distance: number;
    quality: number;
}

declare const constrain: (value: number, min: number, max: number) => number;
declare const deg2rad: (deg: number) => number;
declare const rad2deg: (rad: number) => number;
declare const calculateAngleBetweenCoordinates: (p1: Point, p2: Point) => number;
declare const calculateDistance: (p1: Point, p2: Point) => number;
declare const fixedDecimals: (value: number, numDecimals: number) => number;
declare const getHeadingFromPoseToCoordinate: (pose: Pose, targetCoordinate: Point) => number;
declare const getRelativeAngleDifference: (target: number, current: number) => number;
declare const map: (number: number, inMin: number, inMax: number, outMin: number, outMax: number) => number;
declare const numberInRange: (value: number, min: number, max: number) => boolean;
declare const numberToByteArray: (number: number, numBytes: number) => any[];
declare const numberToHex: (value: number) => string;
declare const parseDecToBinary: (dec: number) => string;
declare const speedToTickSpeed: (speed: number, distancePerTick: number, loopTime: number) => number;
declare const tickSpeedToSpeed: (tickSpeed: number, distancePerTick: number, loopTime: number) => number;

declare const math_d_calculateAngleBetweenCoordinates: typeof calculateAngleBetweenCoordinates;
declare const math_d_calculateDistance: typeof calculateDistance;
declare const math_d_constrain: typeof constrain;
declare const math_d_deg2rad: typeof deg2rad;
declare const math_d_fixedDecimals: typeof fixedDecimals;
declare const math_d_getHeadingFromPoseToCoordinate: typeof getHeadingFromPoseToCoordinate;
declare const math_d_getRelativeAngleDifference: typeof getRelativeAngleDifference;
declare const math_d_map: typeof map;
declare const math_d_numberInRange: typeof numberInRange;
declare const math_d_numberToByteArray: typeof numberToByteArray;
declare const math_d_numberToHex: typeof numberToHex;
declare const math_d_parseDecToBinary: typeof parseDecToBinary;
declare const math_d_rad2deg: typeof rad2deg;
declare const math_d_speedToTickSpeed: typeof speedToTickSpeed;
declare const math_d_tickSpeedToSpeed: typeof tickSpeedToSpeed;
declare namespace math_d {
  export { math_d_calculateAngleBetweenCoordinates as calculateAngleBetweenCoordinates, math_d_calculateDistance as calculateDistance, math_d_constrain as constrain, math_d_deg2rad as deg2rad, math_d_fixedDecimals as fixedDecimals, math_d_getHeadingFromPoseToCoordinate as getHeadingFromPoseToCoordinate, math_d_getRelativeAngleDifference as getRelativeAngleDifference, math_d_map as map, math_d_numberInRange as numberInRange, math_d_numberToByteArray as numberToByteArray, math_d_numberToHex as numberToHex, math_d_parseDecToBinary as parseDecToBinary, math_d_rad2deg as rad2deg, math_d_speedToTickSpeed as speedToTickSpeed, math_d_tickSpeedToSpeed as tickSpeedToSpeed };
}

declare const getLongestDistance: (measurements: Array<LidarMeasurement>) => LidarMeasurement;
declare const getShortestDistance: (measurements: Array<LidarMeasurement>) => LidarMeasurement;
declare const isWithinDistance: (lidar: Lidar, allowedDistance: number, checkAngle: number) => Promise<void>;
declare const normalizeAngle: (angle: number) => number;

declare const lidar_d_getLongestDistance: typeof getLongestDistance;
declare const lidar_d_getShortestDistance: typeof getShortestDistance;
declare const lidar_d_isWithinDistance: typeof isWithinDistance;
declare const lidar_d_normalizeAngle: typeof normalizeAngle;
declare namespace lidar_d {
  export { lidar_d_getLongestDistance as getLongestDistance, lidar_d_getShortestDistance as getShortestDistance, lidar_d_isWithinDistance as isWithinDistance, lidar_d_normalizeAngle as normalizeAngle };
}

declare const countdown: (count: number) => {
    start: () => Promise<void>;
    on: (eventName: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
    off: (eventName: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
};
declare const pause: (duration?: number) => Promise<unknown>;

declare const utils_d_countdown: typeof countdown;
declare const utils_d_pause: typeof pause;
declare namespace utils_d {
  export { utils_d_countdown as countdown, utils_d_pause as pause };
}

interface Socket {
    emit: Function;
}
declare const _default: (socket: Socket) => Readonly<{
    log: (message: string) => void;
    success: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
    create: (program: string) => void;
    event: (message: string) => void;
    data: (data: Object, dataType: string) => void;
    save: (saveDir: string) => Promise<void>;
}>;

declare namespace logger_d {
  export { _default as default };
}

export { lidar_d as lidar, logger_d as logger, math_d as math, utils_d as utils };
