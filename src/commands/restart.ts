module.exports = {
  name: 'restart',
  description: 'Restarts the bot!',
  whitelist: ['90598254688874496', '191085842469486592'],
  async execute(message) {
    if (this.whitelist.includes(message.author.id)) {
      await message.reply({
        content: 'Restarting bot!',
        allowedMentions: { users: [] },
      });
      return message.client.stop();
    }
    message.reply({
      content: 'You cannot use this command!',
      allowedMentions: { users: [] },
    });
  },
};
