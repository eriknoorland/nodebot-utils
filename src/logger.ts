import fs from 'fs';

interface Socket {
  emit: Function;
};

interface MissionLog {
  timestamp: string;
  program: string
  entries: Array<MissionLogEntry>;
};

interface MissionLogEntry {
  type: string;
  timestamp: string;
  value: Object;
  dataType?: string;
};

interface Color {
  cmd: string;
  html: string;
};

const colors = {
  log: { cmd: '\x1b[37m%s\x1b[0m', html: '#fff' },
  info: { cmd: '\x1b[36m%s\x1b[0m', html: '#0ff' },
  success: { cmd: '\x1b[32m%s\x1b[0m', html: '#0f0' },
  warning: { cmd: '\x1b[33m%s\x1b[0m', html: '#ff0' },
  error: { cmd: '\x1b[31m%s\x1b[0m', html: '#f00' },
};

export const logger = (socket: Socket) => {
  const logs: string[] = [];
  let missionLog: MissionLog | null = null;

  function log(message: string) {
    emit(message, colors.log);
  }

  function success(message: string) {
    emit(message, colors.success);
  }

  function info(message: string) {
    emit(message, colors.info);
  }

  function warn(message: string) {
    emit(message, colors.warning);
  }

  function error(message: string) {
    emit(message, colors.error);
  }

  function create(program: string) {
    missionLog = {
      timestamp: getTimestamp(),
      program,
      entries: [],
    };
  }

  function event(message: string) {
    if (missionLog) {
      missionLog.entries.push({
        type: 'event',
        timestamp: getTimestamp(),
        value: message,
      });
    }
  }

  function data(data: Object, dataType: string) {
    if (missionLog) {
      missionLog.entries.push({
        type: 'data',
        dataType,
        timestamp: getTimestamp(),
        value: data,
      });
    }
  }

  function save(saveDir: string): Promise<void> {
    if (!missionLog) {
      return Promise.resolve();
    }

    return new Promise(resolve => {
      const programName = missionLog?.program.toLowerCase().split(' ').join('-');
      const fileName = `${getTimestamp()}_${programName}.json`;
      const path = `${saveDir}/${fileName}`;
      const data = JSON.stringify(missionLog);

      fs.writeFile(path, data, 'utf8', () => {
        missionLog = null;
        resolve();
      });
    });
  }

  function emit(message: string, color: Color) {
    logs.push(`<span style="color: ${color.html};">${message}</span>`);

    socket.emit('log', logs.join(','));
    console.log(color.cmd, message);
  }

  function getTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = `0${now.getMonth() + 1}`.slice(-2);
    const day = `0${now.getDate()}`.slice(-2);
    const hours = `0${now.getHours()}`.slice(-2);
    const minutes = `0${now.getMinutes()}`.slice(-2);
    const seconds = `0${now.getSeconds()}`.slice(-2);

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  return Object.freeze({
    log,
    success,
    info,
    warn,
    error,
    create,
    event,
    data,
    save,
  });
};
