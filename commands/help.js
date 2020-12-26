const { prefix } = require('../config.json');
const { MessageEmbed } = require('discord.js');
module.exports = {
   name: 'help',
   description: 'List all of my commands or info about a specific command',
   aliases: ['commands'],
   usage: '<commandName>',
   cooldown: 5,
   execute(message, args) {
      const { commands } = message.client;
      const embed = new MessageEmbed()
         .setColor('#00FF00');

      if(!args.length) {
         embed.setTitle(`Help Command`);
         embed.addField('Commands:', commands.map(command => `**${command.name}**: ${command.description}`));
         return message.author.send(embed)
            .then(() => {
               if (message.channel.type === 'dm') return;
               message.reply('I\'ve sent you a DM with all my commands!');
            })
            .catch(error => {
               console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
               message.reply('it seems like I can\'t DM you! Do you have DM\'s disabled?');
            });
      }
      const name = args[0].toLowerCase();
      const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

      if(!command) {
         return message.reply('that\'s not a valid command');
      }

      embed.setTitle(`**Command**: *${command.name}*`);
      if (command.aliases) embed.addField('Aliases:', command.aliases.join(', '));
      if (command.description) embed.addField('Description:', command.description);
      if (command.aliases) embed.addField('Usage:', `${prefix}${command.name} ${command.usage}`);
      embed.addField('Cooldown:', `${command.cooldown || 3} seconds(s)`);

      message.channel.send(embed);
   },
};