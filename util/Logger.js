const winston = require('winston');
const chalk = require('chalk');

const createFormat = function(tag) {
  return winston.format.printf((info) => {
    let level = info.level.toUpperCase() + ': ';
    let message = info.obj ? JSON.stringify(info.obj) : info.message;
    switch (info.level.toLowerCase()) {
      case 'error':
        level = chalk.red(level);
        message = chalk.red(message);
        break;
      case 'warn':
        level = chalk.yellow(level);
        message = chalk.yellow(message);
        break;
      case 'info':
        level = '';
        break;
      case 'debug':
        break;
    }
    const timestamp = chalk.green(getDate());
    const label = chalk.blue(tag);
  
    return `(${timestamp})[${label}]${level}${message}`;
  })
}

function getDate() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const time = date.toLocaleTimeString('en-US', { hour12: false, hour:'2-digit', minute:'2-digit' });
  return `${month}/${day}|${time}`
}

class Logger {
  constructor(tag) {
    this.logger = winston.createLogger({
      format: createFormat(tag),
      transports: [new winston.transports.Console()]
    })
  }
  
  log(message) {
    this.logger.info(message);
  }
  error(message) {
    this.logger.error(message);
  }
  warn(message) {
    this.logger.warn(message);
  }
}

module.exports = Logger;