import { EventHandler, Scripticus } from '@customTypes';
import { Guild } from 'discord.js';

import { format } from 'util';
import {LoggerFactory} from '../factories/_loggerfactory';
import {ILogger} from '../types/types';

const _loggerFactory = LoggerFactory.getInstance();
const logger = _loggerFactory.Logger('GuildSetup',process.env.LOGGER_TYPE!);
const eventHandler: EventHandler = {
  // When the bot joins a guild
  event: 'guildCreate',
  once: true,
  async handle(guild: Guild) {
    const client = guild.client as Scripticus;
    const { commands } = client;
    
    

    logger.Log(`Joined ${guild.name}!`);
    logger.Log(`Configuring guild-specific commands...`);

    const owner = await guild.fetchOwner();
    const toRegister = await Promise.all(
      commands.filter((cmd) => !cmd.global).map(async (cmd) => await cmd.generateDetails(guild))
    );

    const registered = await guild.commands.set(toRegister);

    logger.Log(`Registered ${registered.size} guild command(s)`);

    for (const [name, command] of commands) {
      const { id } = registered.find((c) => c.name === name)!;
      if (command.roleRequired === 'ADMIN') {
        await guild.commands.permissions.add({
          command: id,
          permissions: [{ id: owner.id, type: 'USER', permission: true }],
        });
      }
    }

    try {
      owner.send({ content: client.joinMessage });
    } catch (err) {
      logger.Error(err);
      logger.Error(`Error sending DM to ${owner.user.username}`);
    }
  },
};

export = eventHandler;
