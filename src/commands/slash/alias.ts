import aliasRepository from '../../repositories/aliasRepository';
import { hidden } from '../../utils/utils';
import { SlashCommand } from '../commandClasses';
import {
  ButtonInteraction,
  ChatInputCommandInteraction,
  InteractionCollector,
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  TextBasedChannel,
  ButtonStyle,
  ComponentType
} from 'discord.js';
import { InteractionFilter } from '@customTypes';

class AliasCommand extends SlashCommand {
  readonly usage = '<item or monster name>';
  readonly args = true;
  private readonly pageSize = 10;
  private readonly COLLECTOR_TIMEOUT = 60000;
  private readonly COLLECTOR_FILTER = (i: ButtonInteraction) =>
    i.customId === 'aliasPrevPage' || i.customId === 'aliasNextPage';
  constructor() {
    super('alias', 'Find all the accepted aliases for a monster or item!');
    this.commandBuilder
      .addStringOption((option) =>
        option
          .setName('target')
          .setDescription('What you want to view aliases for')
          .setRequired(true)
      )
      .addBooleanOption(hidden);
  }

  private createButtonCollector(
    channel: TextBasedChannel,
    filter: InteractionFilter<ButtonInteraction>,
    time = this.COLLECTOR_TIMEOUT
  ) {
    return channel.createMessageComponentCollector({
      filter: (i) => filter(i) && this.COLLECTOR_FILTER(i),
      componentType: ComponentType.Button,
      time,
    });
  }

  async handleInteract(interaction: ChatInputCommandInteraction) {
    const hidden = interaction.options.getBoolean('hidden') ?? true;
    await interaction.deferReply({ ephemeral: hidden });
    const target = interaction.options.getString('target', true);

    const collector = this.createButtonCollector(
      interaction.channel!,
      (i) => i.message.interaction?.id == interaction.id
    );

    collector.on('end', async () => {
      await interaction.editReply({ components: [] });
    });

    const response = await this.execute(target, interaction.user.id, collector);

    await interaction.followUp(response);
  }

  async execute(
    target: string,
    authorId: string,
    collector: InteractionCollector<ButtonInteraction>
  ) {
    const aliases = aliasRepository
      .getAliases(target)
      .filter((alias) => alias.toLowerCase() !== target);

    const title = `Aliases for ${target}`;
    const aliasEmbed = this.getAliasEmbed(title, aliases);

    let currentIndex = 0;
    collector.on('collect', (interaction) => {
      if (interaction.user.id !== authorId) {
        interaction.reply({
          content: "❌ You cannot interact with someone else's command!",
          ephemeral: true,
        });
        return;
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

    if (aliasEmbed.components?.length === 0) {
      collector.stop();
    }
    return aliasEmbed;
  }

  private getAliasEmbed(target: string, aliases: string[], start = 0, size = 10) {
    if (aliases.length === 0) {
      return {
        content: `No aliases found for ${target}`,
      };
    }

    const pageMax = start + size;
    const embed = new EmbedBuilder();
    const title = `Aliases for ${target}`;
    embed.setTitle(title);
    embed.addFields([
      {
        name: `${start} to ${aliases.length < pageMax ? aliases.length : pageMax} of ${
          aliases.length
        }`,
        value: aliases.slice(start, start + size).join(', '),
      },
    ]);

    const row = new ActionRowBuilder<ButtonBuilder>();
    const isStart = start === 0;
    const backBtn = new ButtonBuilder()
      .setCustomId('aliasPrevPage')
      .setLabel('◄')
      .setStyle(isStart ? ButtonStyle.Secondary : ButtonStyle.Primary)
      .setDisabled(isStart);

    const isEnd = aliases.length <= pageMax;
    const nextBtn = new ButtonBuilder()
      .setCustomId('aliasNextPage')
      .setLabel('►')
      .setStyle(isEnd ? ButtonStyle.Secondary : ButtonStyle.Primary)
      .setDisabled(isEnd);
    row.addComponents(backBtn, nextBtn);

    return {
      embeds: [embed],
      components: [row],
    };
  }
}

export const command = AliasCommand;
