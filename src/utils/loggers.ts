import chalk from "chalk";

import { ILogger } from '../types/types';
// const createFormat = function(tag) {
//   return winston.format.printf((info) => {
//     let level = info.level.toUpperCase() + ': ';
//     let message = info.obj ? JSON.stringify(info.obj) : info.message;
//     switch (info.level.toLowerCase()) {
//       case 'error':
//         level = chalk.red(level);
//         message = chalk.red(message);
//         break;
//       case 'warn':
//         level = chalk.yellow(level);
//         message = chalk.yellow(message);
//         break;
//       case 'info':
//         level = '';
//         break;
//       case 'debug':
//         break;
//     }
//     const timestamp = chalk.green(getDate());
//     const label = chalk.blue(tag);
  
//     return `${timestamp}[${label}]${level}${message}`;
//   })
// }

export class ConsoleLogger implements ILogger {
  tag: string;
  constructor(tag: string) {
    // TODO: fix the custom logger

    // this.logger = winston.createLogger({
    //   format: createFormat(tag),
    //   transports: [new winston.transports.Console()]
    // })
    this.tag = tag;
  }
  
  Log(message: any): void {
    // this.logger.info(message);
    console.log(this.GetPrefix(), message);
  }
  Error(message: any): void {
    // this.logger.error(message);
    console.error(this.GetPrefix(), message);
  }
  Warn(message: any): void {
    // this.logger.warn(message);
    console.warn(this.GetPrefix(), message);
  }
  GetPrefix(): string {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const time = date.toLocaleTimeString('en-US', { hour12: false, hour:'2-digit', minute:'2-digit' });
    const dateString = `${month}/${day}|${time}`;

    return `${chalk.green(dateString)}[${chalk.blue(this.tag)}]`
  }
}
  
  export class MongoDBLogger implements ILogger {
    tag: string;
    constructor(tag: string) {
      // TODO: fix the custom logger
  
      // this.logger = winston.createLogger({
      //   format: createFormat(tag),
      //   transports: [new winston.transports.Console()]
      // })
      this.tag = tag;
    }
    
    Log(message: any): void {
      // this.logger.info(message);
      console.log(this.GetPrefix(), message);
    }
    Error(message: any): void {
      // this.logger.error(message);
      console.error(this.GetPrefix(), message);
    }
    Warn(message: any): void {
      // this.logger.warn(message);
      console.warn(this.GetPrefix(), message);
    }
    GetPrefix(): string {
      const date = new Date();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const time = date.toLocaleTimeString('en-US', { hour12: false, hour:'2-digit', minute:'2-digit' });
      const dateString = `${month}/${day}|${time}`;
  
      return `${chalk.green(dateString)}[${chalk.blue(this.tag)}]`
    }
}
