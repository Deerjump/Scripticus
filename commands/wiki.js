const fetch = require('node-fetch');
const querystring = require('querystring');
const { MessageEmbed } = require('discord.js');
const Logger = require('../util/Logger.js');

const logger = new Logger('Wiki');
const wikiUrl = 'https://idleon.info/';

module.exports = {
  name: 'wiki',
  description: 'Seach the Legends of Idleon Wiki!',
  usage: '<search word>',
  args: true,
  async execute(message, args) {
    const embed = new MessageEmbed();
    if (!args.length) {
      embed
        .setColor('#FF0000')
        .setTitle(wikiUrl)
        .setURL(wikiUrl)
        .addField('You could also:', 'Supply a search term!\n!wiki Mafioso');

      message.reply({ embeds: [embed], allowedMentions: { users: [] } });
      return;
    }
    try {
      const query = new URLSearchParams({ search: args.join(' ') });
      const res = await fetch(`https://idleon.info/w/index.php?${query.toString()}`);
      message.reply({ content: res.url, allowedMentions: { users: [] } });
    } catch (err) {
      logger.error(err);
    }
  },
};
