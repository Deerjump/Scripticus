const fetch = require('node-fetch');
const querystring = require('querystring');
const { MessageEmbed } = require('discord.js');

const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

module.exports = {
   name: 'urban',
   description: 'Gets the Urban Dictionary definition of a word',
   usage: '<word>',
   args: true,
   async execute(message, args) {
      if(!args.length) {
         return message.channel.send('You need to supply a search term!');
      }
      const query = querystring.stringify({ term: args.join(' ') });
      const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
      if (!list.length) {
         return message.reply(`No results found for **${args.join(' ')}**.`);
      }

      const [answer] = list;

      const embed = new MessageEmbed()
         .setColor('#EFFF00')
         .setTitle(answer.word)
         .setURL(answer.permalink)
         .addFields(
            { name: 'Definition', value: trim(answer.definition, 1024) },
            { name: 'Example', value: trim(answer.example, 1024) },
            // eslint-disable-next-line comma-dangle
            { name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` }
            );

      message.channel.send(embed);
   },
};