export interface Point {
  x: number;
  y: number;
}

export interface Pose extends Point {
  phi: number;
}

export interface Lidar {
  on: Function;
  off: Function;
};

export interface LidarMeasurement {
  angle: number;
  distance: number;
  quality: number;
};