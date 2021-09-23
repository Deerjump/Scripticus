import { Command } from '@customTypes';
import { Message, MessageEmbed } from 'discord.js';
import { Logger } from '../utils/logger';
import fetch from 'node-fetch';
import { noMentions } from '../utils/utils';

class WikiCommand implements Command {
  public readonly name = 'wiki';
  public readonly description = 'Seach the Legends of Idleon Wiki!';
  public readonly usage = '<search word>';
  private readonly wikiUrl = 'https://idleon.info/';
  private readonly logger: Logger;

  constructor() {
    this.logger = new Logger('Wiki');
  }

  public async execute(message: Message, args: string[]) {
    if (!args.length) {
      return message.reply({
        embeds: [
          new MessageEmbed()
            .setColor('#FF0000')
            .setTitle(this.wikiUrl)
            .setURL(this.wikiUrl)
            .addField(
              'You could also:',
              'Supply a search term!\n!wiki Mafioso'
            ),
        ],
        ...noMentions,
      });
    }

    try {
      const query = new URLSearchParams({ search: args.join(' ') });
      const res = await fetch(
        `https://idleon.info/w/index.php?${query.toString()}`
      );
      await message.reply({ content: res.url, ...noMentions });
    } catch (err) {
      this.logger.error(err);
    }
  }
}

export const command = new WikiCommand();