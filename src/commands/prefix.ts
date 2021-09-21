import { Command, Scripticus } from '@customTypes/types';
import { Message } from 'discord.js';
import { Logger } from '../utils/logger';
const logger = new Logger('Prefix');

class PrefixCommand implements Command {
  public readonly name = 'prefix';
  public readonly description = 'Changes prefix for current server';
  public readonly args = true;
  public readonly usage = '<new prefix>';

  public async execute(message: Message, args: string[]) {
    const whitelist = ['90598254688874496', '191085842469486592'];
    if (!whitelist.includes(message.author.id)) {
      message.reply({
        content: 'You cannot use this command!',
        allowedMentions: { users: [] },
      });
    }

    if (message.channel.type === 'DM') {
      return message.reply({
        content: "You can't use this command in a private message!",
        allowedMentions: { users: [] },
      });
    }

    const newPrefix = args[0];
    const guildID = message.guildId!;
    const client = message.client as Scripticus;

    try {
      await client.updateGuildPrefix(guildID, newPrefix);

      message.reply({
        content: `Prefix is now sent to ${newPrefix}`,
        allowedMentions: { users: [] },
      });
    } catch (err) {
      logger.log(err);
    }
  }
}

export const command = new PrefixCommand();
