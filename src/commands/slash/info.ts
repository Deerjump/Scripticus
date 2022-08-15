import monsterRepository from '../../repositories/monsterRepository';
import itemRepository from '../../repositories/itemRepository';
import { ItemData, MonsterData } from '@customTypes';
import { SlashCommand } from '../commandClasses';
import { hidden } from '../../utils/utils';
import { Logger } from '../../utils/logger';
import {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  TextBasedChannel,
  InteractionCollector,
  ButtonInteraction,
  InteractionReplyOptions,
  ChatInputCommandInteraction,
  ButtonStyle,
  ComponentType,
  APIEmbedField,
} from 'discord.js';

class InfoCommand extends SlashCommand {
  readonly name = 'info';
  readonly description = 'Find information on monsters or items!';
  readonly usage = '<item or monster name>';
  readonly args = true;
  private readonly logger = new Logger('Info');

  constructor() {
    super('info', 'Find information on monsters or items');
    this.commandBuilder
      .addStringOption((option) =>
        option
          .setName('name')
          .setDescription('The name you want information about')
          .setRequired(true)
      )
      .addBooleanOption(hidden);
  }

  async execute(
    searchTerm: string,
    authorId: string,
    channel: TextBasedChannel
  ): Promise<{
    response: InteractionReplyOptions;
    collector?: InteractionCollector<ButtonInteraction>;
  }> {
    const item = itemRepository.getItem(searchTerm);
    const monster = monsterRepository.getMonster(searchTerm);

    if (item != undefined && monster != undefined) {
      return await this.chooseOption(authorId, channel, item, monster);
    }

    if (item) {
      return {
        response: {
          embeds: [this.getItemDetailsEmbed(item)],
        },
      };
    }

    if (monster) {
      return {
        response: {
          embeds: [this.getMonsterDetailsEmbed(monster)],
        },
      };
    }

    if (!item && !monster) {
      return {
        response: {
          content: "That item/monster doesn't exist!",
        },
      };
    }

    return {
      response: { content: 'Something went wrong!' },
      collector: undefined,
    };
  }

  async handleInteract(interaction: ChatInputCommandInteraction) {
    const hidden = interaction.options.getBoolean('hidden') ?? true;
    await interaction.deferReply({ ephemeral: hidden });
    const name = interaction.options.getString('name', true);

    const { response, collector } = await this.execute(
      name,
      interaction.user.id,
      interaction.channel!
    );

    await interaction.followUp(response);

    if (collector == undefined) return;
    collector.on('end', async () => {
      await interaction.editReply({ components: [] });
    });
  }

  private getProwessReq(defense: number, level: number) {
    return defense * 10 * Math.pow(level, 1 / 0.25);
  }

  private parseAttackStat({ Damages, Attacks }: MonsterData) {
    if (!Attacks) return Damages;

    const values = Object.values(Attacks).map((val) => Number(val));
    return `${Math.min(...values)} - ${Math.max(...values)}`;
  }

  private parseRespawnTime({ RespawnTime }: MonsterData) {
    if (RespawnTime == '745000') return 'On Shop Reset';

    const time = Number(RespawnTime);

    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = Math.floor((time % 3600) % 60);
    const timeString = `${h}h ${m}m ${s}s`;
    return timeString;
  }

  private parseCurrency(amount: number) {
    const currencies = [];
    const imgs = ['🟤', '⚪', '🟡', '🔵', '🟣', '⚫', '🟢', '🟠', '🔴'];
    for (let i = 0; i < imgs.length; i++) {
      const currency = amount % 100;
      currencies.push(currency);
      amount -= currency;
      amount /= 100;
    }

    return currencies.reduceRight((prev, curr, i) => {
      const str = curr ? `${imgs[i]} ${curr} ` : '';
      return prev + str;
    }, '');
  }

  private getMonsterDetailsEmbed(monster: MonsterData) {
    const embed = new EmbedBuilder().setTitle(monster.Name);
    const defense = Number(monster.Defence);

    let fields: APIEmbedField[] = [];
    switch (monster.AFKtype) {
      case 'FIGHTING':
        fields.push(
          { name: '❤️ HP', value: monster.MonsterHPTotal, inline: true },
          {
            name: '🗡️ Attack',
            value: `\u200B${this.parseAttackStat(monster)}`,
            inline: true,
          },
          { name: '\u200B', value: '\u200B', inline: true },
          {
            name: '🎯 Accuracy for 5%',
            value: `${defense * 0.5}`,
            inline: true,
          },
          {
            name: '🎯 Accuracy for 100%',
            value: `${defense * 1.5}`,
            inline: true,
          },
          { name: '\u200B', value: '\u200B', inline: true },
          { name: '⭐ Base XP', value: monster.ExpGiven, inline: true }
        );
        if (monster.Attacks == undefined)
          fields.push(
            {
              name: '⚰️ Respawn Time',
              // For whatever reason, starting a field's value with a number causes following characters to not display at all. \u200B was added as a fix.
              value: `\u200B${this.parseRespawnTime(monster)}`,
              inline: true,
            },
            { name: '\u200B', value: '\u200B', inline: true }
          );
        embed.setURL(`https://idleon.info/wiki/${monster.Name.replaceAll(' ', '_')}`);
        break;
      case 'MINING':
      case 'CHOPPIN':
      case 'CATCHING':
      case 'FISHING':
        fields.push(
          { name: '🎯 5%', value: `${defense / 4}`, inline: true },
          {
            name: '🎯 100%',
            value: `${this.getProwessReq(defense, 1)}`,
            inline: true,
          }
        );
        for (let i = 2; i <= 5; i++) {
          fields.push({
            name: `🎯 x${i}`,
            value: `${this.getProwessReq(defense, i)}`,
            inline: true,
          });
        }
        fields.push({
          name: '⭐ Base XP',
          value: `${monster.ExpGiven}`,
          inline: true,
        });
        embed.setFooter({ text: 'All values are base values (no Prowess bonuses included!)' });
        embed.setURL(`https://idleon.info/wiki/${monster.AFKtype}`);
        break;
      default:
        this.logger.error('Unknown AFKtype!');
    }

    return embed.addFields(fields);
  }

