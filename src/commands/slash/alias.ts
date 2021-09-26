import { OptionBuilder } from '../../utils/builders/optionBuilder';
import aliasRepository from '../../repositories/aliasRepository';
import { hidden, noMentions } from '../../utils/utils';
import { SlashCommand } from '../commandClasses';
import {
  ApplicationCommandOptionData,
  CommandInteraction,
  Message,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  TextBasedChannels,
} from 'discord.js';

class AliasCommand extends SlashCommand {
  readonly usage = '<item or monster name>';
  readonly args = true;
  private readonly pageSize = 10;

  constructor() {
    super('alias', 'Find all the accepted aliases for a monster or item!');
  }

  protected get options(): ApplicationCommandOptionData[] {
    return [
      new OptionBuilder('target', 'STRING')
        .withDescription('What you want to view aliases for')
        .require()
        .build(),
      hidden,
    ];
  }

  async handleMessage(message: Message, args: string[]): Promise<void> {
    const target = args.join(' ').toLowerCase();
    const { response, collector } = await this.execute(target, message.author.id, message.channel);
    
    collector.on('end', async () => {
      await message.edit({ components: [] });
    })
    await message.reply({ ...response, ...noMentions });
  }

  async handleInteract(interaction: CommandInteraction) {
    const hidden = interaction.options.getBoolean('hidden') ?? true;
    await interaction.deferReply({ ephemeral: hidden });
    const target = interaction.options.getString('target', true);
    const { response, collector } = await this.execute(
      target,
      interaction.user.id,
      interaction.channel!
    );

    await interaction.followUp(response);

    collector.on('end', async () => {
      await interaction.editReply({ components: [] });
    });
  }

  async execute(target: string, authorId: string, channel: TextBasedChannels) {
    const aliases = aliasRepository
      .getAliases(target)
      .filter((alias) => alias.toLowerCase() !== target);

    const title = `Aliases for ${target}`;
    const aliasEmbed = this.getAliasEmbed(title, aliases);

    const collector = channel.createMessageComponentCollector({
      filter: (i) => i.customId === 'aliasPrevPage' || i.customId === 'aliasNextPage',
      componentType: 'BUTTON',
      time: 60000,
    });

    
    let currentIndex = 0;
    collector.on('collect', (interaction) => {
      if (interaction.user.id !== authorId) {
        return interaction.reply({
          content: "❌ You cannot interact with someone else's command!",
          ephemeral: true,
        });
      }

      switch (interaction.customId) {
        case 'aliasPrevPage': {
          currentIndex -= this.pageSize;
          break;
        }
        case 'aliasNextPage': {
          currentIndex += this.pageSize;
          break;
        }
      }

      interaction.update(this.getAliasEmbed(title, aliases, currentIndex));
    });

    return { response: aliasEmbed, collector };
  }

  private getAliasEmbed(
    target: string,
    aliases: string[],
    start = 0,
    size = 10
  ) {
    if (aliases.length === 0) {
      return {
        content: `No aliases found for ${target}`,
      };
    }

    const pageMax = start + size;
    const embed = new MessageEmbed();
    const title = `Aliases for ${target}`;
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
      .setCustomId('aliasPrevPage')
      .setLabel('◄')
      .setStyle(isStart ? 'SECONDARY' : 'PRIMARY')
      .setDisabled(isStart);

    const isEnd = aliases.length <= pageMax;
    const nextBtn = new MessageButton()
      .setCustomId('aliasNextPage')
      .setLabel('►')
      .setStyle(isEnd ? 'SECONDARY' : 'PRIMARY')
      .setDisabled(isEnd);
    row.addComponents(backBtn, nextBtn);

    return {
      embeds: [embed],
      components: [row]
    };
  }
}

export const command = AliasCommand;
