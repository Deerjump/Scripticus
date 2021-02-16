const { updateGuildPrefix } = require('../mongo/settings.js');

module.exports = {
  name: 'prefix',
  description: 'Changes prefix for current server',
  args: true,
  usage: '<new prefix>',
  whitelist: ['90598254688874496', '191085842469486592'],
  async execute(message, args) {
    if (this.whitelist.includes(message.author.id)) {
      if (args[0] && args[0].length === 0) {
        return message.channel.send('Prefix must be at least 1 character!');
      }

      if (message.channel.type === 'dm') {
        return message.reply(
          "You can't use this command in a private message!"
        );
      }

      try {
        const newPrefix = args[0];
        const guildID = message.guild.id;
        const guildSettings = message.client.guildSettings.get(guildID) || {};
        updateGuildPrefix(guildID, newPrefix);
        message.client.guildSettings.set(guildID, {
          ...guildSettings,
          prefix: newPrefix,
        });
        message.channel.send(`Prefix is now sent to ${newPrefix}`);
      } catch (err) {
        console.log(err);
      }
    } else {
      message.channel.send('You cannot use this command!');
    }
  },
};
