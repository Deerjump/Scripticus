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
    console.log('User input args:' + lowerCaseArgs);
    const response = new MessageEmbed();

    const item = getItem(lowerCaseArgs);
    let itemDesc;
    if (item) {
      console.log(item);
      itemDesc = `Name: ${item.Name}, Sell Price: ${item.sellPrice}, type: ${item.type}, Level Required: ${item.lvReqToEquip}`;
    }

    const monster = getMonster(lowerCaseArgs);

    if (monster) {
      console.log(monster);
      message.reply(buildMonsterEmbed(monster, response));
    }
    if (!item && !monster) {
      return message.reply("That item/monster doesn't exist!");
    }
  },
};

function getMonster(name) {
  let toReturn;
  for (const [, value] of Object.entries(monsterList)) {
    if (value.Name && value.Name.toLowerCase().replace(/_/g, ' ') === name) {
      toReturn = value;
    }
  }
  return toReturn;
}

function buildMonsterEmbed(monster, embed) {
  const monsterName = monster.Name.replace(/_/g, ' ');
  embed.setColor('#e53935');
  switch (monster.AFKtype) {
  case 'FIGHTING':
    embed.setTitle(monsterName);
    embed.addFields(
      { name: ':dart: HP', value: `${monster.MonsterHPTotal.toLocaleString()}`, inline: true },
      { name: ':dagger: Attack', value: `${monster.Damages[0].toLocaleString()}`, inline: true },
      { name: '\u200B', value: '\u200B', inline: true },
      { name: ':dart: Accuracy for 5%', value: `${(monster.Defence * 0.5).toLocaleString()}`, inline: true },
      { name: ':dart: Accuracy for 50%', value: `${monster.Defence.toLocaleString()}`, inline: true },
      { name: ':dart: Accuracy for 100%', value: `${(monster.Defence * 1.5).toLocaleString()}`, inline: true },
      { name: ':star: Base XP', value: `${monster.ExpGiven.toLocaleString()}`, inline: true },
      { name: ':coffin: Respawn Time', value: `${monster.RespawnTime.toLocaleString()}s`, inline: true },
      { name: '\u200B', value: '\u200B', inline: true },
    );
    embed.setURL(`https://idleon.info/wiki/${monster.Name}`);
    break;
  case 'MINING':
    // TODO: Figure out how required eff. scales with x2, x3, etc.
    embed.setTitle(monsterName + ' Node');
    embed.addFields(
      { name: '5%', value: `${monster.Defence / 4}`, inline: true },
      { name: '100%', value: `${monster.Defence * 10}`, inline: true },
      { name: '\u200B', value: '\u200B', inline: true },
      { name: 'x2', value: `${monster.Defence * 10 * 16}`, inline: true },
      { name: 'x3', value: `${monster.Defence * 10 * 16 * 5.0625}`, inline: true },
      { name: 'x4', value: `${monster.Defence * 10 * 16 * 5.0625}`, inline: true },
      { name: ':star: Base XP', value: `${monster.ExpGiven}`, inline: true },
    );
    embed.setFooter('All values for % to mine are base values (no Prowess included!)');
    embed.setURL('https://idleon.info/wiki/Mining');
    break;
  case 'CHOPPIN':
    // TODO: Figure out how required eff. scales with x2, x3, etc.
    embed.setTitle(monsterName);
    embed.addFields(
      { name: '5%', value: `${monster.Defence / 4}`, inline: true },
      { name: '100%', value: `${monster.Defence * 10}`, inline: true },
      { name: '\u200B', value: '\u200B', inline: true },
      { name: 'x2', value: `${monster.Defence * 10 * 16}`, inline: true },
      { name: 'x3', value: `${monster.Defence * 10 * 16 * 5.0625}`, inline: true },
      { name: 'x4', value: `${monster.Defence * 10 * 16 * 5.0625}`, inline: true },
      { name: ':star: Base XP', value: `${monster.ExpGiven}`, inline: true },
    );
    break;
  case 'FISHING':
    break;
  case 'CATCHING':
    break;
  default:
    console.log('????');

  }
  // embed.setAuthor('Link to Wiki Page', 'https://static.miraheze.org/idleonwiki/0/0e/LoIFavicon.png', `https://idleon.info/wiki/${monster.Name}`);
  // embed.setFooter(`https://idleon.info/wiki/${monsterName}`, 'https://static.miraheze.org/idleonwiki/0/0e/LoIFavicon.png');
  // embed.setThumbnail('https://static.miraheze.org/idleonwiki/0/0e/LoIFavicon.png');
  return embed;
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
