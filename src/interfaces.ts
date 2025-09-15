export type SerialDataStartFlags = [number, number]

export type SerialMetaData = {
  startFlags: SerialDataStartFlags,
  command: number,
  dataLength: number,
}

export type SerialDataPacket = number[]

export type SerialDataPacketCallback = (metaData: SerialMetaData, dataPacket: SerialDataPacket) => void

export interface Point {
  x: number;
  y: number;
}

export interface Pose extends Point {
  phi: number;
}

// FIXME get this from lidar package?
// export interface Lidar {
//   on: Function;
//   off: Function;
// }

// FIXME get this from lidar package?
export interface LidarMeasurement {
  angle: number;
  distance: number;
  quality: number;
}