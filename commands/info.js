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
    console.log(lowerCaseArgs);
    const item = getItem(lowerCaseArgs);
    let itemDesc;
    if (item) {
      console.log(item);
      itemDesc = `Name: ${item.Name}, Sell Price: ${item.sellPrice}, type: ${item.type}, Level Required: ${item.lvReqToEquip}`;
    }
    const monster = getMonster(lowerCaseArgs);

    let monstDesc;
    if (monster) {
      console.log(monster);
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
