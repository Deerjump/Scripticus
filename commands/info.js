const { MessageEmbed } = require('discord.js');
const itemList = require('../util/items.js');
const monsterList = require('./../util/monsters.js');

module.exports = {
  name: 'info',
  description: 'Find information on monsters or items!',
  usage: '<item or monster name>',
  args: true,
  cooldown: 1,
  execute(message, args) {
    const lowerCaseArgs = args.join(' ').toLowerCase();
    const item = getItem(lowerCaseArgs);

    let itemDesc;
    if (item) {
      return message.reply(getItemDetailsEmbed(item));
    }
    const monster = getMonster(lowerCaseArgs);

    let monstDesc;
    if (monster) {
      monstDesc = `Name: ${monster.Name.replace('_', ' ')}, Activity: ${
        monster.AFKtype
      }, HP: ${monster.MonsterHPTotal}, Defence: ${monster.Defence}`;
    }
    if (!item && !monster) {
      return message.reply("That item/monster doesn't exist!");
    }
    const response = new MessageEmbed().setDescription(monstDesc || itemDesc);
    message.reply(response);
  },
};

function getMonster(name) {
  let toReturn;
  for (const [, value] of Object.entries(monsterList)) {
    if (value.Name && value.Name.toLowerCase().replace('_', ' ') === name) {
      toReturn = value;
    }
  }
  return toReturn;
}

function getItem(name) {
  let toReturn;
  for (const [, value] of Object.entries(itemList)) {
    if (value.Name && value.Name.toLowerCase() === name) {
      toReturn = value;
    }
  }

  return toReturn;
}

function getItemDetailsEmbed(item) {
  const embed = new MessageEmbed();
  embed.setTitle(item.Name);
  const fields = [];

  fields.push({ name: 'Sell Price', value: item.sellPrice });
  fields.push({ name: 'Type', value: item.type });
  if (item.stats && !item.description) {
    fields.push({ name: 'Class', value: item.class });
    fields.push({ name:'Stats', value:'--------------------------------' });
    Object.keys(item.stats).forEach((key) => {
      fields.push({ name: [key], value: item.stats[key], inline:true });
    });
  }

  // To exclude card item from providing it's description
  if (item.description && !item.cardData) {
    fields.push({ name: 'Description', value: item.description });
  }

  if (item.cardData) {
    fields.push({
      name: 'Card Bonus',
      value: `${item.cardData.value}${item.cardData.bonus.replaceAll(
        '_',
        ' '
      )}`,
    });
  }
  if (item.sources) {
    fields.push({ name: 'Sources', value: item.sources.join(', ') });
  }

  return embed.addFields(fields);
}
