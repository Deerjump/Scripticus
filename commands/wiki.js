const fetch = require('node-fetch');
const querystring = require('querystring');
const { MessageEmbed } = require('discord.js');

const wikiUrl = 'https://idleon.info/';

module.exports = {
  name: 'wiki',
  description: 'Seach the Legends of Idleon Wiki!',
  usage: '<search word>',
  async execute(message, args) {
    const embed = new MessageEmbed();
    if (!args.length) {
      embed
        .setColor('#FF0000')
        .setTitle(wikiUrl)
        .setURL(wikiUrl)
        .addField('You could also:', 'Supply a search term!\n!wiki Mafioso');

      message.channel.send(embed);
      // message.channel.send('You need to supply a search term!');
      return;
    }
    const query = querystring.stringify({ search: args.join(' ') });
    fetch(`https://idleon.info/w/index.php?${query}`)
      .then((res) => {
        console.log(res.url);
        embed.setColor('#FF0000').setTitle(res.url).setURL(res.url);
        message.channel.send(embed);
      })
      .catch((err) => console.error(err));
  },
};
