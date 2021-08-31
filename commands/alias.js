const { MessageEmbed } = require('discord.js');
const Logger = require('../util/Logger.js');
const alias = require('../util/alias');

const logger = new Logger('Alias');

module.exports = {
  name: 'alias',
  description: 'Find all the accepted aliases for a monster or item!',
  usage: '<item or monster name>',
  args: true,
  cooldown: 1,
  async execute(message, args) {
    const lowerCaseArgs = args.join(' ').toLowerCase();
    const s = 10;

    const { author } = message;
    const aliases = alias.getAliases(lowerCaseArgs).filter(alias => alias.toLowerCase() !== lowerCaseArgs);

    if (aliases.length === 0) {
      return message.reply(`No aliases found for ${lowerCaseArgs}`);
    }

    const title = `Aliases for ${lowerCaseArgs}`;
    message.reply(getAliasEmbed(title, aliases)).then(async (msg) => {
      if (aliases.length < s) return;
      await msg.react('➡️');

      // only collect left and right arrow reactions from the message author
      const filter = (reaction, user) =>
        ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === author.id;

      const collector = msg.createReactionCollector({ filter, time: 60000 });

      let currentIndex = 0;
      collector.on('collect', (reaction) => {
        // remove the existing reactions
        msg.reactions
          .removeAll()
          .then(async () => {
            // increase/decrease index
            reaction.emoji.name === '⬅️'
              ? (currentIndex -= s)
              : (currentIndex += s);
            // edit message with new embed
            msg.edit(getAliasEmbed(title, aliases, currentIndex));
            // react with left arrow if it isn't the start (await is used so that the right arrow always goes after the left)
            if (currentIndex !== 0) await msg.react('⬅️');
            // react with right arrow if it isn't the end
            if (currentIndex + s < aliases.length) await msg.react('➡️');
          })
          .catch((err) => {
            logger.log(err);
          });
      });
      collector.on('end', () => {
        const expiredEmbed = new MessageEmbed()
          .setTitle(msg.embeds[0].title)
          .addFields(msg.embeds[0].fields)
          .setFooter('❌Message has expired! ');
        msg.edit({ embeds: [expiredEmbed] });
        msg.reactions.removeAll().catch((err) => {
          logger.log(err);
        });
      });
    });
  },
};

function getAliasEmbed(title, aliases, start = 0, size = 10) {
  const embed = new MessageEmbed();
  const pageMax = start + size;
  embed.setTitle(title);
  embed.addFields([
    {
      name: `${start} to ${
        aliases.length < pageMax ? aliases.length : pageMax
      } of ${aliases.length}`,
      value: aliases.slice(start, start + size).join(', '),
    },
  ]);

  return { embeds: [embed] };
}
