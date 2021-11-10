import { EventHandler } from "@customTypes";
import { Guild } from "discord.js";
import { format } from 'util';
import {LoggerFactory} from '../factories/_loggerfactory';
import {ILogger} from '../types/types';

const _loggerFactory = LoggerFactory.getInstance();
const logger = _loggerFactory.Logger('LeaveGuild',format(process.env.LOGGER_TYPE));
const eventHandler: EventHandler = {
  event: 'guildDelete',
  handle: function (guild: Guild): void {
    logger.Log(`Left guild: "${guild.name}"`);
  }
}

export = eventHandler;