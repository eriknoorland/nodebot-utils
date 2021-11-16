const fs = require('fs');

const colors = {
  log: { cmd: '\x1b[37m%s\x1b[0m', html: '#fff' },
  info: { cmd: '\x1b[36m%s\x1b[0m', html: '#0ff' },
  success: { cmd: '\x1b[32m%s\x1b[0m', html: '#0f0' },
  warning: { cmd: '\x1b[33m%s\x1b[0m', html: '#ff0' },
  error: { cmd: '\x1b[31m%s\x1b[0m', html: '#f00' },
};

/**
 * Logger
 * @param {Object} socket
 * @return {Object}
 */
module.exports = (socket) => {
  const logs = [];
  let missionLog = null;

  /**
   * Logs a message
   * @param {String} message
   */
  function log(message) {
    emit(message, colors.log);
  }

  /**
   * Logs a success message
   * @param {String} message
   */
  function success(message) {
    emit(message, colors.success);
  }

  /**
   * Logs an info message
   * @param {String} message
   */
  function info(message) {
    emit(message, colors.info);
  }

  /**
   * Logs a warning
   * @param {String} message
   */
  function warn(message) {
    emit(message, colors.warning);
  }

  /**
   * Logs an error
   * @param {String} message
   */
  function error(message) {
    emit(message, colors.error);
  }

  /**
   * Creates a new log object
   * @param {String} program
   */
  function create(program) {
    missionLog = {
      timestamp: getTimestamp(),
      program,
      entries: [],
    };
  }

  /**
   * Writes an event string to the log
   * @param {String} message
   */
  function event(message) {
    if (missionLog) {
      missionLog.entries.push({
        type: 'event',
        timestamp: getTimestamp(),
        value: message,
      });
    }
  }

  /**
   * Writes a data object to the log
   * @param {Object} data
   * @param {String} dataType
   */
  function data(data, dataType) {
    if (missionLog) {
      missionLog.entries.push({
        type: 'data',
        dataType,
        timestamp: getTimestamp(),
        value: data,
      });
    }
  }

  /**
   * Stores the log file at the given location
   * @param {String} saveDir
   * @returns
   */
  function save(saveDir) {
    if (!missionLog) {
      return Promise.resolve();
    }

    return new Promise(resolve => {
      const programName = missionLog.program.toLowerCase().split(' ').join('-');
      const fileName = `${getTimestamp()}_${programName}.json`;
      const path = `${saveDir}/${fileName}`;
      const data = JSON.stringify(missionLog);

      fs.writeFile(path, data, 'utf8', () => {
        missionLog = null;
        resolve();
      });
    });
  }

  function emit(message, color) {
    logs.push(`
      <span style="color: ${color.html};">
        ${message}
      </span>
    `);

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

  return {
    log,
    success,
    info,
    warn,
    error,
    create,
    event,
    data,
    save,
  };
};
