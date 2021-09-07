const { DEFAULT_COOLDOWN } = require('../config.json');
const Logger = require('../util/Logger.js');
const { MessageEmbed } = require('discord.js');

const logger = new Logger('Help');

module.exports = {
  name: 'help',
  description: 'List all of my commands or info about a specific command',
  aliases: ['commands'],
  usage: '<commandName>',
  cooldown: 5,
  async execute(message, args) {
    const { commands } = message.client;
    const prefix = message.client.getPrefix(message);
    const embed = new MessageEmbed().setColor('#00FF00');

    if (!args.length) {
      embed.setTitle('Help Command');
      embed.addField(
        'Commands:',
        commands
          .map((command) => `**${command.name}**: ${command.description}`)
          .join('\n')
      );
      try {
        await message.reply({
          embeds: [embed],
          allowedMentions: { users: [] },
        });
        if (message.channel.type === 'DM') return;
        message.reply({
          content: "I've sent you a DM with all my commands!",
          allowedMentions: { users: [] },
        });
      } catch (error) {
        logger.error(
          `Could not send help DM to ${message.author.tag}.\n`,
          error
        );
        message.reply({
          content: "it seems like I can't DM you! Do you have DM's disabled?",
          allowedMentions: { users: [] },
        });
      }
      return;
    }
    const name = args[0].toLowerCase();
    const command =
      commands.get(name) ||
      commands.find((c) => c.aliases && c.aliases.includes(name));

    if (!command) {
      return message.reply({
        content: "That's not a valid command",
        allowedMentions: { users: [] },
      });
    }

    embed.setTitle(`**Command**: *${command.name}*`);
    if ('aliases' in command)
      embed.addField('Aliases:', command.aliases.join(', '));
    if ('description' in command) {
      embed.addField('Description:', command.description);
    }
    if ('usage' in command) {
      embed.addField('Usage:', `${prefix}${command.name} ${command.usage}`);
    }
    if ('options' in command) embed.addField('Options:', command.options);
    embed.addField(
      'Cooldown:',
      `${command.cooldown || DEFAULT_COOLDOWN} seconds(s)`
    );

    message.reply({ embeds: [embed], allowedMentions: { users: [] } });
  },
};
