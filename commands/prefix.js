const { updateServerPrefix } = require('../mongo/settings.js');

module.exports = {
  name: 'prefix',
  description: 'Changes prefix for current server',
  args: true,
  usage: '<new prefix>',
  async execute(message, args) {
    const newPrefix = args[0];
    if (args[0] && args[0].length === 0) return message.channel.send('Prefix must be at least 1 character!');
    try {
      const guildID = message.guild.id;
      const guildSettings = message.client.guildSettings.get(guildID) || {};
      updateServerPrefix(guildID, newPrefix);
      message.client.guildSettings.set(guildID, { ...guildSettings, prefix: newPrefix });
      message.channel.send(`Prefix is now sent to ${newPrefix}`);
    } catch (err) {
      console.log(err);
    }

  },
};
