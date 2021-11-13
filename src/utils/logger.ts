import chalk from 'chalk';
import { DatabaseDriver } from '../database/mongo';
import { ILogger, Database } from '@customTypes';
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

abstract class Logger implements ILogger {
  constructor(private tag: string) {}

  abstract error(message: any): void;
  abstract warn(message: any): void;
  abstract log(message: any): void;

  protected getPrefix(): string {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const time = date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
    const dateString = `${month}/${day}|${time}`;

    return `${chalk.green(dateString)}[${chalk.blue(this.tag)}]`;
  }
}

export class ConsoleLogger extends Logger {
  log(message: any) {
    console.log(this.getPrefix(), message);
  }
  error(message: any) {
    console.error(this.getPrefix(), message);
  }
  warn(message: any) {
    console.warn(this.getPrefix(), message);
  }
}

export class MongoDBLogger extends Logger {
  private db: Database = new DatabaseDriver(process.env.DATABASE_URL!);

  async log(message: any) {
    console.log('Attempted Log made');
    await this.db.connectToDatabase(); //Can this be run once in the constructor?
    await this.db.LogToDatabase('Log', new Date(), message);
  }
  async error(message: any) {
    await this.db.connectToDatabase();
    await this.db.LogToDatabase('Error', new Date(), message);
  }
  async warn(message: any) {
    await this.db.connectToDatabase();
    await this.db.LogToDatabase('Warn', new Date(), message);
  }
}