  private getItemDetailsEmbed(item: ItemData) {
    const embed = new EmbedBuilder()
      .setTitle(item.displayName)
      .setURL(`https://idleon.info/wiki/${item.displayName.replaceAll(' ', '_')}`);
    const fields: APIEmbedField[] = [];

    if (item.description != undefined) embed.setDescription(item.description.join(' '));

    if (item.typeGen === 'aWeapon') fields.push({ name: 'Type', value: item.Type });

    if (item.Class != undefined) {
      fields.push({ name: 'Class', value: item.Class });
      fields.push({ name: 'Stats', value: '--------------------------------' });
      if (item.Weapon_Power != undefined)
        fields.push({ name: '⚔️ WP', value: item.Weapon_Power, inline: true });
      if (item.STR != undefined) fields.push({ name: '✊ STR', value: item.STR, inline: true });
      if (item.AGI != undefined) fields.push({ name: '🦶 AGI', value: item.AGI, inline: true });
      if (item.WIS != undefined) fields.push({ name: '📘 WIS', value: item.WIS, inline: true });
      if (item.LUK != undefined) fields.push({ name: '🍀 LUK', value: item.LUK, inline: true });
      if (item.Defence) fields.push({ name: '🛡️ Defence', value: item.Defence, inline: true });
      if (item.Upgrade_Slots_Left)
        fields.push({
          name: '⏫ Upgrade Slots',
          value: item.Upgrade_Slots_Left,
          inline: true,
        });
      if (item.miscUp1 != undefined)
        fields.push({ name: 'Misc', value: item.miscUp1, inline: true });
      if (item.miscUp2 != undefined)
        fields.push({ name: '\u200B', value: item.miscUp2, inline: true });
    }

    if (item.typeGen === 'dCard') {
      fields.push(
        {
          name: '🎴 Card Bonus',
          value: `${item.cardData![2]}`,
          inline: true,
        },
        {
          name: 'Bonus/Tier',
          value: `${item.cardData![3]}`,
          inline: true,
        },
        {
          name: 'Cards Req For Upgrade',
          value: `${item.cardData![1]}`,
        }
      );
    } else
      fields.push({
        name: '💰 - Sell Price',
        value: this.parseCurrency(Number(item.sellPrice)),
      });

    if (item.sources != undefined) {
      fields.push({ name: 'Sources', value: item.sources.join(', ') });
    }

    return embed.addFields(fields);
  }

  private async chooseOption(
    authorId: string,
    channel: TextBasedChannel,
    item: ItemData,
    monster: MonsterData
  ): Promise<{
    response: InteractionReplyOptions;
    collector: InteractionCollector<ButtonInteraction>;
  }> {
    const dynamicLabel = monster.AFKtype === 'FIGHTING' ? 'Monster' : 'Skilling';
    const monsterBtn = new ButtonBuilder()
      .setCustomId('monsterBtn')
      .setLabel(dynamicLabel)
      .setStyle(ButtonStyle.Primary);
    const itemBtn = new ButtonBuilder()
      .setCustomId('itemBtn')
      .setLabel('Item')
      .setStyle(ButtonStyle.Primary);
    const row = new ActionRowBuilder<ButtonBuilder>()
      .addComponents(monsterBtn, itemBtn);

    const questionReply = {
      content: 'Which do you want?',
      components: [row],
    };

    const collector = channel.createMessageComponentCollector({
      filter: (i) => i.customId === 'monsterBtn' || i.customId === 'itemBtn',
      componentType: ComponentType.Button,
      time: 10000,
    });

    collector.on('collect', async (interaction) => {
      if (interaction.user.id !== authorId) {
        collector.dispose(interaction);
        interaction.reply({
          content: "❌ You cannot interact with someone else's command!",
          ephemeral: true,
        });
        return;
      }

      if (interaction.customId === 'monsterBtn') {
        await interaction.update({
          content: undefined,
          embeds: [this.getMonsterDetailsEmbed(monster)],
          components: [],
        });
        collector.stop('finished');
      }

      if (interaction.customId === 'itemBtn') {
        await interaction.update({
          content: undefined,
          embeds: [this.getItemDetailsEmbed(item)],
          components: [],
        });
        collector.stop('finished');
      }
    });

    return { response: questionReply, collector };
  }
}

export const command = InfoCommand;
