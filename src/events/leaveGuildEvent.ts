import { EventHandler } from '@customTypes';
import { Guild } from 'discord.js';
import { LoggerFactory } from '../factories/_loggerfactory';

const _loggerFactory = LoggerFactory.getInstance();
const logger = _loggerFactory.Logger('LeaveGuild', process.env.LOGGER_TYPE!);
const eventHandler: EventHandler = {
  event: 'guildDelete',
  handle: function (guild: Guild): void {
    logger.log(`Left guild: "${guild.name}"`);
  },
};

export = eventHandler;
