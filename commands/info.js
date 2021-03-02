const { MessageEmbed } = require('discord.js');
const itemList = require('../util/items.js');
const monsterList = require('./../util/monsters.js');
const alias = require('./../util/alias');

module.exports = {
  name: 'info',
  description: 'Find information on monsters or items!',
  usage: '<item or monster name>',
  args: true,
  cooldown: 1,
  execute(message, args) {
    const lowerCaseArgs = args.join(' ').toLowerCase();

    const item = getItem(lowerCaseArgs);
    if (item) {
      return message.reply(getItemDetailsEmbed(item));
    }

    const monster = getMonster(lowerCaseArgs);
    if (monster) {
      return message.reply(getMonsterDetailsEmbed(monster));
    }

    if (!item && !monster) {
      return message.reply('That item/monster doesn\'t exist!');
    }
  }
};

function getProwessReq(defense, level) {
  return defense * 10 * Math.pow(level, 1 / (0.25));
}

function getMonster(name) {
  for (const value of Object.values(monsterList)) {
    if (!value.Name) continue;
    let displayName = value.Name.toLowerCase().replace(/_/g, ' ');
    if (value.Name && displayName === name) {
      return value;
    }
    let found = alias.find(name, value, displayName);
    if (found)
      return value;
  }
  return undefined;
}

function getMonsterDetailsEmbed(monster) {
  const embed = new MessageEmbed();
  const monsterName = monster.Name.replace(/_/g, ' ');
  embed.setTitle(monsterName);
  const fields = [];

  switch (monster.AFKtype) {
    case 'FIGHTING':
      fields.push(
        { name: ':dart: HP', value: `${monster.MonsterHPTotal}`, inline: true },
        { name: ':dagger: Attack', value: `${monster.Damages[0]}`, inline: true },
        { name: '\u200B', value: '\u200B', inline: true },
        { name: ':dart: Accuracy for 5%', value: `${(monster.Defence * 0.5)}`, inline: true },
        { name: ':dart: Accuracy for 50%', value: `${monster.Defence}`, inline: true },
        { name: ':dart: Accuracy for 100%', value: `${(monster.Defence * 1.5)}`, inline: true },
        { name: ':star: Base XP', value: `${monster.ExpGiven}`, inline: true },
        { name: ':coffin: Respawn Time', value: `${monster.RespawnTime}s`, inline: true },
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
          value: `${getProwessReq(monster.Defence, i).toLocaleString()}`,
          inline: true
        });
      }
      fields.push({ name: ':star: Base XP', value: `${monster.ExpGiven}`, inline: true });
      embed.setFooter('All values are base values (no Prowess bonuses included!)');
      embed.setURL(`https://idleon.info/wiki/${monster.AFKtype}`);
      break;
    default:
      console.error('Unknown AFKtype!');
  }

  return embed.addFields(fields);
}

function getItem(name) {
  for (const value of Object.values(itemList)) {
    if (value.Name && value.Name.toLowerCase() === name) {
      return value;
    }
    let found = alias.find(name, value);
    if (found)
      return value;
  }

  return undefined;
}

function getItemDetailsEmbed(item) {
  const embed = new MessageEmbed();
  embed.setTitle(item.Name);
  const fields = [];

  fields.push({ name: 'Sell Price', value: item.sellPrice });
  fields.push({ name: 'Type', value: item.type });
  if (item.stats && !item.description) {
    fields.push({ name: 'Class', value: item.class });
    fields.push({ name: 'Stats', value: '--------------------------------' });
    Object.keys(item.stats).forEach((key) => {
      fields.push({ name: [key], value: item.stats[key], inline: true });
    });
  }

  // To exclude card item from providing it's description
  if (item.description && !item.cardData) {
    fields.push({ name: 'Description', value: item.description });
  }

  if (item.cardData) {
    fields.push({
      name: 'Card Bonus',
      value: `${item.cardData.value}${item.cardData.bonus.replaceAll('_', ' ')}`
    });
  }
  if (item.sources) {
    fields.push({ name: 'Sources', value: item.sources.join(', ') });
  }

  return embed.addFields(fields);
}
