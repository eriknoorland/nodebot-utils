import EventEmitter from 'events';
// import { getAngleDistance } from './lidar';

export const countdown = (count: number) => {
  const eventEmitter = new EventEmitter();

  function start(): Promise<void> {
    let remainingCount = count;

    eventEmitter.emit('count', remainingCount / 1000);

    return new Promise((resolve) => {
      const interval = setInterval(() => {
        remainingCount -= 1000;
        eventEmitter.emit('count', remainingCount / 1000);

        if (remainingCount <= 0) {
          clearInterval(interval);
          resolve();
        }
      }, 1000);
    });
  }

  return {
    start,
    on: eventEmitter.on.bind(eventEmitter),
    off: eventEmitter.off.bind(eventEmitter),
  };
};

// export const debounce = (func: Function, wait: number, immediate: boolean) => {
//   let timeout: ReturnType<typeof setTimeout> | null;

//   return (...args: Array<any>) => {
//     const context = this;

//     const later = () => {
//       timeout = null;

//       if (!immediate) {
//         func.apply(context, args);
//       }
//     };

//     const callNow = immediate && !timeout;

//     if (timeout) {
//       clearTimeout(timeout);
//     }
    
//     timeout = setTimeout(later, wait);

//     if (callNow) {
//       func.apply(context, args);
//     }
//   };
// };

// export const getInitialPosition = (lidarData) => new Promise((resolve) => {
//   const x = getAngleDistance(lidarData, 180);
//   const y = getAngleDistance(lidarData, 270);

//   resolve({ x, y });
// });

export const pause = (duration = 1000) => new Promise(resolve => {
  setTimeout(resolve, duration);
});