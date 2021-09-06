const items = require('../data/itemRepository');
const monsters = require('../data/monsterRepository');
const { MessageEmbed } = require('discord.js');
const Logger = require('../util/Logger.js');

const logger = new Logger('Info');

module.exports = {
  name: 'info',
  description: 'Find information on monsters or items!',
  usage: '<item or monster name>',
  args: true,
  cooldown: 1,
  execute(message, args) {
    const item = items.getItem(args.join(' '));
    if (item) {
      return message.reply({ embeds: [getItemDetailsEmbed(item)] });
    }

    const monster = monsters.getMonster(args.join(' '));
    if (monster) {
      return message.reply({ embeds: [getMonsterDetailsEmbed(monster)] });
    }

    if (!item && !monster) {
      return message.reply("That item/monster doesn't exist!");
    }
  },
};

function getProwessReq(defense, level) {
  return defense * 10 * Math.pow(level, 1 / 0.25);
}

function parseAttackStat({ Damages, Attacks }) {
  if (!Attacks) return Damages;

  const values = Object.values(Attacks);
  return `${Math.min(...values)} - ${Math.max(...values)}`;
}

function parseRespawnTime({ RespawnTime, Attacks }) {
  // For world bosses
  if (Attacks) return;
  if (RespawnTime == '745000') return 'On Shop Reset';

  const h = Math.floor(RespawnTime / 3600);
  const m = Math.floor((RespawnTime % 3600) / 60);
  const s = Math.floor((RespawnTime % 3600) % 60);
  const timeString = `${h}h ${m}m ${s}s`;
  return timeString;
}

function parseCurrency(amount) {
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

function getMonsterDetailsEmbed(monster) {
  const embed = new MessageEmbed();
  const monsterName = monster.Name;
  embed.setTitle(monsterName);
  let fields = [];
  const attackText = parseAttackStat(monster);
  const respawnTimeText = parseRespawnTime(monster);
  switch (monster.AFKtype) {
    case 'FIGHTING':
      fields.push(
        { name: '❤️ HP', value: monster.MonsterHPTotal, inline: true },
        { name: '🗡️ Attack', value: `\u200B${attackText}`, inline: true },
        { name: '\u200B', value: '\u200B', inline: true },
        {
          name: '🎯 Accuracy for 5%',
          value: `${monster.Defence * 0.5}`,
          inline: true,
        },
        {
          name: '🎯 Accuracy for 100%',
          value: `${monster.Defence * 1.5}`,
          inline: true,
        },
        { name: '\u200B', value: '\u200B', inline: true },
        { name: '⭐ Base XP', value: monster.ExpGiven, inline: true }
      );
      if (respawnTimeText)
        fields.push(
          {
            name: '⚰️ Respawn Time',
            // For whatever reason, starting a field's value with a number causes following characters to not display at all. \u200B was added as a fix.
            value: `\u200B${respawnTimeText}`,
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
        { name: '🎯 5%', value: `${monster.Defence / 4}`, inline: true },
        {
          name: '🎯: 100%',
          value: `${getProwessReq(monster.Defence, 1)}`,
          inline: true,
        }
      );
      for (let i = 2; i <= 5; i++) {
        fields.push({
          name: `🎯 x${i}`,
          value: `${getProwessReq(monster.Defence, i)}`,
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
      logger.error('Unknown AFKtype!');
  }

  fields = fields.map((field) => {
    if (!isNaN(parseFloat(field.value))) {
      field.value = parseFloat(field.value).toLocaleString();
    }
    return field;
  });
  return embed.addFields(fields);
}

function getItemDetailsEmbed(item) {
  const embed = new MessageEmbed();
  embed.setTitle(item.displayName);
  embed.setURL(
    `https://idleon.info/wiki/${item.displayName.replaceAll(' ', '_')}`
  );
  const fields = [];

  if ('description' in item) embed.setDescription(item.description.join(' '));

  if (item.typeGen === 'aWeapon')
    fields.push({ name: 'Type', value: item.Type });

  if ('Class' in item) {
    fields.push({ name: 'Class', value: item.Class });
    fields.push({ name: 'Stats', value: '--------------------------------' });
    if ('Weapon_Power' in item)
      fields.push({ name: '⚔️ WP', value: item.Weapon_Power, inline: true });
    if ('STR' in item)
      fields.push({ name: '✊ STR', value: item.STR, inline: true });
    if ('AGI' in item)
      fields.push({ name: '🦶 AGI', value: item.AGI, inline: true });
    if ('WIS' in item)
      fields.push({ name: '📘 WIS', value: item.WIS, inline: true });
    if ('LUK' in item)
      fields.push({ name: '🍀 LUK', value: item.LUK, inline: true });
    if ('Defence' in item)
      fields.push({ name: '🛡️ Defence', value: item.Defence, inline: true });
    if ('Upgrade_Slots_Left' in item)
      fields.push({
        name: '⏫ Upgrade Slots',
        value: item.Upgrade_Slots_Left,
        inline: true,
      });
    if ('miscUp1' in item)
      fields.push({ name: 'Misc', value: item.miscUp1, inline: true });
    if ('miscUp2' in item)
      fields.push({ name: '\u200B', value: item.miscUp2, inline: true });
  }

  if (item.typeGen === 'dCard') {
    fields.push(
      {
        name: '🎴 Card Bonus',
        value: `${item.cardData[2]}`,
        inline: true,
      },
      {
        name: 'Bonus/Tier',
        value: `${item.cardData[3]}`,
        inline: true,
      },
      {
        name: 'Cards Req For Upgrade',
        value: `${item.cardData[1]}`,
      }
    );
  } else
    fields.push({
      name: '💰 - Sell Price',
      value: parseCurrency(item.sellPrice),
    });

  if ('sources' in item) {
    fields.push({ name: 'Sources', value: item.sources.join(', ') });
  }

  return embed.addFields(fields);
}
