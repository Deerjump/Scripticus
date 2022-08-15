import { EventHandler } from '@customTypes';
import { Guild } from 'discord.js';

const eventHandler: EventHandler = {
  event: 'guildDelete',
  handle: function (guild: Guild): void {
    console.log(`Left guild: "${guild.name}"`);
  },
};

export = eventHandler;
