import { Command } from '@customTypes';
import {
  Message,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
} from 'discord.js';
import { noMentions } from '../utils/utils';
import aliasRepository from '../repositories/aliasRepository';

class AliasCommand implements Command {
  public readonly name = 'alias';
  public readonly description =
    'Find all the accepted aliases for a monster or item!';
  public readonly usage = '<item or monster name>';
  public readonly args = true;

  public async execute(message: Message, args: string[]) {
    const lowerCaseArgs = args.join(' ').toLowerCase();
    const pageSize = 10;

    const aliases = aliasRepository
      .getAliases(lowerCaseArgs)
      .filter((alias) => alias.toLowerCase() !== lowerCaseArgs);

    if (aliases.length === 0) {
      return message.reply({
        content: `No aliases found for ${lowerCaseArgs}`,
        ...noMentions
      });
    }

    const title = `Aliases for ${lowerCaseArgs}`;
    const sentMsg = await message.reply(this.getAliasEmbed(title, aliases));

    const collector = sentMsg.createMessageComponentCollector({
      filter: (i) => i.customId === 'prevPage' || i.customId === 'nextPage',
      componentType: 'BUTTON',
      time: 60000,
    });

    let currentIndex = 0;
    collector.on('collect', (interaction) => {
      if (interaction.user.id !== message.author.id) {
        return interaction.reply({
          content: "❌ You cannot interact with someone else's command!",
          ephemeral: true,
        });
      }

      switch (interaction.customId) {
        case 'prevPage': {
          currentIndex -= pageSize;
          break;
        }
        case 'nextPage': {
          currentIndex += pageSize;
          break;
        }
      }

      interaction.update(this.getAliasEmbed(title, aliases, currentIndex));
    });

    collector.on('end', () => {
      const expiredEmbed = new MessageEmbed()
        .setTitle(sentMsg.embeds[0].title!)
        .addFields(sentMsg.embeds[0].fields)
        .setFooter('❌Timed out');
      sentMsg.edit({ embeds: [expiredEmbed], components: [] });
    });
  }

  private getAliasEmbed(
    title: string,
    aliases: string[],
    start = 0,
    size = 10
  ) {
    const pageMax = start + size;
    const embed = new MessageEmbed();

    embed.setTitle(title);
    embed.addFields([
      {
        name: `${start} to ${
          aliases.length < pageMax ? aliases.length : pageMax
        } of ${aliases.length}`,
        value: aliases.slice(start, start + size).join(', '),
      },
    ]);

    const row = new MessageActionRow();
    const isStart = start === 0;
    const backBtn = new MessageButton()
      .setCustomId('prevPage')
      .setLabel('◄')
      .setStyle(isStart ? 'SECONDARY' : 'PRIMARY')
      .setDisabled(isStart);

    const isEnd = aliases.length <= pageMax;
    const nextBtn = new MessageButton()
      .setCustomId('nextPage')
      .setLabel('►')
      .setStyle(isEnd ? 'SECONDARY' : 'PRIMARY')
      .setDisabled(isEnd);
    row.addComponents(backBtn, nextBtn);

    return {
      embeds: [embed],
      components: [row],
      ...noMentions,
      fetchReply: true,
    };
  }
}

export const command = new AliasCommand();
