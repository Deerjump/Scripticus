import { EventHandler } from '@customTypes';
import { Message } from 'discord.js';

const eventHandler: EventHandler = {
  event: 'messageCreate',
  handle: (message: Message) => {},
};

export = eventHandler;
