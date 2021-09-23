import { Command, Scripticus } from '@customTypes';
import { Message } from 'discord.js';
import { noMentions } from '../utils/utils';
import { Logger } from '../utils/logger';


class PrefixCommand implements Command {
  public readonly name = 'prefix';
  public readonly description = 'Changes prefix for current server';
  public readonly args = true;
  public readonly usage = '<new prefix>';
  private readonly logger: Logger;

  constructor() {
    this.logger = new Logger('Prefix');
  }

  public async execute(message: Message, args: string[]) {
    const whitelist = ['90598254688874496', '191085842469486592'];
    if (!whitelist.includes(message.author.id)) {
      return message.reply({
        content: 'You cannot use this command!',
        ...noMentions,
      });
    }

    if (message.channel.type === 'DM') {
      return message.reply({
        content: "You can't use this command in a private message!",
        ...noMentions,
      });
    }

    const newPrefix = args[0];
    const guildID = message.guildId!;
    const client = message.client as Scripticus;

    try {
      await client.updateGuildPrefix(guildID, newPrefix);

      message.reply({
        content: `Prefix is now sent to ${newPrefix}`,
        ...noMentions,
      });
    } catch (err) {
      this.logger.log(err);
    }
  }
}

export const command = new PrefixCommand();
