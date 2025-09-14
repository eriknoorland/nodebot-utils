export type TSerialDataStartFlags = [number, number]

export type TSerialMetaData = {
  startFlags: TSerialDataStartFlags,
  command: number,
  dataLength: number,
}

export type TSerialDataPacket = number[]

export type TSerialDataPacketCallback = (metaData: TSerialMetaData, dataPacket: TSerialDataPacket) => void

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