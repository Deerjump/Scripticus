const Logger = require('../util/Logger.js');
const logger = new Logger('Prefix');

module.exports = {
  name: 'prefix',
  description: 'Changes prefix for current server',
  args: true,
  usage: '<new prefix>',
  whitelist: ['90598254688874496', '191085842469486592'],
  async execute(message, args) {
    if (this.whitelist.includes(message.author.id)) {
      if (args[0] && args[0].length === 0) {
        return message.reply({
          content: 'Prefix must be at least 1 character!',
          allowedMentions: { users: [] },
        });
      }

      if (message.channel.type === 'DM') {
        return message.reply({
          content: "You can't use this command in a private message!",
          allowedMentions: { users: [] },
        });
      }

      try {
        const newPrefix = args[0];
        const guildID = message.guild.id;
        const guildSettings = message.client.guildSettings.get(guildID) || {};
        message.client.mongo.updateGuildPrefix(guildID, newPrefix);
        message.client.guildSettings.set(guildID, {
          ...guildSettings,
          prefix: newPrefix,
        });
        message.reply({
          content: `Prefix is now sent to ${newPrefix}`,
          allowedMentions: { users: [] },
        });
      } catch (err) {
        logger.log(err);
      }
    } else {
      message.reply({
        content: 'You cannot use this command!',
        ephemeral: true,
        allowedMentions: { users: [] },
      });
    }
  },
};
