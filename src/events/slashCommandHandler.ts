import { EventHandler, Scripticus } from '@customTypes';
import { Interaction } from 'discord.js';

import { format } from 'util';
import {LoggerFactory} from '../factories/_loggerfactory';
import {ILogger} from '../types/types';

const _loggerFactory = LoggerFactory.getInstance();
const logger = _loggerFactory.Logger('SlashCommandHandler',format(process.env.LoggerType));
const eventHandler: EventHandler = {
  event: 'interactionCreate',
  async handle(interaction: Interaction) {
    if (!interaction.isCommand()) return;
    const client = interaction.client as Scripticus;
    const command = client.commands.get(interaction.commandName);

    if (command == undefined) return;

    try {
      await command.handleInteract(interaction);
    } catch (error) {
      logger.Error(error);
      await interaction.reply({
        content: 'There was an error while executing this command!',
        ephemeral: true,
      });
    }
  },
};

export = eventHandler;
