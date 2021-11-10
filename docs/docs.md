# WIP


### Commands

### Events

### Repositories





### Logging

##### Example code
'import { format } from 'util';
import {LoggerFactory} from '../factories/_loggerfactory';
import {ILogger} from '../types/types';

const _loggerFactory = LoggerFactory.getInstance();

//outside of a class:
const logger = _loggerFactory.Logger('OptionBuilder',format(process.env.LoggerType));

//inside of a class:
private logger:ILogger;
constructor()
{
    
this.logger = _loggerFactory.Logger('OptionBuilder',format(process.env.LoggerType));
}'

