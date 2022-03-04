import { EventHandler, Scripticus } from '@customTypes';
import { Collection, Message } from 'discord.js';
import { Logger } from '../utils/logger';
import { SlashCommand } from '../commands/commandClasses';


const eventHandler: EventHandler = {
  event: 'messageCreate',
  handle: (message: Message) => {}
};

export = eventHandler;
