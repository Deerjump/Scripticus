import {
  MessageEmbed,
  MessageActionRow,
  MessageButton,
  Message,
  EmbedFieldData,
} from 'discord.js';
import monsterRepository from '../repositories/monsterRepository';
import itemRepository from '../repositories/itemRepository';
import { Command, ItemData, MonsterData } from '@customTypes';
import { Logger } from '../utils/logger';
import { noMentions } from '../utils/utils';

class InfoCommand implements Command {
  public readonly name = 'info';
  public readonly description = 'Find information on monsters or items!';
  public readonly usage = '<item or monster name>';
  public readonly args = true;
  private readonly logger: Logger;

  constructor() {
    this.logger = new Logger('Info');
  }

  public execute(message: Message, args: string[]) {
    const item = itemRepository.getItem(args.join(' '));
    const monster = monsterRepository.getMonster(args.join(' '));

    if (item && monster) {
      return this.chooseOption(message, item, monster);
    }

    if (item) {
      return message.reply({
        embeds: [this.getItemDetailsEmbed(item)],
        ...noMentions,
      });
    }

    if (monster) {
      return message.reply({
        embeds: [this.getMonsterDetailsEmbed(monster)],
        ...noMentions,
      });
    }

    if (!item && !monster) {
      return message.reply({
        content: "That item/monster doesn't exist!",
        ...noMentions
      });
    }
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
    const imgs = ['🟤', '⚪', '🟡', '🔵', '🟣'];
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
    const embed = new MessageEmbed().setTitle(monster.Name);
    const defense = Number(monster.Defence);

    let fields: EmbedFieldData[] = [];
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
        if (monster.Attacks == null)
          fields.push(
            {
              name: '⚰️ Respawn Time',
              // For whatever reason, starting a field's value with a number causes following characters to not display at all. \u200B was added as a fix.
              value: `\u200B${this.parseRespawnTime(monster)}`,
              inline: true,
            },
            { name: '\u200B', value: '\u200B', inline: true }
          );
        embed.setURL(
          `https://idleon.info/wiki/${monster.Name.replaceAll(' ', '_')}`
        );
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
        embed.setFooter(
          'All values are base values (no Prowess bonuses included!)'
        );
        embed.setURL(`https://idleon.info/wiki/${monster.AFKtype}`);
        break;
      default:
        this.logger.error('Unknown AFKtype!');
    }

    return embed.addFields(fields);
  }

  private getItemDetailsEmbed(item: ItemData) {
    const embed = new MessageEmbed();
    embed.setTitle(item.displayName);
    embed.setURL(
      `https://idleon.info/wiki/${item.displayName.replaceAll(' ', '_')}`
    );
    const fields: EmbedFieldData[] = [];

    if (item.description != null)
      embed.setDescription(item.description.join(' '));

    if (item.typeGen === 'aWeapon')
      fields.push({ name: 'Type', value: item.Type });

    if (item.Class != null) {
      fields.push({ name: 'Class', value: item.Class });
      fields.push({ name: 'Stats', value: '--------------------------------' });
      if (item.Weapon_Power != null)
        fields.push({ name: '⚔️ WP', value: item.Weapon_Power, inline: true });
      if (item.STR != null)
        fields.push({ name: '✊ STR', value: item.STR, inline: true });
      if (item.AGI != null)
        fields.push({ name: '🦶 AGI', value: item.AGI, inline: true });
      if (item.WIS != null)
        fields.push({ name: '📘 WIS', value: item.WIS, inline: true });
      if (item.LUK != null)
        fields.push({ name: '🍀 LUK', value: item.LUK, inline: true });
      if (item.Defence)
        fields.push({ name: '🛡️ Defence', value: item.Defence, inline: true });
      if (item.Upgrade_Slots_Left)
        fields.push({
          name: '⏫ Upgrade Slots',
          value: item.Upgrade_Slots_Left,
          inline: true,
        });
      if (item.miscUp1 != null)
        fields.push({ name: 'Misc', value: item.miscUp1, inline: true });
      if (item.miscUp2 != null)
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

    if (item.sources != null) {
      fields.push({ name: 'Sources', value: item.sources.join(', ') });
    }

    return embed.addFields(fields);
  }

  private async chooseOption(
    message: Message,
    item: ItemData,
    monster: MonsterData
  ) {
    const dynamicLabel =
      monster.AFKtype === 'FIGHTING' ? 'Monster' : 'Skilling';
    const monsterBtn = new MessageButton()
      .setCustomId('monsterBtn')
      .setLabel(dynamicLabel)
      .setStyle('PRIMARY');
    const itemBtn = new MessageButton()
      .setCustomId('itemBtn')
      .setLabel('Item')
      .setStyle('PRIMARY');
    const row = new MessageActionRow().addComponents(monsterBtn, itemBtn);

    const sentMsg = await message.reply({
      content: 'Which do you want?',
      components: [row],
      ...noMentions
    });

    const collector = sentMsg.createMessageComponentCollector({
      filter: (i) => i.customId === 'monsterBtn' || i.customId === 'itemBtn',
      componentType: 'BUTTON',
      time: 10000,
    });

    collector.on('collect', async (interaction) => {
      if (interaction.user.id !== message.author.id) {
        collector.dispose(interaction);
        return interaction.reply({
          content: "❌ You cannot interact with someone else's command!",
          ephemeral: true,
        });
      }

      if (interaction.customId === 'monsterBtn') {
        await interaction.update({
          content: null,
          embeds: [this.getMonsterDetailsEmbed(monster)],
          components: [],
        });
        collector.stop('finished');
      }

      if (interaction.customId === 'itemBtn') {
        await interaction.update({
          content: null,
          embeds: [this.getItemDetailsEmbed(item)],
          components: [],
        });
        collector.stop('finished');
      }
    });

    collector.on('end', async (collected) => {
      if (collected.size !== 0) return;
      await sentMsg.edit({ content: '❌ Message Timeout', components: [] });
    });
  }
}

export const command = new InfoCommand();
