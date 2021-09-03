const items = require('../util/itemRepository.js');
const monsterList = require('../util/monsters.js');
const { MessageEmbed } = require('discord.js');
const Logger = require('../util/Logger.js');
const alias = require('../util/alias.js');

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

    const monster = getMonster(args.join(' '));
    if (monster) {
      return message.reply({ embeds: [getMonsterDetailsEmbed(monster)] });
    }

    if (!item && !monster) {
      return message.reply('That item/monster doesn\'t exist!');
    }
  }
};

function getProwessReq(defense, level) {
  return defense * 10 * Math.pow(level, 1 / (0.25));
}

function parseAttackStat({ Damages, SpecialType }) {
  if (SpecialType !== 'a') return Damages[0];

  return `${Math.min(...Damages)} - ${Math.max(...Damages)}`;
}

function parseRespawnTime(respawnTime) {
  // For bosses with respawnTime = 'Special'
  if (isNaN(respawnTime)) return respawnTime;

  const h = Math.floor(respawnTime / 3600);
  const m = Math.floor(respawnTime % 3600 / 60);
  const s = Math.floor(respawnTime % 3600 % 60);
  const timeString = `${h}h ${m}m ${s}s`;
  return timeString;
}

function parseSellPrice(amount) {
  const currencies = [];
  const imgs = ['🟤','⚪','🟡','🔵', '🟣'];
  for (let i = 0; i < imgs.length; i++) {
    const currency = amount % 100;
    currencies.push(currency);
    amount -= currency;
    amount /= 100;
  }

  return currencies.reduceRight((prev, curr, i ) => {
    const str = curr ? `${imgs[i]} ${curr} ` : '';
    return prev + str;
  }, '');
}

function getMonster(name) {
  for (const value of Object.values(monsterList)) {
    if (!value.Name) continue;
    const displayName = value.Name.toLowerCase().replace(/_/g, ' ');
    if (value.Name && displayName === name) {
      return value;
    }
    const found = alias.find(name, value, displayName);
    if (found) {
      return value;
    }
  }
  return undefined;
}

function getMonsterDetailsEmbed(monster) {
  const embed = new MessageEmbed();
  const monsterName = monster.Name.replace(/_/g, ' ');
  embed.setTitle(monsterName);
  let fields = [];
  const attackText = parseAttackStat(monster);
  const respawnTimeText = parseRespawnTime(monster.RespawnTime);
  switch (monster.AFKtype) {
  case 'FIGHTING':
    fields.push(
      { name: ':heart: HP', value: monster.MonsterHPTotal, inline: true },
      { name: ':dagger: Attack', value: `\u200B${attackText}`, inline: true },
      { name: '\u200B', value: '\u200B', inline: true },
      { name: ':dart: Accuracy for 5%', value: `${monster.Defence * 0.5}`, inline: true },
      { name: ':dart: Accuracy for 100%', value: `${monster.Defence * 1.5}`, inline: true },
      { name: '\u200B', value: '\u200B', inline: true },
      { name: ':star: Base XP', value: monster.ExpGiven, inline: true },
      // For whatever reason, starting a field's value with a number causes following characters to not display at all. \u200B was added as a fix.
      { name: ':coffin: Respawn Time', value: `\u200B${respawnTimeText}`, inline: true },
      { name: '\u200B', value: '\u200B', inline: true }
    );
    embed.setURL(`https://idleon.info/wiki/${monster.Name}`);
    break;
  case 'MINING':
  case 'CHOPPIN':
  case 'CATCHING':
  case 'FISHING':
    fields.push(
      { name: ':dart: 5%', value: `${monster.Defence / 4}`, inline: true },
      { name: ':dart: 100%', value: `${getProwessReq(monster.Defence, 1)}`, inline: true }
    );
    for (let i = 2; i <= 5; i++) {
      fields.push({
        name: `:dart: x${i}`,
        value: `${getProwessReq(monster.Defence, i)}`,
        inline: true
      });
    }
    fields.push({ name: ':star: Base XP', value: `${monster.ExpGiven}`, inline: true });
    embed.setFooter('All values are base values (no Prowess bonuses included!)');
    embed.setURL(`https://idleon.info/wiki/${monster.AFKtype}`);
    break;
  default:
    logger.error('Unknown AFKtype!');
  }

  fields = fields.map(field => {
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
  embed.setURL(`https://idleon.info/wiki/${item.displayName.replaceAll(' ', '_')}`);
  const fields = [];
  
  if (item.description) 
    embed.setDescription(item.description.join(' '));
  
  if (item.typeGen === 'aWeapon')
    fields.push({ name: 'Type', value: item.Type });

  if (item.Class) {
    fields.push({ name: 'Class', value: item.Class });
    fields.push({ name: 'Stats', value: '--------------------------------' });
    if (item.STR)
      fields.push({ name: '✊ STR', value: item.STR, inline: true })
    if (item.AGI)
      fields.push({ name: '🦶 AGI', value: item.AGI, inline: true })
    if (item.WIS)
      fields.push({ name: '📘 WIS', value: item.WIS, inline: true })
    if (item.LUK)
      fields.push({ name: '🍀 LUK', value: item.LUK, inline: true })
    if (item.Defence)
      fields.push({ name: '🛡️ Defence', value: item.Defence, inline: true })
    if (item.Upgrade_Slots_Left)
      fields.push({ name: '⏫ Upgrade Slots', value: item.Upgrade_Slots_Left, inline: true })
    if (item.miscUp1)
      fields.push({ name: 'Misc', value: item.miscUp1, inline: true })
    if (item.miscUp2)
      fields.push({ name: '\u200B', value: item.miscUp2, inline: true })
  }

  if (item.typeGen === 'dCard') {
    fields.push({
      name: '🎴 Card Bonus',
      value: `${item.cardData[2]}`,
      inline: true
    });
    fields.push({
      name: 'Bonus/Tier',
      value: `${item.cardData[3]}`,
      inline: true
    });
    fields.push({
      name: 'Cards Req For Upgrade',
      value: `${item.cardData[1]}`,
    })
  }
  else 
    fields.push({ name: '💰 - Sell Price', value: parseSellPrice(item.sellPrice) });

  if (item.sources) {
    fields.push({ name: 'Sources', value: item.sources.join(', ') });
  }

  return embed.addFields(fields);
}
