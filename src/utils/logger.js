const fs = require('fs');

const colors = {
  reset: { cmd: '\x1b[0m%s\x1b[0m', html: '#fff' },
  green: { cmd: '\x1b[32m%s\x1b[0m', html: '#0f0' },
  red: { cmd: '\x1b[31m%s\x1b[0m', html: '#f00' },
  yellow: { cmd: '\x1b[33m%s\x1b[0m', html: '#ff0' },
  blue: { cmd: '\x1b[34m%s\x1b[0m', html: '#00f' },
  magenta: { cmd: '\x1b[35m%s\x1b[0m', html: '#f0f' },
  cyan: { cmd: '\x1b[36m%s\x1b[0m', html: '#0ff' },
  white: { cmd: '\x1b[37m%s\x1b[0m', html: '#fff' },
};

/**
 * Logger
 * @param {Object} socket
 * @return {Object}
 */
module.exports = (socket) => {
  const logs = [];
  let dataLog = {};

  /**
   * Log
   * @param {String} body
   * @param {String} resource
   * @param {String} color
   */
  function log(body, resource = 'app', color = 'reset') {
    const message = `[${resource}] ${body}`;

    logs.push(`<span style="color: ${colors[color].html};">${message}</span>`);
    socket.emit('log', logs.join(','));

    console.log(colors[color].cmd, message);
  }

  function create(program) {
    const now = new Date();
    const year = now.getFullYear();
    const month = `0${now.getMonth() + 1}`.slice(-2);
    const day = `0${now.getDate()}`.slice(-2);
    const timestamp = `${year}-${month}-${day}`;

    dataLog = {
      timestamp: getTimestamp(),
      program,
      entries: [],
    };
  }

  function event(message) {
    dataLog.entries.push({
      type: 'event',
      timestamp: getTimestamp(),
      value: message,
    });
  }

  function data(data, dataType) {
    dataLog.entries.push({
      type: 'data',
      dataType,
      timestamp: getTimestamp(),
      value: data,
    });
  }

  function save(saveDir) {
    return new Promise(resolve => {
      const programName = dataLog.program.toLowerCase().split(' ').join('-');
      const fileName = `${getTimestamp()}_${programName}.json`;
      const path = `${saveDir}/${fileName}`;
      const data = JSON.stringify(dataLog);

      fs.writeFile(path, data, 'utf8', () => {
        dataLog = {};
        resolve();
      });
    });
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
    create,
    event,
    data,
    save,
  };
};
