
import { Database, ILogger } from '@customTypes';
import '../utils/loggers';
import { ConsoleLogger, MongoDBLogger } from '../utils/loggers';


    
export class LoggerFactory {

    private static instance: LoggerFactory;
    private constructor() { }

    public static getInstance(): LoggerFactory {
        if (!LoggerFactory.instance) {
            LoggerFactory.instance = new LoggerFactory();
        }

        return LoggerFactory.instance;
    }
    public Logger(tag:string, logtype:string): ILogger {
        
        switch (logtype)
        {
        case "Console":
            
            return new ConsoleLogger(tag);

        case "Mongo":
            
            return new MongoDBLogger(tag);
        
        default:
            //NullLogger for best practice?
            return new ConsoleLogger(tag);
        }

    }
}
