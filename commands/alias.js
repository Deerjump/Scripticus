const { MessageEmbed } = require('discord.js');
const alias = require('./../util/alias');

module.exports = {
  name: 'alias',
  description: 'Find all the accepted aliases for a monster or item!',
  usage: '<item or monster name>',
  args: true,
  cooldown: 1,
  execute(message, args) {
    const lowerCaseArgs = args.join(' ').toLowerCase();
    let s = 10;

    const author = message.author;
    let aliases = alias.getAliases(lowerCaseArgs);
    let title = `Aliases for ${lowerCaseArgs}`;
    message.reply(getAliasEmbed(title, aliases)).then(message => {
      if (aliases.length < s) return;
      message.react('➡️');
      const collector = message.createReactionCollector(
        // only collect left and right arrow reactions from the message author
        (reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === author.id,
        // time out after a minute
        { time: 60000 }
      );

      let currentIndex = 0;
      collector.on('collect', reaction => {
        // remove the existing reactions
        message.reactions.removeAll().then(async () => {
          // increase/decrease index
          reaction.emoji.name === '⬅️' ? currentIndex -= s : currentIndex += s;
          // edit message with new embed
          message.edit(getAliasEmbed(title, aliases, currentIndex));
          // react with left arrow if it isn't the start (await is used so that the right arrow always goes after the left)
          if (currentIndex !== 0) await message.react('⬅️');
          // react with right arrow if it isn't the end
          if (currentIndex + s < aliases.length) await message.react('➡️');
        });
      });
      collector.on('end', () => {
        const expiredEmbed = new MessageEmbed()
          .setTitle(message.embeds[0].title)
          .addFields(message.embeds[0].fields)
          .setFooter('❌Message has expired! ');
        message.edit(expiredEmbed);
        message.reactions.removeAll().then(() => {
        });
      });
    });

    if (!aliases) {
      return message.reply(`No aliases found for ${lowerCaseArgs}`);
    }
  }
};

function getAliasEmbed(title, aliases, start = 0, size = 10) {
  const embed = new MessageEmbed();
  embed.setTitle(title);
  const fields = [];
  fields.push({
    name: `Alias, ${start} to ${start + size} of ${aliases.length}`,
    value: aliases.slice(start, start + size)
  });

  return embed.addFields(fields);
}
